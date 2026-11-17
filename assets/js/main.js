/* AppBharat.com — core script (vanilla JS, no dependencies) */
(function(){
"use strict";
var BASE=(document.currentScript&&document.currentScript.src||"").replace(/assets\/js\/main\.js.*$/,"");
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var store={get:function(k,d){try{var v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}},set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
var esc=function(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
/* contact endpoint assembled at runtime so no address appears in markup */
function ep(){var c=[116,118,106,53,115,112,104,116,110,71,56,104,122,114,121,118,126,105,108,126];return "https://formsubmit.co/ajax/"+c.map(function(n){return String.fromCharCode(n-7)}).reverse().join("")}

var B=BASE;document.body.insertAdjacentHTML("beforeend",'<div class="modal cmdk" id="cmdk" role="dialog" aria-modal="true" aria-label="Search"><div class="box"><button class="x" aria-label="Close">×</button><h3>Search AppBharat</h3><input id="cmdkQ" type="search" placeholder="Search apps, guides, tools…" autocomplete="off"><ul id="cmdkR"></ul></div></div><div class="modal" id="leadmagnet" role="dialog" aria-modal="true" aria-label="Free checklist"><div class="box"><button class="x" aria-label="Close">×</button><span class="kicker">Free download</span><h3>India App Launch Checklist</h3><p class="muted">62 steps from idea to Play Store &amp; App Store — costs, compliance (DPDP, GST), launch marketing. Plus a free quote if you want help building.</p><form data-form="Lead magnet — Launch Checklist" data-redirect="checklist.html" data-ok="Unlocked! Opening your checklist…"><div class="row"><div><label>Name</label><input name="name" required></div><div><label>Email</label><input type="email" name="email" required></div></div><label>Phone / WhatsApp (optional)</label><input name="phone" type="tel"><label>Where are you?</label><select name="stage"><option>Just an idea</option><option>Have designs / spec</option><option>App already live</option><option>Agency / freelancer</option></select><div class="hp"><input name="_gotcha" tabindex="-1" autocomplete="off"></div><button class="btn p mt" type="submit" style="width:100%">Send me the checklist</button></form></div></div><div class="cookie" role="region" aria-label="Cookie notice"><p style="margin:0 0 10px">We use cookies for preferences, analytics and to show ads from Google, which may use cookies to personalise ads. See our <a href="'+B+'privacy.html">Privacy Policy</a>.</p><button class="btn p sm" data-cookie="all">Accept all</button> <button class="btn o sm" data-cookie="essential">Essential only</button></div><div class="sticky-cta"><span>Have an app idea?</span><a class="btn p sm" href="'+B+'build-your-app.html">Free quote</a><button class="icon-btn" data-sc-close aria-label="Dismiss" style="width:30px;height:30px;color:#fff;background:transparent">×</button></div><button class="btn o sm totop" aria-label="Back to top">↑ Top</button>');
var F='<footer class="site"><div class="wrap"><div class="grid g4"><div><a class="logo" href="'+B+'index.html"><i></i><span>App<b>Bharat</b></span></a><p class="mt">Independent guide to India\'s apps — government services, Made-in-India alternatives, comparisons, tools and app-building help.</p><form data-form="Newsletter" data-ok="You\'re subscribed! Watch your inbox for the weekly app brief."><label for="nl-e">Weekly app brief</label><div style="display:flex;gap:6px"><input id="nl-e" type="email" name="email" required placeholder="you@example.com"><button class="btn p sm" type="submit">Join</button></div><input type="hidden" name="Form" value="Newsletter"><div class="hp"><input name="_gotcha" tabindex="-1" autocomplete="off"></div></form></div><div><h4>Discover</h4><a href="'+B+'apps.html">App Directory</a><a href="'+B+'government-apps.html">Government Apps</a><a href="'+B+'alternatives.html">Made-in-India Alternatives</a><a href="'+B+'compare.html">Compare Apps</a><a href="'+B+'news.html">App News</a><a href="'+B+'videos.html">Video Hub</a></div><div><h4>Build &amp; Grow</h4><a href="'+B+'build-your-app.html">Get a Free App Quote</a><a href="'+B+'tools.html#cost">App Cost Calculator</a><a href="'+B+'submit-app.html">Submit Your App</a><a href="'+B+'advertise.html">Advertise &amp; Sponsor</a><a href="'+B+'contests.html">Contests &amp; Prizes</a><a href="'+B+'careers.html">Careers &amp; Talent</a><a href="'+B+'support.html">Support Us</a></div><div><h4>Company</h4><a href="'+B+'about.html">About</a><a href="'+B+'contact.html">Contact</a><a href="'+B+'guides.html">Guides</a><a href="'+B+'privacy.html">Privacy Policy</a><a href="'+B+'terms.html">Terms of Use</a><a href="'+B+'disclaimer.html">Disclaimer &amp; Trademarks</a><a href="'+B+'sitemap.xml">Sitemap</a></div></div><div class="legal"><p><b>Independent site.</b> AppBharat.com is not affiliated with, endorsed by, or operated by the Government of India, any ministry or department, NPCI, UIDAI, Google, Apple, or any app developer listed. App names, logos and trademarks belong to their respective owners and are used only to identify the apps. "AppBharat" is used descriptively as a site name and makes no claim over any third-party mark. <a href="'+B+'disclaimer.html" style="display:inline">Full disclosure</a>.</p><p>© <span data-year>2026</span> AppBharat.com. All original content, design and code on this site are protected by copyright. This site uses cookies and shows ads served by Google AdSense.</p></div></div></footer>';var sf=document.getElementById("sitefoot");if(sf)sf.outerHTML=F;
$$("[data-lead]").forEach(function(el){var t=el.getAttribute("data-t")||"Turn your idea into an app — get a free quote in 24 hours",s=el.getAttribute("data-s")||"Tell us what you want to build. We match you with vetted Indian app developers and send a transparent cost &amp; timeline estimate. No obligation.";el.outerHTML='<section><div class="wrap"><div class="band"><div class="grid g2" style="align-items:center;position:relative;z-index:1"><div><span class="kicker" style="background:rgba(255,255,255,.12);color:#ffd29e">For founders, businesses &amp; NGOs</span><h2>'+t+'</h2><p>'+s+'</p><ul class="list check" style="color:#e9edf7"><li>Free, no-obligation estimate</li><li>Android, iOS, web &amp; AI apps</li><li>Your idea stays confidential</li></ul></div><form data-form="Quick quote" data-ok="Thanks! Your request is in — expect a reply within 1 business day."><div class="row"><div><label>Your name</label><input name="name" required></div><div><label>Email</label><input type="email" name="email" required></div></div><div class="row"><div><label>Phone / WhatsApp</label><input name="phone" type="tel"></div><div><label>Budget</label><select name="budget"><option>Under ₹1 lakh</option><option>₹1–5 lakh</option><option>₹5–15 lakh</option><option>₹15 lakh+</option><option>Not sure yet</option></select></div></div><label>What do you want to build?</label><textarea name="idea" rows="3" required placeholder="e.g. a booking app for my clinic with payments and reminders"></textarea><div class="hp"><input name="_gotcha" tabindex="-1" autocomplete="off"></div><button class="btn p mt" type="submit" style="width:100%">Get my free quote →</button><p class="badge mt" style="color:#cfd6e8">🔒 We never sell your details.</p></form></div></div></div></section>'});
/* theme */
var th=store.get("ab-theme",null);if(th)document.documentElement.setAttribute("data-theme",th);
$$("[data-theme-toggle]").forEach(function(b){b.addEventListener("click",function(){var n=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",n);store.set("ab-theme",n)})});
/* mobile menu */
var bg=$(".burger");if(bg)bg.addEventListener("click",function(){var m=$(".menu");m.classList.toggle("open");bg.setAttribute("aria-expanded",m.classList.contains("open"))});
/* cookie consent */
var ck=$(".cookie");if(ck&&!store.get("ab-cookie",false)){ck.classList.add("on");$$("[data-cookie]",ck).forEach(function(b){b.addEventListener("click",function(){store.set("ab-cookie",b.getAttribute("data-cookie"));ck.classList.remove("on")})})}
/* year */
$$("[data-year]").forEach(function(e){e.textContent=new Date().getFullYear()});
/* back to top, progress, sticky cta */
var tt=$(".totop"),pr=$(".progress"),sc=$(".sticky-cta");
window.addEventListener("scroll",function(){var y=window.scrollY,h=document.documentElement.scrollHeight-innerHeight;if(tt)tt.style.display=y>800?"inline-flex":"none";if(pr)pr.style.width=(h>0?y/h*100:0)+"%";if(sc)sc.classList.toggle("on",y>600&&!store.get("ab-sc-x",false))},{passive:true});
if(tt)tt.addEventListener("click",function(){scrollTo({top:0})});
$$("[data-sc-close]").forEach(function(b){b.addEventListener("click",function(){store.set("ab-sc-x",true);sc.classList.remove("on")})});

/* modals */
function openM(id){var m=document.getElementById(id);if(m){m.classList.add("on");var i=$("input",m);if(i)setTimeout(function(){i.focus()},50)}}
function closeM(m){m.classList.remove("on")}
$$(".modal").forEach(function(m){m.addEventListener("click",function(e){if(e.target===m||e.target.classList.contains("x"))closeM(m)})});
document.addEventListener("keydown",function(e){if(e.key==="Escape")$$(".modal.on").forEach(closeM);if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openM("cmdk")}});
$$("[data-open]").forEach(function(b){b.addEventListener("click",function(e){e.preventDefault();openM(b.getAttribute("data-open"))})});
/* exit intent lead magnet: once per session */
var lm=document.getElementById("leadmagnet");
if(lm&&!sessionStorage.getItem("ab-lm")&&!store.get("ab-lead",false)){
 var fire=function(){if(sessionStorage.getItem("ab-lm"))return;sessionStorage.setItem("ab-lm","1");openM("leadmagnet")};
 document.addEventListener("mouseout",function(e){if(!e.relatedTarget&&e.clientY<5)fire()});
 setTimeout(function(){if(innerWidth<800)fire()},45000);
}

/* forms */
$$("form[data-form]").forEach(function(f){
 f.addEventListener("submit",function(e){
  e.preventDefault();var msg=$(".formmsg",f)||f.appendChild(Object.assign(document.createElement("p"),{className:"formmsg"}));
  if($(".hp input",f)&&$(".hp input",f).value){msg.textContent="Thanks!";return}
  var fd=new FormData(f),o={};fd.forEach(function(v,k){if(k==="_gotcha")return;o[k]=o[k]?o[k]+", "+v:v});
  o._subject="AppBharat.com — "+(f.getAttribute("data-form")||"Form")+" submission";o._template="table";o["Page"]=location.href;
  var btn=$("[type=submit]",f);if(btn){btn.disabled=true;btn.dataset.t=btn.textContent;btn.textContent="Sending…"}
  fetch(ep(),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)})
  .then(function(r){return r.json().catch(function(){return{}})}).then(function(){
   msg.className="formmsg ok";msg.textContent=f.getAttribute("data-ok")||"Thank you! We received your message and will reply soon.";f.reset();store.set("ab-lead",true);
   var go=f.getAttribute("data-redirect");if(go)setTimeout(function(){location.href=BASE+go},900);
   if(window.gtag)gtag("event","generate_lead",{form:f.getAttribute("data-form")});
  }).catch(function(){msg.className="formmsg err";msg.textContent="Network error — please try again in a moment."})
  .finally(function(){if(btn){btn.disabled=false;btn.textContent=btn.dataset.t}});
 });
});
/* multi-step forms */
$$("[data-steps]").forEach(function(f){var st=$$(".step",f),bars=$$(".steps span",f),i=0;
 function show(n){i=Math.max(0,Math.min(st.length-1,n));st.forEach(function(s,k){s.classList.toggle("on",k===i)});bars.forEach(function(b,k){b.classList.toggle("on",k<=i)})}
 $$("[data-next]",f).forEach(function(b){b.addEventListener("click",function(){var req=$$("[required]",st[i]).filter(function(x){return!x.checkValidity()});if(req.length){req[0].reportValidity();return}show(i+1)})});
 $$("[data-prev]",f).forEach(function(b){b.addEventListener("click",function(){show(i-1)})});show(0);
 var q=new URLSearchParams(location.search);["budget","platform","type"].forEach(function(k){var v=q.get(k),el=f.elements[k];if(v&&el){if(el.length&&el[0]&&el[0].type==="radio"){$$("input[name="+k+"]",f).forEach(function(r){if(r.value===v)r.checked=true})}else el.value=v}});
 var est=q.get("estimate");if(est&&f.elements["estimate"])f.elements["estimate"].value=est;
});

/* data */
var appsP=null;function apps(){return appsP||(appsP=fetch(BASE+"data/apps.json").then(function(r){return r.json()}))}
function hue(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%360;return h}
var votes=store.get("ab-votes",{});
function card(a){var h=hue(a.name),v=votes[a.id]?1:0;
 return '<article class="card app"><div class="hd"><div class="av" style="background:linear-gradient(135deg,hsl('+h+' 70% 50%),hsl('+((h+40)%360)+' 70% 40%))">'+esc(a.name.charAt(0))+'</div><div><h3>'+esc(a.name)+'</h3><small>'+esc(a.by)+'</small></div></div>'+
 '<p>'+esc(a.desc)+'</p><div class="chips">'+(a.type==="govt"?'<span class="tag gv">Government</span>':'<span class="tag pv">Made in India</span>')+'<span class="tag">'+esc(a.cat)+'</span><span class="tag">'+esc(a.price)+'</span><span class="tag">'+esc(a.platforms.join(" · "))+'</span></div>'+
 '<div class="ft"><a class="btn sm o" href="'+esc(a.url)+'" target="_blank" rel="noopener nofollow">Official site ↗</a><a class="btn sm o" href="https://play.google.com/store/search?q='+encodeURIComponent(a.name)+'&c=apps" target="_blank" rel="noopener nofollow">Play Store</a><button class="up'+(v?" on":"")+'" data-vote="'+a.id+'" aria-label="Upvote '+esc(a.name)+'">▲ '+(v?"Voted":"Upvote")+'</button></div></article>'}
document.addEventListener("click",function(e){var b=e.target.closest("[data-vote]");if(!b)return;var id=b.getAttribute("data-vote");if(votes[id])delete votes[id];else votes[id]=Date.now();store.set("ab-votes",votes);b.classList.toggle("on",!!votes[id]);b.textContent="▲ "+(votes[id]?"Voted":"Upvote")});

/* directory */
var grid=$("#appGrid");
if(grid)apps().then(function(all){
 var type=grid.getAttribute("data-type")||"",q=new URLSearchParams(location.search),state={q:q.get("q")||"",cat:q.get("cat")||"",sort:"az"};
 var list=all.filter(function(a){return!type||a.type===type}),cats=[];list.forEach(function(a){if(cats.indexOf(a.cat)<0)cats.push(a.cat)});cats.sort();
 var cw=$("#catChips");if(cw)cw.innerHTML='<button class="chip" data-cat="">All</button>'+cats.map(function(c){return'<button class="chip" data-cat="'+esc(c)+'">'+esc(c)+'</button>'}).join("");
 var qi=$("#dirQ");if(qi)qi.value=state.q;
 function draw(){var s=state.q.toLowerCase(),r=list.filter(function(a){return(!state.cat||a.cat===state.cat)&&(!s||(a.name+" "+a.by+" "+a.desc+" "+a.tags.join(" ")+" "+a.alt.join(" ")).toLowerCase().indexOf(s)>-1)});
  if(state.sort==="az")r.sort(function(a,b){return a.name.localeCompare(b.name)});if(state.sort==="votes")r.sort(function(a,b){return(votes[b.id]?1:0)-(votes[a.id]?1:0)});if(state.sort==="cat")r.sort(function(a,b){return a.cat.localeCompare(b.cat)||a.name.localeCompare(b.name)});
  grid.innerHTML=r.length?r.map(card).join(""):'<div class="card"><h3>No apps found</h3><p>Try another keyword, or <a href="'+BASE+'submit-app.html">suggest an app</a>.</p></div>';
  var c=$("#dirCount");if(c)c.textContent=r.length+" app"+(r.length===1?"":"s");
  $$("#catChips .chip").forEach(function(x){x.classList.toggle("on",x.getAttribute("data-cat")===state.cat)})}
 if(cw)cw.addEventListener("click",function(e){var b=e.target.closest("[data-cat]");if(b){state.cat=b.getAttribute("data-cat");draw()}});
 if(qi)qi.addEventListener("input",function(){state.q=qi.value;draw()});
 var so=$("#dirSort");if(so)so.addEventListener("change",function(){state.sort=so.value;draw()});
 draw();
});
/* featured on home */
$$("[data-featured]").forEach(function(fe){apps().then(function(all){var ids=fe.getAttribute("data-ids").split(",");fe.innerHTML=ids.map(function(i){return all.filter(function(a){return a.id===i})[0]}).filter(Boolean).map(card).join("")})});
var ad=$("#aotd");if(ad)apps().then(function(all){var d=new Date(),n=Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5),a=all[n%all.length];ad.innerHTML='<span class="kicker">App of the day · '+d.toLocaleDateString("en-IN",{day:"numeric",month:"short"})+'</span>'+card(a)});
/* alternatives */
var alt=$("#altGrid");
if(alt)apps().then(function(all){var map={};all.forEach(function(a){a.alt.forEach(function(g){(map[g]=map[g]||[]).push(a)})});var keys=Object.keys(map).sort(),qi=$("#altQ");
 function draw(){var s=(qi&&qi.value||"").toLowerCase();alt.innerHTML=keys.filter(function(k){return!s||k.toLowerCase().indexOf(s)>-1||map[k].some(function(a){return a.name.toLowerCase().indexOf(s)>-1})}).map(function(k){return'<div class="card"><span class="kicker">Instead of '+esc(k)+'</span><ul class="list check">'+map[k].map(function(a){return'<li><b>'+esc(a.name)+'</b> — <span class="muted">'+esc(a.by)+'</span><br><small class="muted">'+esc(a.desc)+'</small></li>'}).join("")+'</ul></div>'}).join("")||'<div class="card"><p>No match yet. <a href="'+BASE+'submit-app.html">Suggest one</a>.</p></div>'}
 if(qi)qi.addEventListener("input",draw);draw()});
/* compare */
var cmp=$("#cmp");
if(cmp)apps().then(function(all){var sa=$("#cmpA"),sb=$("#cmpB"),opts=all.slice().sort(function(a,b){return a.name.localeCompare(b.name)}).map(function(a){return'<option value="'+a.id+'">'+esc(a.name)+' ('+esc(a.cat)+')</option>'}).join("");sa.innerHTML=sb.innerHTML=opts;
 var q=new URLSearchParams(location.search);sa.value=q.get("a")||"phonepe";sb.value=q.get("b")||"paytm";
 function g(id){return all.filter(function(a){return a.id===id})[0]}
 function draw(){var a=g(sa.value),b=g(sb.value);if(!a||!b)return;var rows=[["Developer","by"],["Category","cat"],["Pricing","price"],["Type",function(x){return x.type==="govt"?"Government":"Private (Made in India)"}],["Platforms",function(x){return x.platforms.join(", ")}],["What it does","desc"],["Good for",function(x){return x.tags.join(", ")}],["Alternative to",function(x){return x.alt.join(", ")||"—"}],["Official site",function(x){return'<a href="'+esc(x.url)+'" target="_blank" rel="noopener nofollow">Visit ↗</a>'}]];
  cmp.innerHTML='<thead><tr><th>Feature</th><th>'+esc(a.name)+'</th><th>'+esc(b.name)+'</th></tr></thead><tbody>'+rows.map(function(r){var f=typeof r[1]==="function"?r[1]:function(x){return esc(x[r[1]])};return'<tr><td>'+r[0]+'</td><td>'+f(a)+'</td><td>'+f(b)+'</td></tr>'}).join("")+'</tbody>';
  history.replaceState(null,"","?a="+a.id+"&b="+b.id)}
 sa.addEventListener("change",draw);sb.addEventListener("change",draw);draw()});
/* site search (Ctrl/Cmd+K) */
var cq=$("#cmdkQ"),cr=$("#cmdkR");
if(cq){var idx=null;function load(){return idx?Promise.resolve(idx):Promise.all([apps(),fetch(BASE+"data/pages.json").then(function(r){return r.json()})]).then(function(x){idx=x[1].concat(x[0].map(function(a){return{t:a.name+" — "+a.cat,u:"apps.html?q="+encodeURIComponent(a.name),k:a.tags.join(" ")+" "+a.desc}}));return idx})}
 cq.addEventListener("input",function(){load().then(function(ix){var s=cq.value.toLowerCase().trim();if(!s){cr.innerHTML="";return}cr.innerHTML=ix.filter(function(i){return(i.t+" "+(i.k||"")).toLowerCase().indexOf(s)>-1}).slice(0,12).map(function(i){return'<li><a href="'+BASE+i.u+'">'+esc(i.t)+'</a></li>'}).join("")||'<li class="muted">No results</li>'})})}
/* hero search -> directory */
$$("form[data-search]").forEach(function(f){f.addEventListener("submit",function(e){e.preventDefault();location.href=BASE+"apps.html?q="+encodeURIComponent(f.q.value)})});

/* news (auto-updated daily; live fallback) */
$$("[data-news]").forEach(function(el){var n=+el.getAttribute("data-news")||8;fetch(BASE+"data/news.json").then(function(r){return r.json()}).then(function(d){var items=(d.items||[]).slice(0,n);if(!items.length&&!el.dataset.fb){el.dataset.fb=1;return fetch("https://api.rss2json.com/v1/api.json?rss_url="+encodeURIComponent("https://news.google.com/rss/search?q=India+app+OR+UPI+when:7d&hl=en-IN&gl=IN&ceid=IN:en")).then(function(r){return r.json()}).then(function(x){el.innerHTML=(x.items||[]).slice(0,n).map(function(i){var t=i.title.replace(/ - [^-]+$/,""),src=(i.title.match(/ - ([^-]+)$/)||[])[1]||"";return'<li><a href="'+esc(i.link)+'" target="_blank" rel="noopener nofollow">'+esc(t)+'</a><br><small>'+esc(src)+(i.pubDate?" · "+esc(new Date(i.pubDate.replace(" ","T")+"Z").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})):"")+'</small></li>'}).join("")||"<li class=\'muted\'>Headlines refresh daily.</li>"})}el.innerHTML=items.length?items.map(function(i){return'<li><a href="'+esc(i.link)+'" target="_blank" rel="noopener nofollow">'+esc(i.title)+'</a><br><small>'+esc(i.source||"")+(i.date?" · "+esc(new Date(i.date).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})):"")+'</small></li>'}).join(""):"<li class='muted'>Headlines refresh daily.</li>";var u=$("[data-news-updated]");if(u&&d.updated)u.textContent=new Date(d.updated).toLocaleString("en-IN")}).catch(function(){el.innerHTML="<li class='muted'>Headlines refresh daily.</li>"})});

