/* Sultan Dairy — Farm Management System (v2) */

'use strict';

/* ============ Ingredient Database (56, from workbook) ============ */
const INGREDIENT_SEED = [
{i:1,name:'Maize Grain (Crushed)',cat:'Concentrate',sub:'Grain',dm:.88,cp:.09,tdn:.82,me:2.9684,ndf:.10},
{i:2,name:'Wheat Grain (Crushed)',cat:'Concentrate',sub:'Grain',dm:.88,cp:.12,tdn:.82,me:2.9684,ndf:.12},
{i:3,name:'Barley Grain (Crushed)',cat:'Concentrate',sub:'Grain',dm:.88,cp:.115,tdn:.75,me:2.715,ndf:.18},
{i:4,name:'Sorghum Grain (Jowar)',cat:'Concentrate',sub:'Grain',dm:.88,cp:.10,tdn:.78,me:2.8236,ndf:.12},
{i:5,name:'Pearl Millet Grain (Bajra)',cat:'Concentrate',sub:'Grain',dm:.88,cp:.115,tdn:.75,me:2.715,ndf:.15},
{i:6,name:'Broken Rice (Rice Kani)',cat:'Concentrate',sub:'Grain',dm:.88,cp:.08,tdn:.80,me:2.896,ndf:.08},
{i:7,name:'Cottonseed Cake (Banaula Khal)',cat:'Concentrate',sub:'Oilseed Cake',dm:.90,cp:.22,tdn:.68,me:2.4616,ndf:.35},
{i:8,name:'Cottonseed Meal (Solvent Extracted)',cat:'Concentrate',sub:'Oilseed Cake',dm:.90,cp:.28,tdn:.65,me:2.353,ndf:.30},
{i:9,name:'Canola / Sarson Cake',cat:'Concentrate',sub:'Oilseed Cake',dm:.90,cp:.36,tdn:.70,me:2.534,ndf:.25},
{i:10,name:'Sunflower Cake',cat:'Concentrate',sub:'Oilseed Cake',dm:.90,cp:.30,tdn:.65,me:2.353,ndf:.38},
{i:11,name:'Sunflower Meal (Decorticated)',cat:'Concentrate',sub:'Oilseed Cake',dm:.90,cp:.36,tdn:.68,me:2.4616,ndf:.28},
{i:12,name:'Soybean Meal',cat:'Concentrate',sub:'Oilseed Cake',dm:.89,cp:.46,tdn:.82,me:2.9684,ndf:.12},
{i:13,name:'Groundnut Cake',cat:'Concentrate',sub:'Oilseed Cake',dm:.90,cp:.42,tdn:.75,me:2.715,ndf:.20},
{i:14,name:'Guar Meal / Korma (Refined)',cat:'Concentrate',sub:'Oilseed Cake',dm:.90,cp:.48,tdn:.77,me:2.7874,ndf:.20},
{i:15,name:'Guar Churi (Coarse Grade)',cat:'Concentrate',sub:'Oilseed Cake',dm:.90,cp:.32,tdn:.60,me:2.172,ndf:.35},
{i:16,name:'Maize Gluten Meal',cat:'Concentrate',sub:'Oilseed Cake',dm:.90,cp:.46,tdn:.80,me:2.896,ndf:.10},
{i:17,name:'Maize Gluten Feed',cat:'Concentrate',sub:'Oilseed Cake',dm:.88,cp:.21,tdn:.72,me:2.6064,ndf:.32},
{i:18,name:'Sesame Cake (Til Khal)',cat:'Concentrate',sub:'Oilseed Cake',dm:.92,cp:.38,tdn:.68,me:2.4616,ndf:.22},
{i:19,name:'Wheat Bran (Chokar)',cat:'Concentrate',sub:'Bran/Polish',dm:.88,cp:.15,tdn:.68,me:2.4616,ndf:.40},
{i:20,name:'Rice Polish',cat:'Concentrate',sub:'Bran/Polish',dm:.90,cp:.125,tdn:.72,me:2.6064,ndf:.25},
{i:21,name:'Rice Bran (Full-Fat)',cat:'Concentrate',sub:'Bran/Polish',dm:.90,cp:.13,tdn:.70,me:2.534,ndf:.28},
{i:22,name:'Deoiled Rice Bran (DORB)',cat:'Concentrate',sub:'Bran/Polish',dm:.90,cp:.135,tdn:.60,me:2.172,ndf:.35},
{i:23,name:'Molasses (Shakar)',cat:'Concentrate',sub:'Molasses/Byproduct',dm:.75,cp:.04,tdn:.72,me:2.6064,ndf:0},
{i:24,name:'Bakery Waste (Meal)',cat:'Concentrate',sub:'Molasses/Byproduct',dm:.90,cp:.11,tdn:.85,me:3.077,ndf:.05},
{i:25,name:'Mineral Mixture',cat:'Concentrate',sub:'Mineral/Additive',dm:.98,cp:0,tdn:0,me:0,ndf:0},
{i:26,name:'Salt',cat:'Concentrate',sub:'Mineral/Additive',dm:.99,cp:0,tdn:0,me:0,ndf:0},
{i:27,name:'Sodium Bicarbonate',cat:'Concentrate',sub:'Mineral/Additive',dm:.99,cp:0,tdn:0,me:0,ndf:0},
{i:28,name:'DCP (Di-Calcium Phosphate)',cat:'Concentrate',sub:'Mineral/Additive',dm:.99,cp:0,tdn:0,me:0,ndf:0},
{i:29,name:'Urea (NPN source)',cat:'Concentrate',sub:'Mineral/Additive',dm:.99,cp:2.62,tdn:0,me:0,ndf:0},
{i:30,name:'Yeast Culture',cat:'Concentrate',sub:'Mineral/Additive',dm:.95,cp:.30,tdn:0,me:0,ndf:0},
{i:31,name:'Maize Green Fodder',cat:'Roughage',sub:'Green Fodder',dm:.29,cp:.07,tdn:.60,me:1.986,ndf:.55},
{i:32,name:'Sorghum / Jowar Green Fodder',cat:'Roughage',sub:'Green Fodder',dm:.30,cp:.062,tdn:.55,me:1.8205,ndf:.60},
{i:33,name:'Bajra (Pearl Millet) Green Fodder',cat:'Roughage',sub:'Green Fodder',dm:.295,cp:.061,tdn:.58,me:1.9198,ndf:.58},
{i:34,name:'Berseem (Green, Seasonal Nov-Apr)',cat:'Roughage',sub:'Green Fodder',dm:.156,cp:.199,tdn:.62,me:2.0522,ndf:.40},
{i:35,name:'Lucerne / Alfalfa (Green)',cat:'Roughage',sub:'Green Fodder',dm:.243,cp:.228,tdn:.60,me:1.986,ndf:.38},
{i:36,name:'Oat Green Fodder',cat:'Roughage',sub:'Green Fodder',dm:.221,cp:.09,tdn:.58,me:1.9198,ndf:.52},
{i:37,name:'Guar (Cluster Bean) Green Fodder',cat:'Roughage',sub:'Green Fodder',dm:.209,cp:.1735,tdn:.55,me:1.8205,ndf:.45},
{i:38,name:'Cowpea Green Fodder',cat:'Roughage',sub:'Green Fodder',dm:.18,cp:.16,tdn:.58,me:1.9198,ndf:.42},
{i:39,name:'Sadabahar / Mott Grass',cat:'Roughage',sub:'Green Fodder',dm:.165,cp:.075,tdn:.52,me:1.7212,ndf:.60},
{i:40,name:'Napier / Elephant Grass',cat:'Roughage',sub:'Green Fodder',dm:.18,cp:.08,tdn:.55,me:1.8205,ndf:.62},
{i:41,name:'Sudan Grass (Green)',cat:'Roughage',sub:'Green Fodder',dm:.20,cp:.09,tdn:.56,me:1.8536,ndf:.58},
{i:42,name:'Maize Silage',cat:'Roughage',sub:'Silage',dm:.32,cp:.08,tdn:.68,me:2.2508,ndf:.45},
{i:43,name:'Sorghum Silage',cat:'Roughage',sub:'Silage',dm:.28,cp:.07,tdn:.62,me:2.0522,ndf:.50},
{i:44,name:'Berseem Hay',cat:'Roughage',sub:'Hay',dm:.856,cp:.1846,tdn:.58,me:1.9198,ndf:.45},
{i:45,name:'Lucerne Hay',cat:'Roughage',sub:'Hay',dm:.875,cp:.1886,tdn:.58,me:1.9198,ndf:.42},
{i:46,name:'Oat Hay',cat:'Roughage',sub:'Hay',dm:.88,cp:.07,tdn:.52,me:1.7212,ndf:.58},
{i:47,name:'Wheat Straw (Bhoosa)',cat:'Roughage',sub:'Dry Straw/Stover',dm:.90,cp:.04,tdn:.42,me:1.113,ndf:.78},
{i:48,name:'Rice Straw',cat:'Roughage',sub:'Dry Straw/Stover',dm:.90,cp:.035,tdn:.40,me:1.06,ndf:.75},
{i:49,name:'Maize Stover (Karbi)',cat:'Roughage',sub:'Dry Straw/Stover',dm:.825,cp:.0545,tdn:.48,me:1.272,ndf:.70},
{i:50,name:'Sorghum Stover',cat:'Roughage',sub:'Dry Straw/Stover',dm:.805,cp:.0374,tdn:.42,me:1.113,ndf:.72},
{i:51,name:'Millet Stover',cat:'Roughage',sub:'Dry Straw/Stover',dm:.85,cp:.04,tdn:.43,me:1.1395,ndf:.70},
{i:52,name:'Corn Cobs (Ground)',cat:'Roughage',sub:'Dry Straw/Stover',dm:.905,cp:.0166,tdn:.45,me:1.1925,ndf:.80},
{i:53,name:'Gram / Chickpea Straw (Chana Bhoosa)',cat:'Roughage',sub:'Dry Straw/Stover',dm:.92,cp:.061,tdn:.45,me:1.1925,ndf:.65},
{i:54,name:'Cotton Stalks (Ground)',cat:'Roughage',sub:'Dry Straw/Stover',dm:.90,cp:.04,tdn:.35,me:.9275,ndf:.80},
{i:55,name:'Sugarcane Tops',cat:'Roughage',sub:'Dry Straw/Stover',dm:.28,cp:.05,tdn:.50,me:1.325,ndf:.65},
{i:56,name:'Sugarcane Bagasse',cat:'Roughage',sub:'Dry Straw/Stover',dm:.90,cp:.02,tdn:.35,me:.9275,ndf:.85}
];
const ING = n => INGREDIENTS.find(x=>x.name===n);

