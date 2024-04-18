import{S as u}from"./assets/vendor-4ea312d0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function a(){const t=document.querySelector(".covers"),e=document.querySelectorAll(".covers-picture"),s=()=>{e.forEach(r=>{r.classList.add("js-animation")})},n=()=>{e.forEach(r=>{r.classList.remove("js-animation")})};new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting?s():n()})}).observe(t)}function d(){const t=document.querySelector(".btn-drop-down"),e=document.querySelector(".list-menu-anchors");t.addEventListener("click",function(){e.classList.toggle("visually-hidden")}),document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",function(n){n.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})}const f=({_id:t,avatar_url:e,author:s,review:n})=>`<li class="reviews-list-item swiper-slide" id="${t}">
            <img class="thumbnail" src="${e}" alt="${s}" width="48" height="48" loading="lazy">
            <div class="opinion">
              <h3 class="author">${s}</h3>
              <p class="review">${n.trim()}</p>
            </div>
          </li>`;function p(t){return t.map(f).join("")}a();d();const m="https://portfolio-js.b.goit.study/api/reviews",w=document.querySelector("#review-swiper-list"),v=document.querySelector(".review-btn-prev"),y=document.querySelector(".btn-prev-review"),h=document.querySelector(".review-arrow-prev"),g=document.querySelector(".review-btn-next"),b=document.querySelector(".btn-next-review"),S=document.querySelector(".review-arrow-next"),c=(t,e,s,n)=>{n?(t.disabled=!0,e.style.cursor="not-allowed",e.style.border="1px solid #3B3B3B",s.style.stroke="#3B3B3B"):(t.disabled=!1,e.style.cursor="pointer",e.style.border="1px solid #FAFAFA",s.style.stroke="#FAFAFA")},l=t=>{c(v,y,h,t.isBeginning),c(g,b,S,t.isEnd)};fetch(m).then(t=>{if(!t.ok){const e=document.querySelector(".show-news");throw e.textContent="No reviews found",e.style.textAlign="center",e.style.fontSize="24px",e.style.color="rgba(250, 250, 250, 0.4)",new Error("Network response was not ok.")}return t.json()}).then(t=>{const e=p(t);e||iziToast.error({title:"Error",message:"Sorry, reviews not found.",position:"bottomLeft"}),w.insertAdjacentHTML("beforeend",e);const s=new u("#swiper3",{direction:"horizontal",on:{slideChange:l},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".my-swiper-button-next",prevEl:".my-swiper-button-prev"}});l(s)}).catch(()=>{iziToast.error({title:"Error",message:"Error while fetching reviews from server",position:"bottomLeft"})});
//# sourceMappingURL=commonHelpers.js.map