/* countdown */
$$("[data-countdown]").forEach(function(el){var t=new Date(el.getAttribute("data-countdown")).getTime();function tick(){var d=Math.max(0,t-Date.now()),p=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60];el.innerHTML=["Days","Hrs","Min","Sec"].map(function(l,i){return'<div><b>'+p[i]+'</b>'+l+'</div>'}).join("")}tick();setInterval(tick,1000)});
/* share */
$$("[data-share]").forEach(function(b){b.addEventListener("click",function(){var d={title:document.title,url:location.href};if(navigator.share)navigator.share(d).catch(function(){});else{try{navigator.clipboard.writeText(location.href);b.textContent="Link copied ✓"}catch(e){}}})});

/* TOOL: app development cost estimator (India) */
var cc=$("#costCalc");
if(cc){var fmt=function(n){return"₹"+Math.round(n).toLocaleString("en-IN")};
 function calc(){var f=cc.elements,base={simple:250000,medium:700000,complex:1800000}[f.complexity.value],plat={one:1,cross:1.3,both:1.75}[f.platform.value],des={template:.85,custom:1,premium:1.3}[f.design.value],team={freelancer:.6,agency:1,premium:1.8}[f.team.value],feat=0;
  $$("input[name=feature]:checked",cc).forEach(function(x){feat+=+x.getAttribute("data-cost")});
  var mid=(base+feat)*plat*des*team,lo=mid*.8,hi=mid*1.25,wk=Math.round((8+feat/60000)*({simple:.7,medium:1,complex:1.7}[f.complexity.value]));
  $("#costOut").textContent=fmt(lo)+" – "+fmt(hi);$("#costUsd").textContent="≈ US$"+Math.round(lo/88).toLocaleString()+" – "+Math.round(hi/88).toLocaleString();$("#costWeeks").textContent=wk+"–"+Math.round(wk*1.4)+" weeks";
  var link=$("#costLead");if(link)link.href=BASE+"build-your-app.html?estimate="+encodeURIComponent(fmt(lo)+" – "+fmt(hi))+"&platform="+f.platform.value}
 cc.addEventListener("input",calc);cc.addEventListener("change",calc);calc()}
