(()=>{"use strict";document.querySelector(".top-menu").addEventListener("click",(e=>{if(e.target.closest("a")&&""===e.target.closest("a").className){e.preventDefault();const t=e.target.closest("a").hash,l=document.querySelector(t).getBoundingClientRect().top;window.scrollBy({top:l,behavior:"smooth"})}})),(()=>{const e=document.querySelector(".header>.callback-btn"),t=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-callback"),o=l.querySelector(".modal-close"),c=document.querySelector(".button-services"),s=()=>{t.style.display="block",screen.width<768?l.style.display="block":(l.style.display="block",(({timing:e,draw:t,duration:l})=>{let o=performance.now();requestAnimationFrame((function c(s){let a=(s-o)/l;a>1&&(a=1);let r=e(a);t(r),a<1&&requestAnimationFrame(c)}))})({duration:500,timing:e=>e,draw(e){l.style.top=25*e+"%"}}))},a=()=>{l.style.display="none",t.style.display="none"};e.addEventListener("click",(e=>{e.preventDefault(),s()})),c.addEventListener("click",(e=>{e.preventDefault(),s()})),o.addEventListener("click",(()=>{a()})),t.addEventListener("click",(()=>{a()}))})(),(()=>{const e=document.querySelector('[name="form-callback"]'),t=e.querySelectorAll('input[name="fio"]'),l=e.querySelectorAll('input[name="tel"]'),o=(e,t,l)=>[e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(t,""),""===e.target.value?e.target.classList.remove("success"):l.test(e.target.value)&&e.target.classList.add("success")}))}))];o(t,/[^а-яА-Я\s]+/,/[а-яА-Я\s]{2,}/gi),o(l,/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,/^.{11}$/)})(),(()=>{const e=document.querySelector('[name="form-callback"]'),t=document.createElement("div");try{if(!e)throw new Error("Верните форму на родину!");e.addEventListener("submit",(l=>{l.preventDefault(),(()=>{const l=e.querySelectorAll('input[type="text"]'),o=new FormData(e),c={};var s;console.log(l),t.textContent="Загрузка ...",e.append(t),t.style.color="#e9bb26",o.forEach(((e,t)=>{c[t]=e})),(e=>{let t=!0;return e.forEach((e=>{e.classList.contains("success")||(t=!1)})),t})(l)?(s=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Contant-type":"application/json"}}).then((e=>e.json()))).then((e=>{l.forEach((e=>{e.value="",e.classList.remove("success")})),t.textContent="Спасибо! Наш манагер с вами Обязательно свяжется!",t.style.color="#00ff0d"})).catch((e=>{t.textContent="Ошибка ...",t.style.color="#ff0000"})):(alert("Данные не валидны!"),t.textContent="")})()}))}catch(e){console.log(e.message)}})(),(()=>{const e=document.querySelector(".top-slider").querySelectorAll(".item");let t,l=0;e.forEach((e=>{let t=e.querySelector(".table");t.style.opacity="1",t.style.visibility="visible"}));const o=()=>{var t,o;(t=e)[o=l].classList.remove("item-active"),t[o].style.display="none",l++,l>=e.length&&(l=0),((e,t,l)=>{e[t].classList.add("item-active"),e[t].style.display="block"})(e,l)};((e=3e3)=>{t=setInterval(o,e)})(3e3)})()})();