/* ============ Seed data ============ */
const seed = {
ingredients:INGREDIENT_SEED,
settings:{dressing:58},
animals:[
{_id:'a1',id:'A-01',purpose:'Fattening',breed:'Mixed Breed',sex:'Male',source:'Purchased — Mandi',date:'2026-06-20',startWeight:180,acqCost:45000,programStart:'2026-06-20',duration:100,targetAdg:1150,bcs:2.5,status:'Active',sire:'',dam:'',rank:''},
{_id:'a2',id:'A-02',purpose:'Dairy',breed:'Sahiwal',sex:'Female',source:'Own Farm',date:'2024-03-14',startWeight:380,acqCost:0,programStart:'',duration:0,targetAdg:0,bcs:3,status:'Active',sire:'',dam:'',rank:''},
{_id:'a3',id:'A-03',purpose:'Breeding Stock',breed:'Jersey Cross',sex:'Female',source:'Own Farm',date:'2023-10-12',startWeight:360,acqCost:0,programStart:'',duration:0,targetAdg:0,bcs:3,status:'Active',sire:'',dam:'',rank:''},
{_id:'a4',id:'A-04',purpose:'Fattening',breed:'Cholistani',sex:'Male',source:'Purchased — Mandi',date:'2026-07-01',startWeight:195,acqCost:48000,programStart:'2026-07-01',duration:100,targetAdg:1150,bcs:2.5,status:'Active',sire:'',dam:'',rank:''},
{_id:'a5',id:'A-05',purpose:'Qurbani',breed:'Mixed Breed',sex:'Male',source:'Purchased — Mandi',date:'2026-07-10',startWeight:250,acqCost:68000,programStart:'2026-07-10',duration:90,targetAdg:1300,bcs:3,status:'Active',sire:'',dam:'',rank:''},
{_id:'a6',id:'A-06',purpose:'Fattening',breed:'Mixed Breed',sex:'Male',source:'Purchased — Mandi',date:'2026-04-25',startWeight:170,acqCost:42000,programStart:'2026-04-25',duration:100,targetAdg:1100,bcs:3,status:'Sold',sire:'',dam:'',rank:''}
],
weights:[
{_id:'w1',animal:'A-01',date:'2026-06-20',weight:180,type:'Weekly',bcs:2.5},
{_id:'w2',animal:'A-01',date:'2026-07-20',weight:214,type:'Weekly',bcs:2.5},
{_id:'w3',animal:'A-01',date:'2026-08-15',weight:246,type:'Weekly',bcs:3},
{_id:'w4',animal:'A-04',date:'2026-07-01',weight:195,type:'Weekly',bcs:2.5},
{_id:'w5',animal:'A-04',date:'2026-08-15',weight:245,type:'Weekly',bcs:3},
{_id:'w6',animal:'A-05',date:'2026-07-10',weight:250,type:'Weekly',bcs:3}
],
feeding:[
{_id:'f1',date:'2026-08-14',animal:'A-01',ingredient:'Maize Grain (Crushed)',qty:2.4},
{_id:'f2',date:'2026-08-14',animal:'A-01',ingredient:'Wheat Straw (Bhoosa)',qty:4.1},
{_id:'f3',date:'2026-08-15',animal:'A-04',ingredient:'Maize Grain (Crushed)',qty:2.6}
],
health:[{_id:'h1',animal:'A-01',date:'2026-06-20',type:'Deworming',medicine:'Ivermectin',dose:'10 ml',nextDue:'2026-09-20',by:'Dr. Riaz'}],
purchases:[
{_id:'p1',date:'2026-06-18',supplier:'Khan Feeds',ingredient:'Maize Grain (Crushed)',qty:500,rate:95},
{_id:'p2',date:'2026-06-18',supplier:'Khan Feeds',ingredient:'Wheat Bran (Chokar)',qty:300,rate:70},
{_id:'p3',date:'2026-07-05',supplier:'Al-Hamd Traders',ingredient:'Wheat Straw (Bhoosa)',qty:800,rate:25}
],
milk:[
{_id:'m1',date:'2026-08-14',animal:'A-02',morning:7.4,evening:6.6},
{_id:'m2',date:'2026-08-15',animal:'A-02',morning:7.2,evening:6.4}
],
breeding:[{_id:'b1',dam:'A-02',date:'2026-06-01',source:'AI — Jersey Bull',method:'AI',expected:'2027-03-11',check:'2026-08-01',result:'Pregnant'}],
calving:[],weaning:[],
customers:[
{_id:'c1',name:'Haji Saeed',phone:'0300-1234567',address:'Bhaipheru',type:'Butcher',status:'Active'},
{_id:'c2',name:'Naeem Traders',phone:'0321-9876543',address:'Lahore',type:'Wholesaler',status:'Active'}
],
milkCustomers:[
{_id:'mc1',name:'Colony Dairy Shop',phone:'0333-5551234',address:'Main Road',dailyOrder:20,rate:180,route:'Route 1',status:'Active',notes:''},
{_id:'mc2',name:'Sweet House',phone:'0345-2228899',address:'Bazaar',dailyOrder:12,rate:185,route:'Route 1',status:'Active',notes:''}
],
sales:[{_id:'s1',animal:'A-06',date:'2026-08-01',customer:'Haji Saeed',weight:298,price:253000,invoice:'INV-001',acq:42000,feedCost:38500}],
qurbani:[],
inventory:[
{_id:'i1',item:'Ivermectin 50ml',category:'Medicine',unit:'bottle',opening:10,purchased:0,used:2,reorder:3},
{_id:'i2',item:'Milking Bucket',category:'Equipment',unit:'pc',opening:4,purchased:0,used:0,reorder:1}
],
staff:[
{_id:'st1',name:'Muhammad Aslam',role:'Herd Keeper',phone:'0301-1112222',joined:'2024-01-15',salary:35000,status:'Active'},
{_id:'st2',name:'Bashir Ahmed',role:'Feeder',phone:'0302-3334444',joined:'2025-03-01',salary:28000,status:'Active'}
],
salary:[{_id:'sa1',date:'2026-08-01',staff:'Muhammad Aslam',month:'July 2026',amount:35000,method:'Cash'}]
};