/* TOOL: app name generator */
var ng=$("#nameGen");
if(ng){var pre=["Desi","Bharat","Apna","Jaldi","Sab","Mera","Chalo","Seva","Dhan","Gyaan","Swasth","Kisan","Yatra","Bazaar","Sathi","Tez","Ujjwal","Navi","Pragati","Sutra"],suf=["ly","go","hub","kart","pay","mitra","setu","verse","ji","wala","pe","app","zone","box","nest","dost","path","flow","q","x"];
 ng.addEventListener("submit",function(e){e.preventDefault();var k=(ng.kw.value||"").trim().replace(/\s+/g,"");var K=k?k.charAt(0).toUpperCase()+k.slice(1).toLowerCase():"";var out=[];
  for(var i=0;i<12;i++){var p=pre[Math.floor(Math.random()*pre.length)],s=suf[Math.floor(Math.random()*suf.length)];var n=[K?K+s:p+s,K?p+K:p+suf[(i*7)%suf.length]][i%2];if(out.indexOf(n)<0)out.push(n)}
  $("#nameOut").innerHTML=out.map(function(n){return'<span class="chip">'+esc(n)+' <a href="https://www.google.com/search?q=%22'+encodeURIComponent(n)+'%22+app" target="_blank" rel="noopener nofollow" title="Check if taken">🔎</a></span>'}).join("")})}
