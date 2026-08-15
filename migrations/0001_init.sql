-- Sultan Dairy Farm Management System — initial schema
-- Mirrors the browser-local `db` object in public/app.js (seed shape).

CREATE TABLE IF NOT EXISTS settings (
  key   TEXT PRIMARY KEY,
  value TEXT
);

-- Master herd register (single register, Purpose-tagged)
CREATE TABLE IF NOT EXISTS animals (
  id           TEXT PRIMARY KEY,
  purpose      TEXT,
  breed        TEXT,
  sex          TEXT,
  source       TEXT,
  date         TEXT,
  start_weight REAL,
  acq_cost     REAL,
  program_start TEXT,
  duration     INTEGER,
  target_adg   REAL,
  status       TEXT,
  bcs          REAL
);

CREATE TABLE IF NOT EXISTS weights (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  animal TEXT,
  date   TEXT,
  weight REAL,
  type   TEXT,
  bcs    REAL
);

CREATE TABLE IF NOT EXISTS feeding (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  date       TEXT,
  animal     TEXT,
  ingredient TEXT,
  qty        REAL
);

CREATE TABLE IF NOT EXISTS health (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  animal         TEXT,
  date           TEXT,
  type           TEXT,
  medicine       TEXT,
  dose           TEXT,
  next_due       TEXT,
  administered_by TEXT
);

CREATE TABLE IF NOT EXISTS purchases (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  date       TEXT,
  supplier   TEXT,
  ingredient TEXT,
  qty        REAL,
  rate       REAL
);

CREATE TABLE IF NOT EXISTS milk (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  date    TEXT,
  animal  TEXT,
  morning REAL,
  evening REAL
);

CREATE TABLE IF NOT EXISTS breeding (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  dam        TEXT,
  date       TEXT,
  source     TEXT,
  method     TEXT,
  expected   TEXT,
  check_date TEXT,
  result     TEXT
);

CREATE TABLE IF NOT EXISTS calving (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  dam       TEXT,
  date      TEXT,
  calf      TEXT,
  sex       TEXT,
  weight    REAL,
  ease      TEXT,
  colostrum TEXT
);

CREATE TABLE IF NOT EXISTS weaning (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  calf   TEXT,
  date   TEXT,
  weight REAL,
  age    INTEGER
);

CREATE TABLE IF NOT EXISTS customers (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  name    TEXT,
  phone   TEXT,
  address TEXT,
  type    TEXT,
  status  TEXT
);

CREATE TABLE IF NOT EXISTS milk_customers (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT,
  phone       TEXT,
  address     TEXT,
  daily_order REAL,
  rate        REAL,
  route       TEXT,
  status      TEXT,
  notes       TEXT
);

CREATE TABLE IF NOT EXISTS sales (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  animal    TEXT,
  date      TEXT,
  customer  TEXT,
  weight    REAL,
  price     REAL,
  invoice   TEXT,
  acq       REAL,
  feed_cost REAL
);

CREATE TABLE IF NOT EXISTS qurbani (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  animal   TEXT,
  date     TEXT,
  customer TEXT,
  weight   REAL,
  price    REAL,
  invoice  TEXT,
  cost     REAL
);

CREATE TABLE IF NOT EXISTS inventory (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  item      TEXT,
  category  TEXT,
  unit      TEXT,
  opening   REAL,
  purchased REAL,
  used      REAL,
  reorder   REAL
);

CREATE TABLE IF NOT EXISTS staff (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  name   TEXT,
  role   TEXT,
  phone  TEXT,
  joined TEXT,
  salary REAL,
  status TEXT
);

CREATE TABLE IF NOT EXISTS salary (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  date   TEXT,
  staff  TEXT,
  month  TEXT,
  amount REAL,
  method TEXT
);

CREATE INDEX IF NOT EXISTS idx_weights_animal  ON weights(animal);
CREATE INDEX IF NOT EXISTS idx_feeding_animal  ON feeding(animal);
CREATE INDEX IF NOT EXISTS idx_milk_animal     ON milk(animal);
CREATE INDEX IF NOT EXISTS idx_health_animal   ON health(animal);
CREATE INDEX IF NOT EXISTS idx_purchases_ingr  ON purchases(ingredient);