/* ============ State ============ */
let db = JSON.parse(localStorage.getItem('sultanDairy')||'null') || seed;
Object.keys(seed).forEach(k=>{ if(db[k]===undefined) db[k]=seed[k]; });
// migrate legacy animal shape (weight -> startWeight)
db.animals.forEach(a=>{ if(a.startWeight===undefined && a.weight!==undefined){ a.startWeight=a.weight; } });
let INGREDIENTS = db.ingredients;
function save(){ localStorage.setItem('sultanDairy', JSON.stringify(db)); }
function resetDemo(){ if(confirm('Reset all data to the demo seed? This cannot be undone.')){ localStorage.removeItem('sultanDairy'); location.reload(); } }
function exportData(){ const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([JSON.stringify(db,null,2)],{type:'application/json'})); a.download='sultan-dairy-backup-'+today()+'.json'; a.click(); }

/* ============ Helpers ============ */
const $ = s => document.querySelector(s);
const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money = n => 'Rs ' + Math.round(+n||0).toLocaleString();
const num = (n,d=0) => (+n||0).toLocaleString(undefined,{maximumFractionDigits:d});
const today = () => new Date().toISOString().slice(0,10);
const addDays = (d,n)=>{ const x=new Date(d+'T00:00:00'); x.setDate(x.getDate()+n); return x.toISOString().slice(0,10); };
const uid = () => Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const animalById = id => db.animals.find(a=>a.id===id);
const latestWeight = id => db.weights.filter(w=>w.animal===id).sort((a,b)=>a.date.localeCompare(b.date)).at(-1);
const daysOnFeed = a => { if(!a.programStart) return 0; if(a.status==='Sold') return a.duration||0; const d=Math.floor((new Date()-new Date(a.programStart))/86400000); return Math.min(a.duration||Infinity, Math.max(0,d)); };
const phaseOf = a => { const d=daysOnFeed(a); const L=a.duration||100; return d<=L*0.33?1:d<=L*0.66?2:3; };
const adg = a => { const w=latestWeight(a.id)?.weight ?? a.startWeight; const d=daysOnFeed(a); return d>0?(w-a.startWeight)*1000/d:0; };
const ingRate = name => { const ps=db.purchases.filter(p=>p.ingredient===name).sort((a,b)=>b.date.localeCompare(a.date)); return ps.length?ps[0].rate:0; };
const toast = t => { const x=$('#toast'); x.textContent=t; x.classList.add('show'); setTimeout(()=>x.classList.remove('show'),2000); };

/* ============ Header / page chrome ============ */
function header(title, sub, actions=''){
  $('#pageTitle').textContent=title;
  $('#pageSub').textContent=sub;
  $('#pageActions').innerHTML=actions;
}

