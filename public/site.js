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
  // Editorial service rows: content is revealed automatically as the user scrolls.
  // Keep content visible without JS and for reduced-motion preferences.
  const serviceRows=Array.from(document.querySelectorAll(".service-row"));
  if(serviceRows.length&&!reduce){
    document.documentElement.classList.add("scroll-services-enabled");
    let frame=0;
    const revealServices=()=>{
      frame=0;
      const trigger=window.innerHeight*0.69;
      // Reveal in DOM order. Expansion pushes the next heading below the
      // trigger, producing the sequential NovaPersona-style editorial effect.
      for(const row of serviceRows){
        if(row.classList.contains("is-open"))continue;
        if(row.getBoundingClientRect().top<=trigger){
          row.classList.add("is-open");
          break;
        }
        break;
      }
    };
    const scheduleServices=()=>{
      if(frame)return;
      frame=requestAnimationFrame(revealServices);
    };
    window.addEventListener("scroll",scheduleServices,{passive:true});
    window.addEventListener("resize",scheduleServices,{passive:true});
    scheduleServices();
  }

})();