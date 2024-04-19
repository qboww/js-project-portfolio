import{S as d,i as m}from"./assets/vendor-824b6900.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function f(){const e=document.querySelector(".covers"),r=document.querySelectorAll(".covers-picture"),t=()=>{r.forEach(s=>{s.classList.add("js-animation")})},n=()=>{r.forEach(s=>{s.classList.remove("js-animation")})};new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting?t():n()})}).observe(e)}function h(){document.querySelector(".header-select").addEventListener("change",r);function e(t){localStorage.setItem("theme",t),document.documentElement.className=t}function r(t){const n=t.currentTarget.value;e(`${n}-theme`)}(function(){const t=localStorage.getItem("theme");e(t||"red-theme")})()}function g(){const e=document.querySelector(".btn-drop-down"),r=document.querySelector(".list-menu-anchors");e.addEventListener("click",function(){r.classList.toggle("visually-hidden")}),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(n){n.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})}const p=({_id:e,avatar_url:r,author:t,review:n})=>`<li class="reviews-list-item swiper-slide" id="${e}">
            <img class="thumbnail" src="${r}" alt="${t}" width="48" height="48" loading="lazy">
            <div class="opinion">
              <h3 class="author">${t}</h3>
              <p class="review">${n.trim()}</p>
            </div>
          </li>`;function v(e){return e.map(p).join("")}const L="https://portfolio-js.b.goit.study/api/reviews",b=document.querySelector("#review-swiper-list"),y=async()=>{try{const e=await fetch(L);if(!e.ok)throw new Error("Network response was not ok.");const r=await e.json(),t=v(r);t||iziToast.error({title:"Error",message:"Sorry, reviews not found.",position:"bottomLeft"}),b.insertAdjacentHTML("beforeend",t);const n=new d("#swiper3",{direction:"horizontal",breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".btn-next-review",prevEl:".btn-prev-review"}})}catch{iziToast.error({title:"Error",message:"Error while fetching reviews from server",position:"bottomLeft"})}},o={form:document.querySelector(".footer-form"),email:document.querySelector(".footer-email-input"),successLabel:document.querySelector(".success-label"),errorLabel:document.querySelector(".error-label"),comments:document.querySelector(".footer-comments-input"),btn:document.querySelector(".footer-send-button")},c={addSuccess(){o.errorLabel.classList.add("visually-hidden"),o.successLabel.classList.remove("visually-hidden"),o.email.classList.remove("input-error"),o.email.classList.add("input-success")},addError(){o.errorLabel.classList.remove("visually-hidden"),o.successLabel.classList.add("visually-hidden"),o.email.classList.add("input-error"),o.email.classList.remove("input-success")},removeBoth(){o.successLabel.classList.add("visually-hidden"),o.errorLabel.classList.add("visually-hidden"),o.email.classList.remove("input-success"),o.email.classList.remove("input-error")}},w={error(){m.error({message:"Please fill out both fields before sending!",messageColor:"#fafafa",backgroundColor:"#e74a3b",theme:"dark",closeOnClick:!0,timeout:3e3})}},a=e=>/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.trim()),E=()=>{a(o.form.elements.email.value)||c.addError()},S=e=>{if(e.preventDefault(),e.currentTarget.elements.email.value.trim()===""||e.currentTarget.elements.comments.value.trim()===""){w.error();return}},T=e=>{e.target.value.length>38&&innerWidth<=375&&(e.target.value=e.target.value.slice(0,36)+"..."),e.target.value.length>27&&innerWidth>375&&innerWidth<1440&&(e.target.value=e.target.value.slice(0,25)+"..."),e.target.value.length>43&&innerWidth>=1440&&(e.target.value=e.target.value.slice(0,41)+"..."),(!o.errorLabel.classList.contains("visually-hidden")||!o.successLabel.classList.contains("visually-hidden"))&&(a(e.target.value)&&c.addSuccess(),a(e.target.value)||c.addError(),e.target.value===""&&c.removeBoth())},q=e=>{e.target.value.length>38&&innerWidth<=375&&(e.target.value=e.target.value.slice(0,36)+"..."),e.target.value.length>27&&innerWidth>375&&innerWidth<1440&&(e.target.value=e.target.value.slice(0,25)+"..."),e.target.value.length>43&&innerWidth>=1440&&(e.target.value=e.target.value.slice(0,41)+"...")};o.btn.addEventListener("click",E);o.form.addEventListener("submit",S);o.email.addEventListener("input",T);o.comments.addEventListener("input",q);function u(){const e=document.querySelector(".menu-box"),r=document.querySelector(".button-menu"),t=document.querySelector(".button-mob-menu");r.addEventListener("click",function(){e.classList.toggle("visually-hidden")}),t.addEventListener("click",function(){e.classList.toggle("visually-hidden")}),document.addEventListener("click",function(n){(n.target.classList.contains("menu-link")||n.target.classList.contains("modal-order-btn"))&&e.classList.add("visually-hidden")})}function k(){const r=document.querySelector(".back-to-top"),t=()=>document.documentElement||document.body;document.addEventListener("scroll",()=>{t().scrollTop>100?r.classList.remove("hidden"):r.classList.add("hidden")});const n=()=>{document.body.scrollIntoView({behavior:"smooth"})};r.addEventListener("click",n);const i=document.querySelector(".progress-bar");document.addEventListener("scroll",()=>{const s=t().scrollTop/(t().scrollHeight-t().clientHeight)*100;i.style.width=`${s}%`,t().scrollTop>100?r.classList.remove("hidden"):r.classList.add("hidden")})}f();h();g();async function P(){await y()}P();u();k();u();
//# sourceMappingURL=commonHelpers.js.map