/* ============ Generic CRUD engine ============ */
let CTX=null, EDIT_IDX=null;
const isNum = c => c[2]==='num' || (c[2] && c[2].num);
function cellHtml(r,c){
  let v = typeof c[1]==='function' ? c[1](r) : (r[c[1]]===undefined?'':r[c[1]]);
  if (typeof c[2]==='function') v = c[2](v,r);
  else if (c[2] && c[2].fmt) v = c[2].fmt(v,r);
  if (v===undefined || v===null || v==='') v='—';
  return `<td class="${isNum(c)?'num':''}">${v}</td>`;
}
function rowHtml(r,i){
  return `<tr>${CTX.columns.map(c=>cellHtml(r,c)).join('')}<td class="num" style="width:88px"><div class="row-actions">`
    +`<button class="icon-btn" title="Edit" onclick="ctxEdit(${i})">Edit</button>`
    +`<button class="icon-btn danger" title="Delete" onclick="ctxDel(${i})">Delete</button></div></td></tr>`;
}
function crudTable(){
  const recs=db[CTX.key];
  if(!recs.length) return `<div class="card"><div class="empty">No records yet.<br><button class="btn primary" style="margin-top:12px" onclick="ctxAdd()">+ ${CTX.addLabel||'Add'}</button></div></div>`;
  const rows=recs.map((r,i)=>rowHtml(r,i)).join('');
  return `<div class="card"><div class="table-tools"><div class="count">${recs.length} record${recs.length===1?'':'s'}</div>`
    +`<div class="search"><input placeholder="Search…" oninput="filterRows(this)"></div></div>`
    +`<div class="table-wrap"><table class="table"><thead><tr>${CTX.columns.map(c=>`<th class="${isNum(c)?'num':''}">${c[0]}</th>`).join('')}<th class="num">Actions</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}
function crudPage(cfg){
  CTX=cfg;
  header(cfg.title,cfg.sub,`<button class="btn primary" onclick="ctxAdd()">+ ${cfg.addLabel||'Add'}</button>`);
  return crudTable();
}
function filterRows(input){
  const q=input.value.toLowerCase();
  [...input.closest('.card').querySelectorAll('tbody tr')].forEach(tr=>{
    tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}

/* ============ Modal form ============ */
function fieldHtml(f,val){
  const v = val!==undefined && val!==null ? val : (f.value??'');
  const req = f.required?' *':'';
  let input;
  if(f.type==='select'){
    const opts = typeof f.options==='function' ? f.options() : (f.options||[]);
    input=`<select name="${f.name}">${opts.map(o=>`<option${String(o)===String(v)?' selected':''}>${esc(o)}</option>`).join('')}</select>`;
  } else if(f.type==='textarea'){
    input=`<textarea name="${f.name}" rows="3">${esc(v)}</textarea>`;
  } else {
    input=`<input type="${f.type||'text'}" name="${f.name}" step="${f.step||'any'}" value="${esc(v)}"${f.required?' required':''}${f.placeholder?` placeholder="${esc(f.placeholder)}"`:''}>`;
  }
  return `<div class="field ${f.full?'full':''}"><label>${f.label}${req}</label>${input}${f.hint?`<span class="hint">${f.hint}</span>`:''}</div>`;
}
function openModal(){
  const rec = EDIT_IDX===null ? null : db[CTX.key][EDIT_IDX];
  const title = (rec?'Edit':'Add')+' '+(CTX.singular||'record');
  const fields = CTX.fields.map(f=>fieldHtml(f, rec?rec[f.name]:undefined)).join('');
  $('#modalRoot').innerHTML = `<div class="modal-bg" onclick="if(event.target===this)closeModal()">`
    +`<div class="modal"><div class="modal-head"><h2>${title}</h2><button class="icon-btn" onclick="closeModal()">Close</button></div>`
    +`<form onsubmit="return submitModal(event)"><div class="modal-body"><div class="form">${fields}</div></div>`
    +`<div class="modal-foot"><button type="button" class="btn" onclick="closeModal()">Cancel</button><button type="submit" class="btn primary">Save</button></div></form></div></div>`;
}
function closeModal(){ $('#modalRoot').innerHTML=''; }
function ctxAdd(){ EDIT_IDX=null; openModal(); }
function ctxEdit(i){ EDIT_IDX=i; openModal(); }
function ctxDel(i){
  const rec=db[CTX.key][i];
  const name = CTX.nameOf ? CTX.nameOf(rec) : (rec.name||rec.id||rec.animal||rec.item||'#'+(i+1));
  if(!confirm('Delete "'+name+'"? This cannot be undone.')) return;
  db[CTX.key].splice(i,1); save(); render(); toast('Deleted');
}
function submitModal(e){
  e.preventDefault();
  const fd=new FormData(e.target); const obj={};
  CTX.fields.forEach(f=>{
    let v=fd.get(f.name);
    if(f.type==='number') v=(v===''||v===null)?0:+v;
    if(v===null) v='';
    obj[f.name]=v;
  });
  const out = CTX.beforeSave ? CTX.beforeSave(obj) : obj;
  if(EDIT_IDX===null) db[CTX.key].push(out);
  else Object.assign(db[CTX.key][EDIT_IDX], out);
  save(); closeModal(); render(); toast('Saved');
}

/* ============ Field option helpers ============ */
const optAnimals = () => db.animals.map(a=>a.id);
const optFemales = () => ['', ...db.animals.filter(a=>a.sex==='Female').map(a=>a.id)];
const optDairy = () => ['', ...db.animals.filter(a=>a.purpose==='Dairy').map(a=>a.id)];
const optIngredients = () => INGREDIENTS.map(i=>i.name);
const optCustomers = () => ['', ...db.customers.map(c=>c.name)];
const optStaff = () => ['', ...db.staff.map(s=>s.name)];
const optSaleAnimals = () => db.animals.filter(a=>a.status==='Active').map(a=>a.id);
const optQurbaniAnimals = () => db.animals.filter(a=>a.status==='Active' && (a.purpose==='Qurbani'||a.purpose==='Fattening')).map(a=>a.id);
const badge = (v,ok='ok') => `<span class="badge ${ok}">${esc(v)}</span>`;
const statusBadge = v => badge(v, v==='Active'?'ok':(v==='Sold'?'neutral':'danger'));
const plBadge = v => { const n=+v||0; return n>=0?`<span class="badge ok">${money(n)}</span>`:`<span class="badge danger">${money(n)}</span>`; };

/* ============ Module definitions ============ */
const MODULES = {
'animals':{
  title:'Animal Register', sub:'One master herd record — drives Fattening, Qurbani, Dairy & Breeding', singular:'animal', key:'animals', addLabel:'Add Animal',
  nameOf:r=>r.id,
  columns:[
    ['ID','id'],['Purpose',r=>badge(r.purpose, r.purpose==='Fattening'?'warn':'ok')],['Breed','breed'],['Sex','sex'],
    ['Start kg',r=>num(r.startWeight),'num'],['Latest kg',r=>num(latestWeight(r.id)?.weight??r.startWeight),'num'],
    ['ADG g/d',r=>Math.round(adg(r)),'num'],['Days',r=>daysOnFeed(r),'num'],['Status',r=>statusBadge(r.status)]
  ],
  fields:[
    {name:'id',label:'Animal ID',required:true},{name:'purpose',label:'Purpose',type:'select',options:['Fattening','Qurbani','Dairy','Breeding Stock'],value:'Fattening'},
    {name:'breed',label:'Breed',value:'Mixed Breed'},{name:'sex',label:'Sex',type:'select',options:['Male','Female']},
    {name:'source',label:'Source',value:'Purchased — Mandi'},{name:'date',label:'Entry Date',type:'date',value:today()},
    {name:'startWeight',label:'Start Weight (kg)',type:'number'},{name:'acqCost',label:'Acquisition Cost (Rs)',type:'number'},
    {name:'programStart',label:'Program Start',type:'date'},{name:'duration',label:'Program Duration (days)',type:'number',value:100},
    {name:'targetAdg',label:'Target ADG (g/day)',type:'number',value:1150},{name:'bcs',label:'BCS (1–5)',type:'number',value:2.5,step:0.5},
    {name:'status',label:'Status',type:'select',options:['Active','Sold','Deceased'],value:'Active'},
    {name:'sire',label:'Sire ID'},{name:'dam',label:'Dam ID'},{name:'rank',label:'Rank / Notes'}
  ],
  beforeSave:o=>({...o})
},
'weights':{
  title:'Weight & Growth', sub:'Weighing history plus derived ADG and performance', singular:'weight entry', key:'weights', addLabel:'Log Weight',
  nameOf:r=>r.animal+' @ '+r.date,
  columns:[['Date','date'],['Animal','animal'],['Weight kg',r=>num(r.weight),'num'],['Type','type'],['BCS',r=>num(r.bcs,1),'num']],
  fields:[
    {name:'animal',label:'Animal',type:'select',options:optAnimals},{name:'date',label:'Date',type:'date',value:today()},
    {name:'weight',label:'Weight (kg)',type:'number',required:true},{name:'type',label:'Weighing Type',type:'select',options:['Weekly','Daily','Fortnightly','Monthly'],value:'Weekly'},
    {name:'bcs',label:'BCS (1–5)',type:'number',value:2.5,step:0.5}
  ],
  beforeSave:o=>{ if(animalById(o.animal) && +o.weight>0){ /* latest derived on read */ } return o; }
},
'feeding':{
  title:'Daily Feeding', sub:'Feed usage per animal — cost derived from latest purchase rate', singular:'feeding entry', key:'feeding', addLabel:'Log Feeding',
  nameOf:r=>r.animal+' '+r.ingredient,
  columns:[['Date','date'],['Animal','animal'],['Ingredient','ingredient'],['Qty kg',r=>num(r.qty,1),'num'],['Cost',r=>money(r.qty*ingRate(r.ingredient)),'num']],
  fields:[
    {name:'date',label:'Date',type:'date',value:today()},{name:'animal',label:'Animal',type:'select',options:optAnimals},
    {name:'ingredient',label:'Ingredient',type:'select',options:optIngredients},{name:'qty',label:'Quantity (kg)',type:'number',required:true}
  ]
},
'dairy':{
  title:'Dairy & Milk', sub:'Milk production log (morning / evening)', singular:'milk entry', key:'milk', addLabel:'Log Milk',
  nameOf:r=>r.animal+' @ '+r.date,
  columns:[['Date','date'],['Animal','animal'],['Morning L',r=>num(r.morning,1),'num'],['Evening L',r=>num(r.evening,1),'num'],['Total L',r=>num((+r.morning||0)+(+r.evening||0),1),'num']],
  fields:[
    {name:'date',label:'Date',type:'date',value:today()},{name:'animal',label:'Animal',type:'select',options:optDairy},
    {name:'morning',label:'Morning (L)',type:'number'},{name:'evening',label:'Evening (L)',type:'number'}
  ]
},
'milkCustomers':{
  title:'Milk Customers', sub:'Daily orders, rates and routes', singular:'milk customer', key:'milkCustomers', addLabel:'Add Milk Customer',
  nameOf:r=>r.name,
  columns:[['Name','name'],['Phone','phone'],['Order L/day',r=>num(r.dailyOrder,1),'num'],['Rate Rs/L',r=>num(r.rate),'num'],['Rs/day',r=>money((+r.dailyOrder||0)*(+r.rate||0)),'num'],['Route','route'],['Status',r=>statusBadge(r.status)]],
  fields:[
    {name:'name',label:'Customer Name',required:true},{name:'phone',label:'Phone'},{name:'address',label:'Address'},
    {name:'dailyOrder',label:'Daily Order (L)',type:'number'},{name:'rate',label:'Rate (Rs/L)',type:'number'},
    {name:'route',label:'Route'},{name:'status',label:'Status',type:'select',options:['Active','Inactive'],value:'Active'},
    {name:'notes',label:'Notes',type:'textarea',full:true}
  ]
},
'breeding':{
  title:'Breeding', sub:'Breeding events — expected calving = breeding date + 283 days', singular:'breeding event', key:'breeding', addLabel:'Log Breeding',
  nameOf:r=>r.dam+' @ '+r.date,
  columns:[['Dam','dam'],['Date','date'],['Source','source'],['Method','method'],['Expected Calving','expected'],['Check','check'],['Result',r=>badge(r.result, r.result==='Pregnant'?'ok':(r.result==='Not Pregnant'?'danger':'warn'))]],
  fields:[
    {name:'dam',label:'Dam ID',type:'select',options:optFemales,required:true},{name:'date',label:'Breeding Date',type:'date',value:today()},
    {name:'source',label:'Bull / AI Source'},{name:'method',label:'Method',type:'select',options:['Natural','AI'],value:'AI'},
    {name:'check',label:'Pregnancy Check Date',type:'date'},{name:'result',label:'Result',type:'select',options:['Pending','Pregnant','Not Pregnant'],value:'Pending'}
  ],
  beforeSave:o=>{ o.expected=addDays(o.date,283); return o; }
},
'calving':{
  title:'Calving', sub:'Birth registration and colostrum record', singular:'calving', key:'calving', addLabel:'Log Calving',
  nameOf:r=>r.dam+' → '+r.calf,
  columns:[['Dam','dam'],['Date','date'],['Calf','calf'],['Sex','sex'],['Birth kg',r=>num(r.weight),'num'],['Ease','ease'],['Colostrum','colostrum']],
  fields:[
    {name:'dam',label:'Dam ID',type:'select',options:optFemales},{name:'date',label:'Calving Date',type:'date',value:today()},
    {name:'calf',label:'New Calf ID'},{name:'sex',label:'Calf Sex',type:'select',options:['Male','Female']},
    {name:'weight',label:'Birth Weight (kg)',type:'number'},{name:'ease',label:'Calving Ease',type:'select',options:['Easy','Assisted','Difficult'],value:'Easy'},
    {name:'colostrum',label:'Colostrum Given',type:'select',options:['Yes','No'],value:'Yes'}
  ]
},
'weaning':{
  title:'Weaning', sub:'Calf weaning record', singular:'weaning', key:'weaning', addLabel:'Log Weaning',
  nameOf:r=>r.calf,
  columns:[['Calf','calf'],['Date','date'],['Weight kg',r=>num(r.weight),'num'],['Age days',r=>num(r.age),'num']],
  fields:[
    {name:'calf',label:'Calf ID'},{name:'date',label:'Weaning Date',type:'date',value:today()},
    {name:'weight',label:'Weaning Weight (kg)',type:'number'},{name:'age',label:'Weaning Age (days)',type:'number'}
  ]
},
'health':{
  title:'Health', sub:'Vaccination, deworming and treatment log', singular:'health record', key:'health', addLabel:'Log Health',
  nameOf:r=>r.animal+' '+r.type,
  columns:[['Animal','animal'],['Date','date'],['Type','type'],['Medicine','medicine'],['Dose','dose'],['Next Due','nextDue'],['By','by']],
  fields:[
    {name:'animal',label:'Animal',type:'select',options:optAnimals},{name:'date',label:'Date',type:'date',value:today()},
    {name:'type',label:'Type',type:'select',options:['Vaccination','Deworming','Treatment','Check-up'],value:'Vaccination'},
    {name:'medicine',label:'Medicine'},{name:'dose',label:'Dose'},{name:'nextDue',label:'Next Due',type:'date'},{name:'by',label:'Administered By'}
  ]
},
'purchases':{
  title:'Feed Purchases', sub:'Supplier purchases feed feed stock and cost', singular:'purchase', key:'purchases', addLabel:'Add Purchase',
  nameOf:r=>r.ingredient+' — '+r.supplier,
  columns:[['Date','date'],['Supplier','supplier'],['Ingredient','ingredient'],['Qty kg',r=>num(r.qty),'num'],['Rate Rs/kg',r=>money(r.rate),'num'],['Total',r=>money(r.qty*r.rate),'num']],
  fields:[
    {name:'date',label:'Date',type:'date',value:today()},{name:'supplier',label:'Supplier'},
    {name:'ingredient',label:'Ingredient',type:'select',options:optIngredients},{name:'qty',label:'Quantity (kg)',type:'number',required:true},
    {name:'rate',label:'Rate (Rs/kg)',type:'number',required:true}
  ]
},
'customers':{
  title:'Fattening Customers', sub:'Buyers, butchers and wholesalers', singular:'customer', key:'customers', addLabel:'Add Customer',
  nameOf:r=>r.name,
  columns:[['Name','name'],['Phone','phone'],['Address','address'],['Business','type'],['Status',r=>statusBadge(r.status)]],
  fields:[
    {name:'name',label:'Customer Name',required:true},{name:'phone',label:'Phone'},{name:'address',label:'Address'},
    {name:'type',label:'Business Type',type:'select',options:['Butcher','Wholesaler','Trader','Other'],value:'Butcher'},
    {name:'status',label:'Status',type:'select',options:['Active','Inactive'],value:'Active'}
  ]
},
'sales':{
  title:'Fattening Sales', sub:'Sale records with acquisition / feed cost and profit', singular:'sale', key:'sales', addLabel:'Record Sale',
  nameOf:r=>r.animal+' @ '+r.date,
  columns:[['Animal','animal'],['Date','date'],['Customer','customer'],['Weight kg',r=>num(r.weight),'num'],['Price',r=>money(r.price),'num'],['Invoice','invoice'],['Acq',r=>money(r.acq),'num'],['Feed',r=>money(r.feedCost),'num'],['P/L',r=>plBadge((+r.price||0)-(+r.acq||0)-(+r.feedCost||0))]],
  fields:[
    {name:'animal',label:'Animal',type:'select',options:optSaleAnimals},{name:'date',label:'Sale Date',type:'date',value:today()},
    {name:'customer',label:'Customer',type:'select',options:optCustomers},{name:'weight',label:'Sale Weight (kg)',type:'number'},
    {name:'price',label:'Sale Price (Rs)',type:'number'},{name:'invoice',label:'Invoice No'},
    {name:'acq',label:'Acquisition Cost (Rs)',type:'number'},{name:'feedCost',label:'Total Feed Cost (Rs)',type:'number'}
  ],
  beforeSave:o=>{ if(animalById(o.animal)) animalById(o.animal).status='Sold'; return o; }
},
'qurbani':{
  title:'Qurbani', sub:'Qurbani animal sale and margin', singular:'qurbani sale', key:'qurbani', addLabel:'Record Qurbani Sale',
  nameOf:r=>r.animal+' @ '+r.date,
  columns:[['Animal','animal'],['Date','date'],['Customer','customer'],['Weight kg',r=>num(r.weight),'num'],['Price',r=>money(r.price),'num'],['Invoice','invoice'],['Cost',r=>money(r.cost),'num'],['P/L',r=>plBadge((+r.price||0)-(+r.cost||0))]],
  fields:[
    {name:'animal',label:'Animal',type:'select',options:optQurbaniAnimals},{name:'date',label:'Sale Date',type:'date',value:today()},
    {name:'customer',label:'Customer',type:'select',options:optCustomers},{name:'weight',label:'Sale Weight (kg)',type:'number'},
    {name:'price',label:'Sale Price (Rs)',type:'number'},{name:'invoice',label:'Invoice'},{name:'cost',label:'Total Cost (Rs)',type:'number'}
  ],
  beforeSave:o=>{ if(animalById(o.animal)) animalById(o.animal).status='Sold'; return o; }
},
'inventory':{
  title:'General Inventory', sub:'Medicines, equipment and farm tools', singular:'inventory item', key:'inventory', addLabel:'Add Item',
  nameOf:r=>r.item,
  columns:[['Item','item'],['Category','category'],['Unit','unit'],['Opening',r=>num(r.opening),'num'],['Purchased',r=>num(r.purchased),'num'],['Used',r=>num(r.used),'num'],['Closing',r=>num((+r.opening||0)+(+r.purchased||0)-(+r.used||0)),'num'],['Reorder',r=>num(r.reorder),'num'],['Status',r=>{ const c=(+r.opening||0)+(+r.purchased||0)-(+r.used||0); return c<=(+r.reorder||0)?badge('REORDER','danger'):badge('OK');}]],
  fields:[
    {name:'item',label:'Item',required:true},{name:'category',label:'Category',type:'select',options:['Medicine','Equipment','Tool','Other'],value:'Medicine'},
    {name:'unit',label:'Unit',value:'pc'},{name:'opening',label:'Opening Qty',type:'number'},
    {name:'purchased',label:'Purchased Qty',type:'number'},{name:'used',label:'Used Qty',type:'number'},{name:'reorder',label:'Reorder Level',type:'number'}
  ]
},
'staff':{
  title:'Staff', sub:'Employees and roles', singular:'staff member', key:'staff', addLabel:'Add Staff',
  nameOf:r=>r.name,
  columns:[['Name','name'],['Role','role'],['Phone','phone'],['Joined','joined'],['Salary',r=>money(r.salary),'num'],['Status',r=>statusBadge(r.status)]],
  fields:[
    {name:'name',label:'Name',required:true},{name:'role',label:'Role'},{name:'phone',label:'Phone'},
    {name:'joined',label:'Joining Date',type:'date',value:today()},{name:'salary',label:'Monthly Salary (Rs)',type:'number'},
    {name:'status',label:'Status',type:'select',options:['Active','Inactive'],value:'Active'}
  ]
},
'salary':{
  title:'Salary Payments', sub:'Monthly payroll log', singular:'salary payment', key:'salary', addLabel:'Record Salary',
  nameOf:r=>r.staff+' '+r.month,
  columns:[['Date','date'],['Staff','staff'],['Month','month'],['Amount',r=>money(r.amount),'num'],['Method','method']],
  fields:[
    {name:'date',label:'Date',type:'date',value:today()},{name:'staff',label:'Staff',type:'select',options:optStaff},
    {name:'month',label:'Salary Month',value:'August 2026'},{name:'amount',label:'Amount (Rs)',type:'number',required:true},
    {name:'method',label:'Method',type:'select',options:['Cash','Bank Transfer','Other'],value:'Cash'}
  ]
},
'ingredients':{
  title:'Ingredient Database', sub:'Nutrition master (DM basis) — all 56 workbook ingredients', singular:'ingredient', key:'ingredients', addLabel:'Add Ingredient',
  nameOf:r=>r.name,
  columns:[['ID',r=>r.i,'num'],['Ingredient','name'],['Category','cat'],['Sub','sub'],['DM %',r=>num(r.dm*100,1),'num'],['CP %',r=>num(r.cp*100,1),'num'],['TDN %',r=>num(r.tdn*100,1),'num'],['ME Mcal/kg',r=>num(r.me,2),'num'],['NDF %',r=>num(r.ndf*100,1),'num']],
  fields:[
    {name:'name',label:'Ingredient',required:true},{name:'cat',label:'Category',type:'select',options:['Concentrate','Roughage'],value:'Concentrate'},
    {name:'sub',label:'Sub-Category'},{name:'dm',label:'DM (fraction, e.g. 0.88)',type:'number'},
    {name:'cp',label:'CP (fraction)',type:'number'},{name:'tdn',label:'TDN (fraction)',type:'number'},
    {name:'me',label:'ME (Mcal/kg)',type:'number'},{name:'ndf',label:'NDF (fraction)',type:'number'}
  ],
  beforeSave:o=>{ if(EDIT_IDX===null) o.i = INGREDIENTS.reduce((m,x)=>Math.max(m,x.i),0)+1; return o; }
}
};

/* ============ Read-only table helper ============ */
function rtable(headers, rows, numIdx=[]){
  const body = rows.length ? rows.map(r=>`<tr>${r.map((v,i)=>`<td class="${numIdx.includes(i)?'num':''}">${v}</td>`).join('')}</tr>`).join('')
    : `<tr><td colspan="${headers.length}"><div class="empty">No data yet.</div></td></tr>`;
  return `<div class="card"><div class="table-wrap"><table class="table"><thead><tr>${headers.map((h,i)=>`<th class="${numIdx.includes(i)?'num':''}">${h}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div></div>`;
}
const kpi = (bg,label,value,hint,cls)=>`<div class="card kpi"><div class="k-dot" style="background:${bg}"></div><div class="label">${label}</div><div class="value">${value}</div><div class="hint ${cls||''}">${hint}</div></div>`;

/* ============ Dashboard ============ */
function dashboard(){
  header('Farm Dashboard','Your farm at a glance — what to do today');
  const active=db.animals.filter(a=>a.status==='Active').length;
  const fat=db.animals.filter(a=>a.purpose==='Fattening'&&a.status==='Active').length;
  const milkT=db.milk.filter(m=>m.date===today()).reduce((s,m)=>s+(+m.morning||0)+(+m.evening||0),0);
  const net=db.sales.reduce((s,x)=>s+(+x.price||0)-(+x.acq||0)-(+x.feedCost||0),0)+db.qurbani.reduce((s,x)=>s+(+x.price||0)-(+x.cost||0),0);
  const routine=[
    ['feeding','Log feeding',db.feeding.some(f=>f.date===today())],
    ['growth','Log weights',db.weights.some(w=>w.date===today())],
    ['dairy','Log milk',db.milk.some(m=>m.date===today())],
    ['health','Log health',db.health.some(h=>h.date===today())],
    ['sales','Record sales',db.sales.some(s=>s.date===today())||db.qurbani.some(s=>s.date===today())]
  ];
  const routineHtml=routine.map((r,i)=>`<div class="step"><span class="n">${i+1}</span><span class="body"><b>${r[1]}</b></span>${r[2]?'<span class="badge ok">Done today</span>':`<button class="btn sm" onclick="go('${r[0]}')">Open</button>`}</div>`).join('');
  const perf=db.animals.filter(a=>a.status==='Active'&&(a.purpose==='Fattening'||a.purpose==='Qurbani'));
  const perfHtml=perf.map(a=>{
    const w=latestWeight(a.id); const g=adg(a); const d=daysOnFeed(a); const pct=Math.min(100,Math.round(d/(a.duration||100)*100));
    const below=a.targetAdg>0&&g>0&&g<a.targetAdg*0.9;
    return `<div class="row"><div style="min-width:64px"><b>${a.id}</b></div><div style="flex:1"><div class="bar ${below?'orange':'green'}"><i style="width:${pct}%"></i></div><div class="faint" style="font-size:11px">Day ${d}/${a.duration} · ${num(w?.weight??a.startWeight)} kg · ${Math.round(g)} g/d${below?' · below target':''}</div></div></div>`;
  }).join('') || '<div class="empty">No active fattening animals yet.</div>';
  const al=alerts();
  return `<div class="grid kpis">`
    +kpi('#eaf3fb','Active Animals',active,'in the herd')
    +kpi('#e8f6ef','Milk Today',milkT.toFixed(1)+' L','morning + evening')
    +kpi('#fff4e4','On Feed',fat,'fattening now')
    +kpi('#fdeaea','Net Profit',money(net),'sales − costs')
    +`</div>`
    +`<div class="section grid two">`
    +`<div class="card"><h2>Today's routine</h2><p class="muted" style="font-size:12.5px;margin-top:0">Do these in order — each log updates the whole farm automatically.</p><div class="steps">${routineHtml}</div></div>`
    +`<div class="card"><h2>Needs attention</h2>${al.length?al.map(a=>`<div class="row"><span>${a}</span></div>`).join(''):'<div class="empty">All clear — nothing needs attention.</div>'}</div>`
    +`</div>`
    +`<div class="section card"><h2>Fattening progress</h2>${perfHtml}</div>`
    +`<div class="section"><div class="notice">New here? Open <b>Guide &amp; Help</b> for a 5-minute quick start and how the numbers are calculated. <button class="btn sm" onclick="go('guide')" style="margin-left:8px">Open guide</button></div></div>`;
}
function alerts(){
  const out=[];
  db.animals.filter(a=>a.status==='Active'&&a.targetAdg>0).forEach(a=>{ const g=adg(a); if(g>0&&g<a.targetAdg*0.9) out.push(`${a.id} is gaining ${Math.round(g)} g/d — below target ${a.targetAdg}`); });
  db.inventory.forEach(i=>{ const c=(+i.opening||0)+(+i.purchased||0)-(+i.used||0); if(c<=(+i.reorder||0)) out.push(`Reorder <b>${esc(i.item)}</b> — closing ${c} ≤ ${i.reorder}`); });
  db.breeding.filter(b=>b.result==='Pending'&&b.check&&b.check<today()).forEach(b=>out.push(`Pregnancy check overdue for <b>${esc(b.dam)}</b>`));
  db.health.filter(h=>h.nextDue&&h.nextDue>=today()&&h.nextDue<=addDays(today(),7)).forEach(h=>out.push(`<b>${esc(h.animal)}</b>: ${esc(h.type)} due ${h.nextDue}`));
  return out;
}

/* ============ Animal Profile ============ */
function profile(){
  header('Animal Profile','Consolidated record for one animal');
  return `<div class="card"><div class="field" style="max-width:280px"><label>Animal ID</label>`
    +`<select onchange="showProfile(this.value)"><option value="">Choose…</option>${db.animals.map(a=>`<option>${a.id}</option>`).join('')}</select></div>`
    +`<div id="profileOut" class="section empty">Select an animal to view its consolidated record.</div></div>`;
}
function showProfile(id){
  const a=animalById(id); const out=$('#profileOut');
  if(!a){ out.innerHTML='<div class="empty">Select an animal.</div>'; return; }
  const w=latestWeight(id); const g=adg(a); const ws=db.weights.filter(x=>x.animal===id).sort((x,y)=>y.date.localeCompare(x.date)).slice(0,6);
  const feed=db.feeding.filter(x=>x.animal===id); const health=db.health.filter(x=>x.animal===id); const milk=db.milk.filter(x=>x.animal===id);
  const gain=(w?.weight??a.startWeight)-a.startWeight;
  out.innerHTML=`<div class="grid kpis">`
    +kpi('#eaf3fb','Purpose',a.purpose,'')
    +kpi('#eef1f4','Breed',a.breed||'—','')
    +kpi('#e8f6ef','Latest Weight',(w?.weight??a.startWeight)+' kg',(w?.date||''))
    +kpi('#fff4e4','Gain',num(gain,1)+' kg',Math.round(g)+' g/day ADG')
    +`</div>`
    +`<div class="section grid two">`
    +`<div class="card"><h2>Weight History</h2>${ws.length?rtable(['Date','Weight kg','Type','BCS'],ws.map(x=>[x.date,num(x.weight),x.type,num(x.bcs,1)]),[1,3]).replace('<div class="card">','').replace('</div></div>',''):'<div class="empty">No weights.</div>'}</div>`
    +`<div class="card"><h2>Recent Feeding</h2>${feed.length?`<div class="table-wrap"><table class="table"><tbody>${feed.map(f=>`<tr><td>${f.date}</td><td>${esc(f.ingredient)}</td><td class="num">${num(f.qty,1)} kg</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No feeding recorded.</div>'}`
    +`<div class="card"><h2>Health</h2>${health.length?`<div class="table-wrap"><table class="table"><tbody>${health.map(h=>`<tr><td>${h.date}</td><td>${esc(h.type)}</td><td>${esc(h.medicine||'')}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No health records.</div>'}`
    +`<div class="card"><h2>Milk</h2>${milk.length?`<div class="table-wrap"><table class="table"><tbody>${milk.map(m=>`<tr><td>${m.date}</td><td class="num">${num((+m.morning||0)+(+m.evening||0),1)} L</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No milk records.</div>'}`
    +`</div>`;
}

/* ============ Growth page (summary + weight log) ============ */
function growthPage(){
  const cfg=MODULES.weights; CTX=cfg;
  header(cfg.title,cfg.sub,`<button class="btn primary" onclick="ctxAdd()">+ ${cfg.addLabel}</button>`);
  const rows=db.animals.map(a=>{
    const w=latestWeight(a.id); const g=adg(a);
    return [a.id,a.purpose,a.sex,num(a.startWeight),num(w?.weight??a.startWeight),w?.date||'—',num(w?.bcs,1),num(gainOf(a),1),Math.round(g),a.targetAdg?num(a.targetAdg):'—'];
  });
  return rtable(['Animal','Purpose','Sex','Start kg','Latest kg','Date','BCS','Gain kg','ADG g/d','Target'],rows,[3,4,6,7,8,9])
    +`<div class="section"><h2 style="font-size:13px;font-weight:700;margin:0 0 10px;color:var(--muted)">Weight Log (append, but editable)</h2>${crudTable()}</div>`;
}
const gainOf = a => (latestWeight(a.id)?.weight??a.startWeight) - a.startWeight;

/* ============ Ration Formulator ============ */
function ration(){
  header('Ration Formulator','Phase-based concentrate / roughage planning');
  return `<div class="grid two">`
    +`<div class="card"><h2>Inputs</h2><form class="form" onsubmit="return calcRation(event)">`
    +`<div class="field"><label>Phase</label><select name="phase" onchange="document.querySelector('[name=conc]').value=this.value"><option value="45">Phase 1 — Adaptation (45% conc)</option><option value="60">Phase 2 — Growth (60% conc)</option><option value="75">Phase 3 — Finishing (75% conc)</option></select></div>`
    +`<div class="field"><label>Animal Weight (kg)</label><input type="number" name="weight" value="300"></div>`
    +`<div class="field"><label>DM Intake (% BW)</label><input type="number" name="dmi" value="3"></div>`
    +`<div class="field"><label>Concentrate (% DM)</label><input type="number" name="conc" value="45"></div>`
    +`<div class="field"><label>Concentrate Ingredient</label><select name="ci"><option value="">—</option>${INGREDIENTS.filter(i=>i.cat==='Concentrate').map(i=>`<option>${esc(i.name)}</option>`).join('')}</select></div>`
    +`<div class="field"><label>Roughage Ingredient</label><select name="ri"><option value="">—</option>${INGREDIENTS.filter(i=>i.cat==='Roughage').map(i=>`<option>${esc(i.name)}</option>`).join('')}</select></div>`
    +`<div class="form-actions"><button class="btn primary">Calculate Ration</button></div></form></div>`
    +`<div class="card"><h2>Result</h2><div id="rationOut" class="muted">Enter values and press Calculate.</div></div>`
    +`</div>`;
}
function calcRation(e){
  e.preventDefault();
  const fd=new FormData(e.target);
  const w=+fd.get('weight')||0, dmiP=+fd.get('dmi')||3, concP=+fd.get('conc')||0;
  const dmi=w*dmiP/100, conc=dmi*concP/100, rough=dmi-conc;
  const ci=fd.get('ci')?ING(fd.get('ci')):null, ri=fd.get('ri')?ING(fd.get('ri')):null;
  let html=`<div class="grid three">`
    +kpi('#eaf3fb','DMI',num(dmi,2)+' kg DM','per day')
    +kpi('#fff4e4','Concentrate',num(conc,2)+' kg DM',concP+'%')
    +kpi('#e8f6ef','Roughage',num(rough,2)+' kg DM',(100-concP)+'%')
    +`</div>`;
  const rows=[];
  if(ci) rows.push([ci.name,'Concentrate',num(conc,2),num(conc/ci.dm,2),num(conc*ci.cp,2),num(conc*ci.tdn,2),num(conc*ci.me,2)]);
  if(ri) rows.push([ri.name,'Roughage',num(rough,2),num(rough/ri.dm,2),num(rough*ri.cp,2),num(rough*ri.tdn,2),num(rough*ri.me,2)]);
  if(rows.length) html+=`<div class="section"><h2 style="font-size:13px;font-weight:700;margin:0 0 10px;color:var(--muted)">Selected Ingredients</h2>`
    +`<div class="table-wrap"><table class="table"><thead><tr><th>Ingredient</th><th>Type</th><th class="num">kg DM</th><th class="num">kg As-Fed</th><th class="num">CP kg</th><th class="num">TDN kg</th><th class="num">ME Mcal</th></tr></thead><tbody>${rows.map(r=>`<tr>${r.map((v,i)=>`<td class="${i>1?'num':''}">${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  if(ci&&ri){ const cp=(conc*ci.cp+rough*ri.cp)/dmi*100, tdn=(conc*ci.tdn+rough*ri.tdn)/dmi*100, me=(conc*ci.me+rough*ri.me)/dmi; html+=`<div class="notice" style="margin-top:12px">Blend: <b>${cp.toFixed(1)}% CP</b> · <b>${tdn.toFixed(1)}% TDN</b> · <b>${me.toFixed(2)} Mcal/kg ME</b> (DM basis).</div>`; }
  $('#rationOut').innerHTML=html;
}

/* ============ Derived modules ============ */
function cost(){
  header('Cost Tracker','Feed cost derived from usage × latest purchase rate');
  const rows=db.feeding.map(f=>[f.date,f.animal,esc(f.ingredient),num(f.qty,1),money(ingRate(f.ingredient)),money(f.qty*ingRate(f.ingredient))]);
  return rtable(['Date','Animal','Ingredient','Qty kg','Rate Rs/kg','Cost'],rows,[3,4,5]);
}
function feedstock(){
  header('Feed Stock','Closing stock = purchased − used');
  const rows=INGREDIENTS.map(i=>{ const p=db.purchases.filter(x=>x.ingredient===i.name).reduce((s,x)=>s+x.qty,0); const u=db.feeding.filter(x=>x.ingredient===i.name).reduce((s,x)=>s+x.qty,0); const c=p-u; return [esc(i.name),num(p,1),num(u,1),num(c,1),c<0?'<span class="badge danger">REORDER</span>':'<span class="badge ok">OK</span>']; });
  return rtable(['Ingredient','Purchased kg','Used kg','Closing kg','Status'],rows,[1,2,3]);
}
function ledger(){
  header('Ledger','Automatic income / expense summary');
  const q=db.qurbani.reduce((s,x)=>s+(+x.price||0),0);
  const f=db.sales.reduce((s,x)=>s+(+x.price||0),0);
  const milkEst=db.milkCustomers.filter(m=>m.status!=='Inactive').reduce((s,m)=>s+(+m.dailyOrder||0)*(+m.rate||0)*30,0);
  const income=q+f+milkEst;
  const p=db.purchases.reduce((s,x)=>s+x.qty*x.rate,0);
  const fc=db.feeding.reduce((s,x)=>s+x.qty*ingRate(x.ingredient),0);
  const sal=db.salary.reduce((s,x)=>s+(+x.amount||0),0);
  const qc=db.qurbani.reduce((s,x)=>s+(+x.cost||0),0);
  const expense=p+fc+sal+qc;
  return `<div class="grid kpis">`
    +kpi('#e8f6ef','Qurbani Sales',money(q),'')
    +kpi('#eaf3fb','Fattening Sales',money(f),'')
    +kpi('#eef1f4','Milk Sales (est.)',money(milkEst),'orders × 30 days')
    +kpi('#fdeaea','Total Income',money(income),'')
    +kpi('#fff4e4','Feed Purchases',money(p),'')
    +kpi('#fff4e4','Feed Cost (used)',money(fc),'')
    +kpi('#fff4e4','Salary Paid',money(sal),'')
    +kpi('#eaf3fb','NET',plBadge(income-expense),'income − expense')
    +`</div><div class="section"><div class="notice">Milk sales are an estimate (active customers' daily order × 30). General inventory purchases are excluded until a payable-transaction workflow exists.</div></div>`;
}

/* ============ Guide (from workbook Read Me) ============ */
function guide(){
  header('Guide & Help','How the farm works — quick start, daily flow, and the math');
  const steps=[
    ['Set up the basics','Ingredients are already loaded (56). Add your animals in Animal Register with their Purpose (Fattening / Qurbani / Dairy / Breeding).','animals'],
    ['Plan the feed','Use Ration Formulator to see daily concentrate/roughage amounts for each phase.','ration'],
    ['Do the daily routine','Each day: log feeding, weights, milk, and any health events.','feeding'],
    ['Record sales','When an animal sells, record it in Fattening Sales or Qurbani — profit is calculated for you.','sales'],
    ['Review the money','Ledger shows income vs expense; Dashboard shows live herd status.','ledger']
  ];
  const formulas=[
    ['Average daily gain (ADG)','(latest weight − first weight) ÷ days × 1000','g/day'],
    ['Expected calving','breeding date + 283 days','date'],
    ['Daily feed (DMI)','3% of body weight','kg dry matter'],
    ['Fattening phases','1: days 1–33 · 45% conc — 2: days 34–66 · 60% — 3: days 67–100 · 75%','program'],
    ['Feed cost','quantity × latest purchase rate','Rs'],
    ['Sale profit','sale price − acquisition cost − feed cost','Rs'],
    ['Milk sales (estimate)','daily order × rate × 30 days','Rs/month'],
    ['Meat output','live weight × 58% dressing','kg']
  ];
  return `<div class="grid two">`
    +`<div class="card"><h2>Quick start (5 minutes)</h2>`
    +steps.map((s,i)=>`<div class="step"><span class="n">${i+1}</span><span class="body"><b>${s[0]}</b><div class="muted" style="font-size:12.5px">${s[1]}</div></span><button class="btn sm" onclick="go('${s[2]}')">Open</button></div>`).join('')
    +`</div>`
    +`<div class="card"><h2>How the numbers are calculated</h2>`
    +`<p class="muted" style="font-size:12.5px;margin-top:0">These rules come straight from the workbook — nothing is guessed.</p>`
    +formulas.map(f=>`<div class="row"><div><b>${f[0]}</b><div class="formula">${f[1]}</div></div><span class="badge neutral">${f[2]}</span></div>`).join('')
    +`</div>`
    +`</div>`
    +`<div class="section grid two">`
    +`<div class="card"><h2>Where each module fits</h2>`
    +`<div class="muted" style="font-size:12.5px;margin-bottom:8px">Workbook sheets are combined into app modules.</div>`
    +`<div class="row"><b>Setup</b><span class="muted">Ingredient Database · Ration Formulator · Animal Register</span></div>`
    +`<div class="row"><b>Daily work</b><span class="muted">Daily Feeding · Weight &amp; Growth · Health</span></div>`
    +`<div class="row"><b>Dairy</b><span class="muted">Dairy &amp; Milk (production log) · Milk Customers</span></div>`
    +`<div class="row"><b>Breeding</b><span class="muted">Breeding (log) · Calving · Weaning</span></div>`
    +`<div class="row"><b>Selling</b><span class="muted">Fattening Customers · Fattening Sales · Qurbani</span></div>`
    +`<div class="row"><b>Money</b><span class="muted">Feed Purchases · Cost Tracker · Feed Stock · Inventory · Staff · Salary · Ledger</span></div>`
    +`</div>`
    +`<div class="card"><h2>Inputs, formulas &amp; cautions</h2>`
    +`<div class="legend-item"><div><b>You type</b><div class="faint" style="font-size:12px">Rates, weights, dates, quantities (form fields).</div></div></div>`
    +`<div class="legend-item"><div><b>Calculated for you</b><div class="faint" style="font-size:12px">ADG, feed cost, expected calving, ledger — don't type these.</div></div></div>`
    +`<div class="legend-item"><div><b>Linked automatically</b><div class="faint" style="font-size:12px">Animal Profile, Feed Stock and Ledger pull from other modules.</div></div></div>`
    +`<div class="legend-item"><div><b>Sorghum / Sudan / Bajra caution</b><div class="faint" style="font-size:12px">Young, drought-stressed or dry fodder can form prussic acid (poison) — use with care.</div></div></div>`
    +`<div class="legend-item"><div><b>BCS 1–5</b><div class="faint" style="font-size:12px">Body condition scored in 0.5 steps on the Weight page.</div></div></div>`
    +`</div>`
    +`</div>`;
}

/* ============ Router & nav ============ */
const NAV=[
[null,'dashboard','Dashboard'],[null,'guide','Guide & Help'],
['Setup',null,null],
['','ingredients','Ingredient Database'],['','ration','Ration Formulator'],['','animals','Animal Register'],
['Animals',null,null],
['','profile','Animal Profile'],['','feeding','Daily Feeding'],['','growth','Weight & Growth'],['','health','Health'],
['Dairy',null,null],
['','dairy','Dairy & Milk'],['','milkCustomers','Milk Customers'],
['Breeding',null,null],
['','breeding','Breeding'],['','calving','Calving'],['','weaning','Weaning'],
['Selling',null,null],
['','customers','Fattening Customers'],['','sales','Fattening Sales'],['','qurbani','Qurbani'],
['Inventory & Finance',null,null],
['','purchases','Feed Purchases'],['','cost','Cost Tracker'],['','feedstock','Feed Stock'],['','inventory','General Inventory'],['','staff','Staff'],['','salary','Salary Payments'],['','ledger','Ledger']
];
const navEl=$('#nav');
navEl.innerHTML=NAV.map(n=> n[1]===null?`<div class="group">${n[0]}</div>`:`<button data-p="${n[1]}" onclick="go('${n[1]}')">${n[2]}</button>`).join('');
const pages={dashboard,profile,guide,growth:growthPage,ration,cost,feedstock,ledger};
['animals','feeding','dairy','milkCustomers','breeding','calving','weaning','health','purchases','customers','sales','qurbani','inventory','staff','salary','ingredients'].forEach(k=>{ pages[k]=()=>crudPage(MODULES[k]); });
function go(p){ location.hash=p; render(); }
function render(){
  let p=location.hash.slice(1).split('?')[0]||'dashboard';
  if(!pages[p]) p='dashboard';
  navEl.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.p===p));
  $('#app').innerHTML=pages[p]();
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',render);
render();

