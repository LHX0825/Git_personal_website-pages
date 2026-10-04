document.addEventListener("DOMContentLoaded",function(){
var c=document.getElementById("stars");for(var i=0;i<120;i++){var s=document.createElement("div");s.className="star";var sz=Math.random()*2.8+0.4;s.style.cssText="width:"+sz+"px;height:"+sz+"px;left:"+Math.random()*100+"%;top:"+Math.random()*100+"%;--dur:"+(2+Math.random()*3)+"s;--dl:"+Math.random()*5+"s;--lo:"+(0.08+Math.random()*0.2)+";--hi:"+(0.5+Math.random()*0.5)+";--sc:"+(1+Math.random()*1.5);c.appendChild(s)}
var p=document.getElementById("petals");var em=["\ud83c\udf38","\ud83d\udcae","\ud83c\udf3a","\u273f","\ud83c\udf43","\ud83c\udf37","\ud83e\udebb"];for(var j=0;j<16;j++){var d=document.createElement("span");d.className="petal";d.textContent=em[Math.floor(Math.random()*em.length)];d.style.cssText="left:"+Math.random()*100+"%;font-size:"+(0.6+Math.random()*1.4)+"em;animation-duration:"+(7+Math.random()*15)+"s;animation-delay:"+Math.random()*14+"s";p.appendChild(d)}
var btn=document.getElementById("themeBtn");if(!btn)return;var ti=btn.querySelector(".ico use");function setTheme(dark){document.documentElement.classList.toggle("dark",dark);if(ti)ti.setAttribute("href",dark?"#ico-sun":"#ico-moon")}if(window.matchMedia("(prefers-color-scheme:dark)").matches)setTheme(true);btn.addEventListener("click",function(){setTheme(!document.documentElement.classList.contains("dark"))});
var page=document.body.dataset.page;document.querySelectorAll(".nav-links a").forEach(function(a){if(a.dataset.page===page)a.classList.add("active")});
var layer=document.getElementById("danmakuLayer");if(!layer)return;var laneH=48,lanes=Math.max(3,Math.floor((window.innerHeight-100)/laneH));var activeLanes=new Array(lanes).fill(false),danmakuQueue=[];
function loadChatters(){try{var raw=localStorage.getItem("ff_chats");if(raw)danmakuQueue=JSON.parse(raw).slice(0,30)}catch(e){}if(danmakuQueue.length===0)danmakuQueue=[{av:"\ud83c\udf0c",text:'歡迎來到星塵小站 ✨',tag:"\ud83d\udcac"},{av:"\ud83d\udcbb",text:'寫代碼 · 看動漫 · 偶爾旅行',tag:"\ud83d\udcbb"},{av:"\ud83c\udfb8",text:'一起在星空下漫步吧~',tag:"\ud83c\udfb5"}]}
function findFreeLane(){var free=[];for(var i=0;i<lanes;i++)if(!activeLanes[i])free.push(i);return free.length?free[Math.floor(Math.random()*free.length)]:-1}
function spawnDanmaku(){if(danmakuQueue.length===0)loadChatters();var idx=Math.floor(Math.random()*danmakuQueue.length),chat=danmakuQueue[idx],lane=findFreeLane();if(lane<0)return;activeLanes[lane]=true;var el=document.createElement("div");el.className="danmaku-item";var spd=14+Math.random()*22;el.style.setProperty("--spd",spd+"s");el.style.top=(80+lane*laneH)+"px";var text=chat.text.length>36?chat.text.slice(0,34)+"..":chat.text;el.innerHTML='<span class="dm-av">'+(chat.av||"\ud83d\udcac")+'</span><span class="dm-tag">'+(chat.tag||"")+'</span><span class="dm-text">'+text+'</span>';layer.appendChild(el);setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);activeLanes[lane]=false},spd*1000+500)}
loadChatters();for(var i=0;i<Math.min(lanes,danmakuQueue.length);i++){setTimeout(function(){spawnDanmaku()},i*600+Math.random()*400)}setInterval(function(){spawnDanmaku()},2500+Math.random()*3000);setInterval(function(){try{var raw=localStorage.getItem("ff_chats");if(raw)danmakuQueue=JSON.parse(raw).slice(0,30)}catch(e){}},8000);
});
/* === music player toggle === */
var musicOpen = false;
function toggleMusic() {
  musicOpen = !musicOpen;
  var p = document.getElementById("musicPanel");
  var b = document.getElementById("musicToggle");
  if (!p || !b) return;
  if (musicOpen) { p.classList.add("open"); b.classList.add("playing"); }
  else { p.classList.remove("open"); b.classList.remove("playing"); }
}

/* === back to top === */
window.addEventListener("scroll", function() {
  var b = document.getElementById("backTop");
  if (!b) return;
  if (window.scrollY > 400) b.classList.add("visible");
  else b.classList.remove("visible");
});
