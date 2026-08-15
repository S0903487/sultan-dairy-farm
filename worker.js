export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      return handleApi(request, env, url);
    }
    return env.ASSETS.fetch(request);
  },
};

async function handleApi(request, env, url) {
  const headers = { 'content-type': 'application/json; charset=utf-8' };
  try {
    if (url.pathname === '/api/health') {
      const { results } = await env.DB.prepare(
        "SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name"
      ).all();
      return json(
        {
          ok: true,
          db: 'sultan-dairy-farm',
          tables: results.map((r) => r.name),
        },
        headers
      );
    }

    if (url.pathname === '/api/animals' && request.method === 'GET') {
      const { results } = await env.DB.prepare('SELECT * FROM animals ORDER BY id').all();
      return json({ animals: results }, headers);
    }

    return json({ error: 'Not found' }, headers, 404);
  } catch (err) {
    return json({ error: err.message }, headers, 500);
  }
}

function json(data, headers, status = 200) {
  return new Response(JSON.stringify(data), { status, headers });
}