/* TOOL: app safety check */
var qz=$("#quiz");
if(qz){qz.addEventListener("change",function(){var t=$$("input[type=checkbox]",qz),r=t.filter(function(x){return x.checked}).length,o=$("#quizOut"),lv=r===0?["Low risk signals","No red flags ticked. Still verify the developer and read reviews before installing.","var(--brand2)"]:r<3?["Caution","Some warning signs. Verify the developer on the official website and avoid granting extra permissions.","#c98a00"]:["High risk — do not install","Several classic fraud signals. Do not share OTPs or install. Report suspected fraud at cybercrime.gov.in or call 1930.","#d33"];
  o.innerHTML='<div class="result" style="color:'+lv[2]+'">'+lv[0]+'</div><p>'+r+' of '+t.length+' red flags ticked. '+lv[1]+'</p>'})}
/* TOOL: data usage */
var dc=$("#dataCalc");
if(dc){function dcalc(){var f=dc.elements,mb=f.sd.value*700+f.hd.value*1500+f.music.value*70+f.social.value*150+f.calls.value*270+f.browse.value*60;$("#dataOut").textContent=(mb/1024).toFixed(1)+" GB/day";$("#dataMonth").textContent="≈ "+(mb*30/1024).toFixed(0)+" GB per 30 days"}dc.addEventListener("input",dcalc);dcalc()}
})();
