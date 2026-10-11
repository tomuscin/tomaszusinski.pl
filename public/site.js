(function(){
  "use strict";
  const $=(s,base=document)=>base.querySelector(s);
  const nav=$(".mobile-nav"),toggle=$(".menu-button");
  function setMenu(open){
    if(!nav||!toggle)return;
    nav.hidden=!open;
    toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"Close menu":"Open menu");
  }
  if(toggle&&nav){
    toggle.addEventListener("click",()=>setMenu(toggle.getAttribute("aria-expanded")!=="true"));
    nav.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
    document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
    document.addEventListener("click",e=>{if(!e.target.closest(".header"))setMenu(false)});
    window.addEventListener("resize",()=>{if(window.innerWidth>900)setMenu(false)});
  }
  const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if("IntersectionObserver" in window&&!reduce){
    document.documentElement.classList.add("js-reveal");
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}
    },{rootMargin:"0px 0px -32px 0px",threshold:.06});
    document.querySelectorAll(".reveal").forEach(node=>observer.observe(node));
  }
  const scroller=$(".awards-scroller");
  if(scroller){
    const previous=$(".award-prev"),next=$(".award-next");
    const one=()=>Math.min(245,scroller.clientWidth*.85);
    previous&&previous.addEventListener("click",()=>scroller.scrollBy({left:-one(),behavior:reduce?"auto":"smooth"}));
    next&&next.addEventListener("click",()=>scroller.scrollBy({left:one(),behavior:reduce?"auto":"smooth"}));
    // Automatically advance only on larger non-touch displays.
    let paused=false;
    const auto=window.setInterval(()=>{
      if(paused||reduce||document.hidden||window.innerWidth<750)return;
      const end=scroller.scrollWidth-scroller.clientWidth;
      if(end<8)return;
      scroller.scrollTo({left:scroller.scrollLeft>=end-4?0:Math.min(end,scroller.scrollLeft+245),behavior:"smooth"});
    },4800);
    ["pointerenter","focusin","touchstart"].forEach(evt=>scroller.addEventListener(evt,()=>{paused=true},{passive:true}));
    ["pointerleave","focusout","touchend"].forEach(evt=>scroller.addEventListener(evt,()=>{paused=false},{passive:true}));
    window.addEventListener("pagehide",()=>window.clearInterval(auto),{once:true});
  }
  // Keep accordions keyboard-accessible via native <details>, and avoid opening multiple long descriptions.
  document.querySelectorAll("details.service").forEach(details=>{
    details.addEventListener("toggle",()=>{
      if(!details.open)return;
      document.querySelectorAll("details.service[open]").forEach(other=>{if(other!==details)other.open=false;});
    });
  });
})();