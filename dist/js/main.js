(()=>{"use strict";document.querySelector(".top-menu").addEventListener("click",(e=>{if(e.target.closest("a")&&""===e.target.closest("a").className){e.preventDefault();const t=e.target.closest("a").hash,l=document.querySelector(t).getBoundingClientRect().top;window.scrollBy({top:l,behavior:"smooth"})}})),(()=>{const e=document.querySelector(".header"),t=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-callback"),o=l.querySelector(".modal-close"),n=document.querySelector(".button-services"),c=()=>{t.style.display="block",screen.width<768?l.style.display="block":(l.style.display="block",(({timing:e,draw:t,duration:l})=>{let o=performance.now();requestAnimationFrame((function n(c){let r=(c-o)/l;r>1&&(r=1);let a=e(r);t(a),r<1&&requestAnimationFrame(n)}))})({duration:500,timing:e=>e,draw(e){l.style.top=25*e+"%"}}))},r=()=>{l.style.display="none",t.style.display="none"};e.addEventListener("click",(e=>{e.preventDefault(),c()})),n.addEventListener("click",(e=>{e.preventDefault(),c()})),o.addEventListener("click",(()=>{r()})),t.addEventListener("click",(()=>{r()}))})()})();