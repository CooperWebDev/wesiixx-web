(()=>{
const TW="https://www.twitch.tv/wesiixx";
const ic=n=>`<svg class="i" viewBox="${n=="discord"?"0 0 256 199":"0 0 24 24"}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const pages=[["#home","Home"],["#schema","Schema"],["#games","Games"],["#community","Community"]];
document.body.insertAdjacentHTML("afterbegin",`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="i-twitch" viewBox="0 0 24 24"><path d="M4 2h18v13l-5 5h-4l-3 3v-3H4V2Zm2 2v12h5v3l3-3h3l3-3V4H6Zm4 2h2v5h-2V6Zm5 0h2v5h-2V6Z"/></symbol>
<symbol id="i-youtube" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></symbol>
<symbol id="i-tiktok" viewBox="0 0 24 24"><path d="M15.5 2c.2 2.2 1.5 3.6 3.7 3.8v3.1c-1.6-.1-2.9-.6-4-1.5v7.1c0 4.1-2.6 6.5-6.1 6.5-3.2 0-5.6-2.2-5.6-5.4 0-3.4 2.8-5.7 6.2-5.4v3.2c-1.7-.2-3 .8-3 2.2 0 1.3 1 2.2 2.3 2.2 1.6 0 2.4-1 2.4-3V2h4.1Z"/></symbol>
<symbol id="i-discord" viewBox="0 0 256 199"><path d="M216.9 16.6A208.5 208.5 0 0 0 164 0c-2.3 4.1-4.9 9.6-6.8 14-19.7-3-39.2-3-58.5 0-1.8-4.4-4.6-9.9-6.8-14a207.8 207.8 0 0 0-52.9 16.6C5.6 67.1-3.4 116.4 1.1 165c22.2 16.5 43.700 26.600 64.800 33.200a161 161 0 0 0 13.900-22.900 136.400 136.400 0 0 1-21.900-10.600 108.600 108.600 0 0 0 5.400-4.200c42.100 19.700 87.900 19.700 129.500 0a131.700 131.700 0 0 0 5.400 4.200 136 136 0 0 1-21.900 10.700c4 8 8.600 15.700 13.900 22.800 21.100-6.600 42.600-16.600 64.800-33.200 5.300-56.300-9.100-105.100-38.100-148.400ZM85.500 135.100c-12.600 0-23-11.800-23-26.200s10.100-26.200 23-26.200c12.900 0 23.200 11.800 23 26.200 0 14.400-10.100 26.200-23 26.200Zm85 0c-12.600 0-23-11.800-23-26.200s10.100-26.200 23-26.200c12.900 0 23.200 11.800 23 26.200 0 14.400-10.100 26.200-23 26.200Z"/></symbol>
<symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.300-8 11-8 11Z"/></symbol></defs></svg>
<header class="top"><div class="wrap"><a class="brand" href="#home">Wesiixx</a>
<nav id="nav" aria-label="Hoofdnavigatie">${pages.map(([h,t])=>`<a href="${h}" data-k="${h.slice(1)}">${t}</a>`).join("")}</nav>
<a class="btn sm" href="${TW}" target="_blank" rel="noopener">${ic("twitch")}Twitch</a>
<button class="menu" aria-expanded="false" aria-controls="nav">Menu</button></div></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><span>© ${new Date().getFullYear()} Wesiixx</span><span>Gemaakt voor de Wesiixx community</span></div></footer>`);
document.querySelectorAll("[data-i]").forEach(e=>e.insertAdjacentHTML("afterbegin",ic(e.dataset.i)));
function tick(){
// volgende stream (Amsterdam tijd)
const D=["maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag","zondag"],S=[[1,null,null],[3,18,30],[5,18,30],[6,15,0]];
const p=Object.fromEntries(new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Amsterdam",weekday:"short",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date()).map(x=>[x.type,x.value]));
const today=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(p.weekday),now=today*1440+ +p.hour*60+ +p.minute;
// streams zonder vaste tijd (h=null) tellen als hele dag: vandaag = nu, anders vanaf middernacht
let best=null;S.forEach(([d,h,m])=>{let x=h===null?(d===today?0:((d-today+7)%7)*1440):((d*1440+h*60+m-now+10080)%10080||10080);if(!best||x<best.x)best={x,d,h,m}});
const dd=Math.floor(best.x/1440),hh=Math.floor(best.x%1440/60),mm=best.x%60;
let t,left;
if(best.h===null){t="";const n=(best.d-today+7)%7;left=n===0?"Vandaag":n===1?"Morgen":`Over ${n} dagen`}
else{t=" "+String(best.h).padStart(2,"0")+":"+String(best.m).padStart(2,"0");left="Over "+(dd?`${dd} d ${hh} u`:hh?`${hh} u ${mm} min`:`${mm} min`)}
document.querySelectorAll(".next-day").forEach(e=>e.textContent=`${D[best.d]}${t}`);
document.querySelectorAll(".next-in").forEach(e=>e.textContent=`${left} · Nederlandse tijd`);
document.querySelectorAll("[data-d]").forEach(e=>{if(+e.dataset.d===best.d){e.classList.add("up");e.querySelector(".tag").textContent="Eerstvolgende stream"}});
}
tick();setInterval(tick,30000);
// router
const views=[...document.querySelectorAll("[data-view]")],nav=document.getElementById("nav"),b=document.querySelector(".menu");
if(views.length===1){const m={home:"index.html",schema:"schema.html",games:"games.html",community:"community.html"};document.querySelectorAll('a[href^="#"]').forEach(a=>{const k=a.getAttribute("href").slice(1);if(m[k])a.setAttribute("href",m[k])})}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".page-head .lede,.item,.band h2,.band .lede,.band .row,.band .btn").forEach(el=>{el.classList.add("rv");el.style.setProperty("--d",Math.min([...el.parentNode.children].indexOf(el),8))});
const hd=document.querySelector("header.top");addEventListener("scroll",()=>hd.classList.toggle("sc",scrollY>8),{passive:true});
function route(){let k=views.length===1?views[0].dataset.view:location.hash.slice(1);if(!views.some(v=>v.dataset.view===k))k="home";
 views.forEach(v=>{v.hidden=v.dataset.view!==k;if(!v.hidden)document.title=v.dataset.title});
 nav.querySelectorAll("a").forEach(a=>a.dataset.k===k?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current"));
 nav.classList.remove("open");scrollTo(0,0);
 views.filter(v=>!v.hidden).forEach(v=>v.querySelectorAll(".rv").forEach(el=>{el.classList.remove("in");io.observe(el)}))}
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches,vt=!!document.startViewTransition&&!rm;
if(vt)document.documentElement.classList.add("vt");
addEventListener("hashchange",()=>vt?document.startViewTransition(route):route());route();
b.onclick=()=>{const o=nav.classList.toggle("open");b.setAttribute("aria-expanded",o)};
})();
