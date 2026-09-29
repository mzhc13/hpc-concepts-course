---
layout: splash
permalink: /
title: ""
search: false
---

<style>
:root{--bg:#042f39;--purple:#6c2a68;--cyan:#0C5D79;--stroke:#fff;--before: #cea064;--req:#5f9a5a;--after:#c3a6c4;--line:#6f9aa6}
body{background:var(--bg);color:#fff}
#main{max-width:none!important}
.wrap{max-width:1720px;margin:0 auto;padding:0 12px}
.hero{background:linear-gradient(180deg,#6c2a68,#4b1f45);border:1px solid #fff;border-radius:26px;padding:26px 34px;margin:1rem auto 18px;text-align:center}
.hero h1{font-size:28px;font-weight:900;margin:0 0 6px;color:#fff}
.hero p{margin:4px auto;max-width:820px;font-size:16px;line-height:1.5;color: #f3eee2}
.hero .meta{font-size:14px;opacity:.85}
.hero .authors{margin:8px auto 2px; font-size:15px; font-weight:700; color:#fff;}
.hero .affiliation{margin:2px auto 8px;font-size:14px; color:#f3eee2;}
.stage{display:grid;grid-template-columns:1fr;gap:16px;align-items:start}
.side{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:14px;align-content:start}
.main-col{min-width:0}
@media (min-width:1540px){
.stage{grid-template-columns:250px minmax(0,1fr) 250px}
.side{display:flex;flex-direction:column}
}
.panel{background:#064756;border:2px solid #fff;border-radius:16px;padding:16px 20px}
.panel h2{font-size:19px;margin:0 0 8px;color:#fff}
.panel ol,.panel ul{margin:0;padding-left:20px;font-size:15px;line-height:1.5;color:#f3eee2}
.panel p{font-size:15px;line-height:1.5;color:#f3eee2;margin:0 0 6px}
.legend{display:grid;grid-template-columns:auto 1fr;gap:8px 12px;align-items:center;font-size:15px;color:#fff}
.sw{width:30px;height:30px;border-radius:7px;border:3px solid #fff;display:block}
.sw.sel{background:var(--purple)}.sw.before{background:var(--before);border-style:dashed}.sw.req{background:var(--req)}.sw.after{background:var(--after)}.sw.none{background:#005e80}.sw.idle{background:var(--cyan)}
.ln{width:30px;height:0;border-top:3px solid;display:block}
.ln.d{border-top-style:dashed;border-color:var(--before)}.ln.s{border-color:var(--req)}.ln.a{border-color:var(--after)}
.scroller{overflow-x:auto;padding-bottom:8px}
.graph-grid{display:grid;position:relative;min-width:980px;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(4,minmax(200px,auto));row-gap:30px;column-gap:10px;justify-items:center;align-items:center}
#arrows-layer{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0}
.arrow{stroke:var(--line);stroke-width:2.5;fill:none;stroke-linejoin:round;stroke-linecap:round}
.arrow-before{stroke:var(--before);stroke-dasharray:6 6}.arrow-required{stroke:var(--req)}.arrow-after{stroke:var(--after)}
.arch-card{position:relative;z-index:1;width:150px;height:200px;background:var(--cyan);border-radius:22px;border:4px solid #fff;cursor:pointer;display:flex;flex-direction:column;transition:transform .15s,background .15s}
.arch-card:hover{transform:translateY(-2px);background:var(--purple)}
.arch-card:focus-visible{outline:3px solid #ffe66d;outline-offset:3px}
.card-content{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:2px}
.arch-card .title{font-weight:700;font-size:20px;text-align:center;line-height:1.2;margin:0 .3rem;color:inherit}
.arch-card .actions{max-height:0;overflow:hidden;visibility:hidden}
.arch-card.active{background:var(--purple);transform:translateY(-2px)}
.arch-card.active .title{font-size:15px;margin:.1rem}
.arch-card.active .actions{max-height:200px;visibility:visible;display:flex;flex-direction:column;align-items:center;gap:4px}
.btn{background:#fff;color:#042f39;font-weight:600;font-size:16px;padding:6px 12px;border-radius:22px;border:2px solid #fff;display:inline-block;width:130px;text-align:center;text-decoration:none}
.btn:hover,.btn:focus-visible{color:#000;outline:3px solid #ffe66d;outline-offset:3px}
.arch-card.before{background:var(--before);color:#000}.arch-card.connected{background:var(--req);color:#000}.arch-card.after{background:var(--after);color:#000}
.arch-card.unrelated{background:#005e80;color:#fff}
.arch-card.before{border-style:dashed}
.tag{display:none;margin-top:6px;padding:2px 10px;border-radius:14px;background:#000;color:#fff;font-size:13px;font-weight:700;line-height:1.4;text-align:center}
.tag:not(:empty){display:inline-block}
.arch-card.active .tag{display:none}
.info{background:var(--purple);border:3px solid #fff;border-radius:16px;padding:16px 20px}
.info h2{margin:0 0 4px;font-size:21px;line-height:1.25;color:#fff}
.info .lect{margin:0 0 10px;font-size:14px}
.info p{font-size:15px;line-height:1.5;margin:0 0 10px;color:#fff}
.info dl{display:grid;grid-template-columns:1fr;gap:2px;margin:12px 0;font-size:14px;line-height:1.45}
.info dt{font-weight:700;color:#ffe8a3;margin-top:8px}.info dd{margin:0}
.legend-note{font-size:14px!important;margin-top:10px!important}
.info button{background:#fff;color:#042f39;border:0;border-radius:22px;padding:8px 18px;font-weight:700;cursor:pointer}
.info button:hover{background:#ffe66d}
.foot{display:flex;flex-wrap:wrap;gap:24px;align-items:center;justify-content:space-between;margin:24px 0 32px}
.foot a{color:#fff;text-decoration:underline}
.logo{max-width:200px;max-height:110px;width:auto;height:auto;object-fit:contain}
.video-modal{position:fixed;inset:0;background:rgba(0,0,0,.75);display:none;align-items:center;justify-content:center;z-index:9999}
.video-modal-content{background:#6c2a68;border-radius:16px;padding:24px;width:90%;max-width:900px;position:relative}
.video-modal h2{margin:0 0 4px;font-size:36px;text-align:center;color:#fff}
.video-modal p{margin:0 0 16px;text-align:center;color:#fff}
.video-wrapper{position:relative;padding-top:56.25%}
.video-wrapper iframe{position:absolute;inset:0;width:100%;height:100%;border-radius:12px}
.vclose{position:absolute;top:8px;right:12px;font-size:28px;background:none;border:none;color:#fff;cursor:pointer}
@media (prefers-reduced-motion:reduce){.arch-card{transition:none}}
.pdf-btn{background:#fff;color:#042f39;border:2px solid #fff;border-radius:22px;padding:8px 18px;font-weight:700;font-size:15px;cursor:pointer}
.pdf-btn:hover,.pdf-btn:focus-visible{background:#ffe66d;outline:3px solid #ffe66d;outline-offset:3px}

/* PDF / print: one A3 landscape page, fixed width so the arrows line up */
@page{size:420mm 297mm;margin:0}
.print-mode .wrap{width:1580px;max-width:none;margin:0 auto;padding:22px 30px;box-sizing:border-box}
.print-mode .hero{padding:14px 30px;margin:0 0 14px}
.print-mode .hero h1{font-size:30px}
.print-mode .hero p{font-size:15px;margin:2px auto}
.print-mode .stage{grid-template-columns:250px minmax(0,1fr) 250px;gap:16px}
.print-mode .side{display:flex;flex-direction:column;gap:12px}
.print-mode .panel{padding:12px 16px}
.print-mode .panel h2{font-size:17px}
.print-mode .panel ol,.print-mode .panel ul,.print-mode .panel p,.print-mode .legend{font-size:14px}
.print-mode .scroller{overflow:visible;padding:0}
.print-mode .graph-grid{grid-template-rows:repeat(4,170px);row-gap:22px}
.print-mode .arch-card{height:170px}
.print-mode .info button{display:none}
.print-mode .foot{margin:14px 0 0}
.print-mode .logo{max-height:60px}
@media print{
*{-webkit-print-color-adjust:exact;print-color-adjust:exact}
html,body{background:var(--bg)!important;margin:0!important}
.masthead,.page__footer,.skip-links,.sidebar,.no-print{display:none!important}
.arch-card{transition:none}
}

/* Activity modal styles (unchanged from your version) */
.activity-modal{position:fixed;inset:0;background:rgba(0,0,0,.75);display:none;align-items:center;justify-content:center;z-index:10000;padding:20px}
.activity-modal-content{position:relative;width:850px;max-width:100%;height:90vh;overflow-y:auto;background:#6c2a68;color:#fff;border-radius:22px;border:3px solid #fff;padding:35px}
.activity-modal-content h2{text-align:center;font-size:32px;margin-top:0;}
.activity-modal-content h3{color:#fff;font-size:22px;line-height:1.4}
.activity-close{position:absolute;top:10px;right:15px;background:none;border:none;color:#fff;font-size:32px;cursor:pointer}
.activity-question{margin-top:25px}
#activity-question p,#activity-feedback p{white-space:pre-line}
.activity-options{display:flex;flex-direction:column;gap:12px;margin:25px 0}
.activity-option{display:flex;align-items:center;gap:12px;padding:15px;background:#042f39;border:2px solid #fff;border-radius:12px;cursor:pointer;color:#fff}
.activity-option:hover{background:#0C5D79}
.activity-option input{transform:scale(1.3)}
.activity-check,.activity-next,.activity-previous{background:#fff;color:#042f39;border:none;border-radius:22px;padding:10px 22px;font-size:16px;font-weight:700;cursor:pointer}
.activity-check:hover,.activity-next:hover,.activity-previous:hover{background:#ffe66d}
#activity-feedback{font-size:18px}
#activity-feedback p{margin:1px 0;color:#fff!important}
.correct{color:#7f9a79;font-weight:700}.incorrect{color:#e07a7a;font-weight:700}.feedback-text{color:#fff;font-weight:400}
.activity-text-input{width:100%;box-sizing:border-box;padding:14px;margin:15px 0 20px;background:#fff;color:#042f39;border:2px solid #fff;border-radius:10px;font-size:18px}
.drag-items{display:flex;justify-content:center;gap:15px;margin:25px 0;flex-wrap:wrap}
.drag-item{padding:12px 22px;background:#fff;color:#042f39;border-radius:10px;border:2px solid #fff;font-size:18px;font-weight:700;cursor:grab;user-select:none}
.drag-item.dragging{opacity:.5}
.drop-zone{display:flex;justify-content:center;gap:15px;margin:30px 0}
.drop-box{width:150px;min-height:55px;border:2px dashed #fff;border-radius:10px;display:flex;align-items:center;justify-content:center;padding:5px}
.drop-box.drag-over{background:#0C5D79}
.drop-box .drag-item{width:100%;box-sizing:border-box;text-align:center}
.activity-navigation{display:flex;justify-content:space-between;gap:15px;margin-top:30px}
.activity-code{background:#042f39;color:#fff;border:2px solid #fff;border-radius:12px;padding:20px;margin:20px 0;overflow-x:auto;text-align:left;font-family:monospace;font-size:15px;line-height:1.6;white-space:pre-wrap}
.fill-in-fields{margin:25px 0}.fill-in-field{margin-bottom:20px}
.fill-in-field label{display:block;font-weight:700;margin-bottom:8px;color:#fff}
.fill-in-field .activity-text-input{margin:0}
.activity-field-feedback{margin-top:6px;min-height:24px}
.sort-zones{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-top:25px}
.sort-zone{border:2px dashed #6c2a68;border-radius:10px;min-height:180px;padding:15px;background:#f8f5f8;transition:all .2s}
.sort-zone h4{margin:0 0 15px;text-align:center;font-size:1.1rem;color:#6c2a68}
.sort-drop-area{min-height:120px}
.sort-zone.drag-over{border-style:solid;background:#eee5ef;transform:scale(1.01)}
.sort-zone .drag-item{margin-bottom:8px}
@media (max-width:700px){.sort-zones{grid-template-columns:1fr}}
.multiple-select-feedback{list-style:none;padding:0;margin:15px 0 0}
.multiple-select-feedback li{padding:5px;margin-bottom:6px;border-radius:6px;color:#fff}
.feedback-correct{background:#eaf6ea;color:#fff!important}.feedback-incorrect{background:#fcecec;color:#fff!important}
</style>

<main id="main-content" class="wrap">

<div class="hero">
  <h1>High-Performance Computing Concepts</h1>
  <p class="authors">
    Eva Fernández Amez · Thomas Flynn · Mladen Ivkovic · Christopher Marcotte · Tobias Weinzierl
  </p>
  <p class="meta">Interactive Research e-Poster · Supercomputing 26 (SC26), Chicago</p>
</div>

<div class="stage">

<div class="side">
<section class="panel" aria-labelledby="h-how">
<h2 id="h-how">How to use this map</h2>
<ol>
<li>Select a topic card. It highlights the topics around it.</li>
<li>Read the summary beside the map: what it covers and what to study before and after.</li>
<li>Press <b>Lecture</b> to watch the video, or <b>Activities</b> to test yourself.</li>
</ol>
</section>
<section class="panel" aria-labelledby="h-key">
<h2 id="h-key">Legend</h2>
<div class="legend">
<span class="sw idle"></span><span>Topic (nothing selected)</span>
<span class="sw sel"></span><span>Selected topic</span>
<span class="sw req"></span><span>Required before it: learn these first</span>
<span class="sw before"></span><span>Suggested before it: helpful background</span>
<span class="sw after"></span><span>Comes next: what this unlocks</span>
<span class="ln s"></span><span>Solid line: required link</span>
<span class="ln d"></span><span>Dashed line: suggested link</span>
<span class="ln a"></span><span>Arrowhead points to the later topic</span>
</div>
<p class="legend-note">Related cards also carry a text label (Learn first, Background, Comes next), so the map never relies on colour alone.</p>
</section>
</div>

<div class="main-col">
<div class="scroller" tabindex="0" aria-label="Knowledge graph. Scroll sideways on small screens.">
<div class="graph-grid" id="graph"><svg id="arrows-layer" aria-hidden="true"></svg></div>
</div>
</div>

<div class="side">
<section class="panel" aria-labelledby="h-inside">
<h2 id="h-inside">What is inside each topic</h2>
<ul>
<li><b>Lecture:</b> a short video from a Durham University HPC lecturer.</li>
<li><b>Activities:</b> interactive exercises with instant feedback: multiple choice, fill-in-the-code, short answers and drag-and-drop sorting.</li>
<li>10 topics, 4 lecturers, one learning path from hardware to scaling.</li>
</ul>
</section>
<section class="info" id="info" aria-live="polite">
<h2>Select a topic to begin</h2>
<p>Good starting point: <b>Von Neumann Architecture</b>, the top-left card. Everything else builds on it. On a phone, scroll the map sideways.</p>
</section>
</div>

</div>

<div class="foot">

<div>Source, activities and teaching materials: <a href="https://github.com/mzhc13/high-performance-computing-concepts-course">course repository on GitHub</a></div>
<div><img src="https://github.com/mzhc13/high-performance-computing-concepts-course/blob/main/assets/images/durham.png?raw=true" class="logo" alt="Durham University"> <img src="https://github.com/mzhc13/high-performance-computing-concepts-course/blob/main/assets/images/ukri.png?raw=true" class="logo" alt="UKRI"></div>
</div>

<div id="video-modal" class="video-modal" role="dialog" aria-modal="true" aria-labelledby="video-title">
<div class="video-modal-content">
<h2 id="video-title">Title</h2>
<p id="video-lecturer">Lecturer</p>
<div class="video-wrapper"><iframe id="video-iframe" src="" title="Lecture video" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
<button class="vclose" aria-label="Close video" onclick="closeVideo()">×</button>
</div>
</div>
{% include activity-modal.html %}
</main>

<script>
/* id, title, YouTube id, lecturer, grid row, grid col, summary */
const TOPICS=[
["von-neumann","Von Neumann Architecture","3ru-v3sAdqw?si=Jj8Koun21HpjFCLY","Professor Tobias Weinzierl",1,1,"The stored-program model of a computer: processor, memory and the bus between them. It explains the von Neumann bottleneck, why moving data usually costs more than computing on it."],
["caches","Caches","ZPXYoJJo8qA?si=ZlX967WyjtxgpLWm","Professor Tobias Weinzierl",1,2,"The memory hierarchy, cache lines and data locality. Learn why the order in which you access memory can matter more than the arithmetic you do."],
["machine-architectures","Machine Architectures (Flynn’s Taxonomy)","jWFImJ-5Gtg?si=BBZou2CJvwDj7EC-","Dr. Mladen Ivkovic",2,2,"Flynn’s taxonomy (SISD, SIMD, MISD, MIMD) as a map from hardware designs to the kinds of parallelism you can exploit."],
["GPU","GPU Architecture","8axA0RUaxRA?si=kwFcCVbDKzJw3vw4","Dr. Christopher Marcotte",2,3,"How throughput-oriented, many-core GPUs differ from CPUs: thread hierarchy, memory and the kinds of problems that suit them."],
["MPI","MPI","i-88l2K9824?si=5hG4_gn3DE3_r6Tq","Dr. Christopher Marcotte",3,3,"Distributed-memory programming with the Message Passing Interface: ranks, point-to-point messages and collective operations across nodes."],
["vectorisation","Vectorisation","7Z3JrE8SBgU?si=QB-EK98D3_63IAiq","Dr. Thomas Flynn",1,4,"Using SIMD units to apply one instruction to several data items at once, and how data layout and loop structure let compilers do it."],
["shared-memory","Shared-Memory Parallel Paradigms","iwb17_aCSRA?si=NGorUytvUqWRMWEZ","Dr. Mladen Ivkovic",4,4,"Multithreading on one node: sharing data between threads, race conditions and synchronisation."],
["roofline","Roofline","uhYFZrqe9VY?si=TbG28ic8nFSU0kAm","Professor Tobias Weinzierl",1,5,"A visual performance model that shows whether code is limited by compute or by memory bandwidth, using arithmetic intensity."],
["strong-scaling","Strong Scaling","99VgSkjLQM4?si=YqCN8fMLu2iB4Tt6","Dr. Christopher Marcotte",2,5,"Fixed problem size, more processors: how to measure speedup and parallel efficiency, and why serial fractions limit it (Amdahl’s law)."],
["weak-scaling","Weak Scaling","dVZqpXi5BRE?si=pNSgIwWY38rt4W12","Dr. Christopher Marcotte",2,6,"Problem size grows with processor count: how to judge whether a code can tackle bigger problems on bigger machines."]
];

const relations={
"von-neumann":{suggestedPrev:[],requiredPrev:[],next:[{id:"caches",portFrom:"R",portTo:"L"},{id:"machine-architectures",portFrom:"B",portTo:"L"}]},
"caches":{suggestedPrev:[],requiredPrev:[{id:"von-neumann",portFrom:"L",portTo:"R"}],next:[{id:"vectorisation",portFrom:"R",portTo:"L"}]},
"vectorisation":{suggestedPrev:[{id:"GPU",portFrom:"BL",portTo:"TR"},{id:"shared-memory",portFrom:"B",portTo:"T"}],requiredPrev:[{id:"caches",portFrom:"L",portTo:"R"},{id:"machine-architectures",portFrom:"TR",portTo:"BL"}],next:[{id:"roofline",portFrom:"R",portTo:"L"}]},
"machine-architectures":{suggestedPrev:[],requiredPrev:[{id:"von-neumann",portFrom:"L",portTo:"B"}],next:[{id:"vectorisation",portFrom:"BL",portTo:"TR"},{id:"GPU",portFrom:"R",portTo:"L"},{id:"MPI",portFrom:"B",portTo:"L"},{id:"shared-memory",portFrom:"B",portTo:"BL"}]},
"GPU":{suggestedPrev:[],requiredPrev:[{id:"machine-architectures",portFrom:"R",portTo:"L"}],next:[{id:"vectorisation",portFrom:"TR",portTo:"BL"},{id:"shared-memory",portFrom:"R",portTo:"TL"}]},
"shared-memory":{suggestedPrev:[{id:"MPI",portFrom:"L",portTo:"B"},{id:"GPU",portFrom:"TL",portTo:"R"}],requiredPrev:[{id:"machine-architectures",portFrom:"BL",portTo:"B"}],next:[{id:"strong-scaling",portFrom:"R",portTo:"B"},{id:"vectorisation",portFrom:"T",portTo:"B"}]},
"MPI":{suggestedPrev:[],requiredPrev:[{id:"machine-architectures",portFrom:"L",portTo:"B"}],next:[{id:"strong-scaling",portFrom:"R",portTo:"BL"},{id:"shared-memory",portFrom:"B",portTo:"L"}]},
"roofline":{suggestedPrev:[],requiredPrev:[{id:"vectorisation",portFrom:"L",portTo:"R"}],next:[]},
"strong-scaling":{suggestedPrev:[{id:"MPI",portFrom:"R",portTo:"L"},{id:"shared-memory",portFrom:"B",portTo:"R"}],requiredPrev:[],next:[{id:"weak-scaling",portFrom:"R",portTo:"L"}]},
"weak-scaling":{suggestedPrev:[],requiredPrev:[{id:"strong-scaling",portFrom:"L",portTo:"R"}],next:[]}
};

const NAME={};TOPICS.forEach(t=>NAME[t[0]]=t[1]);
const grid=document.getElementById("graph"),svg=document.getElementById("arrows-layer"),info=document.getElementById("info");
let selected=null;

/* Build cards */
TOPICS.forEach(([id,title,yt,lect,r,c])=>{
  const d=document.createElement("div");
  d.id=id;d.className="arch-card";d.style.gridRow=r;d.style.gridColumn=c;
  d.setAttribute("role","button");d.tabIndex=0;d.setAttribute("aria-expanded","false");
  d.innerHTML=`<div class="card-content"><h2 class="title">${title}</h2><span class="tag"></span><div class="actions"><a class="btn" href="#" data-a="v">Lecture</a><a class="btn" href="#" data-a="a">Activities</a></div></div>`;
  d.addEventListener("click",e=>{
    const b=e.target.closest(".btn");
    if(b){e.preventDefault();e.stopPropagation();b.dataset.a==="v"?openVideo(yt,title,lect):openActivity(id.toLowerCase());return;}
    select(id);e.stopPropagation();
  });
  d.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target===d){e.preventDefault();select(id);}});
  grid.appendChild(d);
});

/* Arrows */
const defs=document.createElementNS("http://www.w3.org/2000/svg","defs");
defs.innerHTML=`<marker id="arrowhead-end" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0,10 3.5,0 7" fill="context-stroke"/></marker><marker id="arrowhead-start" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="10 0,0 3.5,10 7" fill="context-stroke"/></marker>`;
svg.appendChild(defs);

function getPort(r,p){const x=r.left,y=r.top,w=r.width,h=r.height;
  return{TL:{x,y},T:{x:x+w/2,y},TR:{x:x+w,y},L:{x,y:y+h/2},R:{x:x+w,y:y+h/2},BL:{x,y:y+h},B:{x:x+w/2,y:y+h},BR:{x:x+w,y:y+h}}[p];}

function createLine(a,b,pf,pt){
  const A=document.getElementById(a),B=document.getElementById(b);if(!A||!B)return null;
  const par=grid.getBoundingClientRect(),p1=getPort(A.getBoundingClientRect(),pf),p2=getPort(B.getBoundingClientRect(),pt);
  p1.x-=par.left;p1.y-=par.top;p2.x-=par.left;p2.y-=par.top;
  const m={x:p1.x,y:p1.y},g=12;
  ({L:()=>p1.x-=g,R:()=>p1.x+=g,T:()=>p1.y-=g,B:()=>p1.y+=g}[pf]||(()=>{}))();
  ({L:()=>p2.x-=g,R:()=>p2.x+=g,T:()=>p2.y-=g,B:()=>p2.y+=g}[pt]||(()=>{}))();
  if(pf==="L"||pf==="R")m.x=p2.x;else m.y=p2.y;
  const path=document.createElementNS("http://www.w3.org/2000/svg","path");
  path.setAttribute("d",`M ${p1.x} ${p1.y} L ${m.x} ${m.y} L ${p2.x} ${p2.y}`);
  path.classList.add("arrow");svg.appendChild(path);return path;
}

function drawRel(from,rel){
  const to=rel.id,key=[from,to].sort().join("__");
  if(svg.querySelector(`.arrow[data-key="${key}"]`))return;
  const l=createLine(from,to,rel.portFrom||"R",rel.portTo||"L");
  if(l){l.dataset.key=key;l.dataset.a=from;l.dataset.b=to;}
}

function drawAll(){
  svg.querySelectorAll(".arrow").forEach(p=>p.remove());
  Object.entries(relations).forEach(([f,r])=>{r.next.forEach(x=>drawRel(f,x));r.requiredPrev.forEach(x=>drawRel(x.id,{...x,id:f}));});
  if(selected)select(selected);
}

/* Selection */
function clearState(){
  document.querySelectorAll(".arch-card .tag").forEach(t=>t.textContent="");
  document.querySelectorAll(".arch-card").forEach(c=>{c.classList.remove("active","before","after","connected","unrelated");c.setAttribute("aria-expanded","false");});
  svg.querySelectorAll(".arrow").forEach(l=>{l.classList.remove("arrow-before","arrow-required","arrow-after");l.removeAttribute("marker-start");l.removeAttribute("marker-end");});
}

function select(id){
  selected=id;clearState();
  const card=document.getElementById(id),rel=relations[id];
  card.classList.add("active");card.setAttribute("aria-expanded","true");
  const mark=(r,cls,label)=>{const el=document.getElementById(r.id);el.classList.add(cls);el.querySelector(".tag").textContent=label;};
  rel.suggestedPrev.forEach(r=>mark(r,"before","Background"));
  rel.requiredPrev.forEach(r=>mark(r,"connected","Learn first"));
  rel.next.forEach(r=>mark(r,"after","Comes next"));
  document.querySelectorAll(".arch-card").forEach(c=>{if(c!==card&&!/before|after|connected/.test(c.className))c.classList.add("unrelated");});
  svg.querySelectorAll(".arrow").forEach(l=>{
    const isA=l.dataset.a===id,isB=l.dataset.b===id;if(!isA&&!isB)return;
    const other=document.getElementById(isA?l.dataset.b:l.dataset.a);
    l.classList.add(other.classList.contains("connected")?"arrow-required":other.classList.contains("before")?"arrow-before":"arrow-after");
    l.setAttribute(isA?"marker-end":"marker-start",isA?"url(#arrowhead-end)":"url(#arrowhead-start)");
    svg.appendChild(l);
  });
  showInfo(id);
}

function showInfo(id){
  const t=TOPICS.find(x=>x[0]===id),rel=relations[id];
  const names=a=>a.length?a.map(r=>NAME[r.id]).join(", "):null;
  const rows=[["Learn first (required)",names(rel.requiredPrev)||"Nothing, this is a starting point"],["Helpful background",names(rel.suggestedPrev)||"None"],["Comes next",names(rel.next)||"You have reached the end of this path"]];
  info.innerHTML=`<h2>${t[1]}</h2><p class="lect">Lecturer: ${t[3]}</p><p>${t[6]}</p><dl>${rows.map(r=>`<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join("")}<dt>Activities</dt><dd>Interactive exercises with instant feedback on the key ideas of this lecture.</dd></dl><button onclick="resetDiagram()">Clear selection</button>`;
}

function resetDiagram(){
  selected=null;clearState();
  info.innerHTML=`<h2>Select a topic to begin</h2><p>Good starting point: <b>Von Neumann Architecture</b>, the top-left card. Everything else builds on it.</p>`;
}

grid.addEventListener("click",e=>{if(e.target===grid)resetDiagram();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeVideo();});

/* Video */
function openVideo(id,title,lect){
  document.getElementById("video-iframe").src=`https://www.youtube.com/embed/${id}${id.includes("?")?"&":"?"}autoplay=1`;
  document.getElementById("video-title").textContent=title;
  document.getElementById("video-lecturer").textContent=lect;
  document.getElementById("video-modal").style.display="flex";
}
function closeVideo(){document.getElementById("video-modal").style.display="none";document.getElementById("video-iframe").src="";}
document.getElementById("video-modal").addEventListener("click",e=>{if(e.target.id==="video-modal")closeVideo();});

/* PDF: switch to the fixed poster layout, redraw the arrows, then restore */
function setPrint(on){document.body.classList.toggle("print-mode",on);drawAll();}
window.addEventListener("beforeprint",()=>setPrint(true));
window.addEventListener("afterprint",()=>setPrint(false));

/* Draw after layout and on resize */
window.addEventListener("load",drawAll);
let rt;window.addEventListener("resize",()=>{clearTimeout(rt);rt=setTimeout(drawAll,120);});
drawAll();
</script>

<script>
window.activitiesData = {};
{% for activity in site.data.activities %}
  window.activitiesData[{{ activity[0] | jsonify }}] = {{ activity[1] | jsonify }};
{% endfor %}
</script>
<script src="{{ '/assets/js/activities.js' | relative_url }}"></script>