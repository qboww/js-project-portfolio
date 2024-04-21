import{S as m,i as p,a as L,A as g}from"./assets/vendor-bc146a52.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();function y(){const e=document.querySelector(".header-select");e.addEventListener("change",r);function o(s){localStorage.setItem("theme",s),document.documentElement.className=s}function r(s){const n=s.currentTarget.value;o(`${n}-theme`)}document.addEventListener("DOMContentLoaded",a);function a(){const s=localStorage.getItem("theme");s!==null&&(e.value=`${s.replace(new RegExp("-theme"),"")}`),o(s||"blue-theme")}}function w(){const e=document.querySelector(".menu-box"),o=document.querySelector(".button-menu"),r=document.querySelector(".button-mob-menu"),a=document.querySelector("body");o.addEventListener("click",function(){e.classList.toggle("visually-hidden"),s()}),r.addEventListener("click",function(){e.classList.toggle("visually-hidden"),s()}),document.addEventListener("click",function(n){(n.target.classList.contains("menu-link")||n.target.classList.contains("modal-order-btn"))&&(e.classList.add("visually-hidden"),s())});function s(){a.classList.toggle("modal-open")}}function S(){const e=document.querySelector(".covers"),o=document.querySelectorAll(".covers-picture"),r=()=>{o.forEach(n=>{n.classList.add("js-animation")})},a=()=>{o.forEach(n=>{n.classList.remove("js-animation")})};new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting?r():a()})}).observe(e)}function E(){const e=document.querySelector(".btn-drop-down"),o=document.querySelector(".list-menu-anchors");e.addEventListener("click",function(){o.classList.toggle("visually-hidden")}),document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(a){a.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})}const k=({_id:e,avatar_url:o,author:r,review:a})=>`<li class="reviews-list-item swiper-slide" id="${e}">
            <img class="thumbnail" src="${o}" alt="${r}" width="48" height="48" loading="lazy">
            <div class="opinion">
              <h3 class="author">${r}</h3>
              <p class="review">${a.trim()}</p>
            </div>
          </li>`;function q(e){return e.map(k).join("")}const B="https://portfolio-js.b.goit.study/api/reviews",O=document.querySelector("#review-swiper-list"),T=async()=>{try{const e=await fetch(B);if(!e.ok)throw new Error("Network response was not ok.");const o=await e.json(),r=q(o);r||iziToast.error({title:"Error",message:"Sorry, reviews not found.",position:"bottomLeft"}),O.insertAdjacentHTML("beforeend",r);const a=new m("#swiper3",{direction:"horizontal",breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".btn-next-review",prevEl:".btn-prev-review"}})}catch{iziToast.error({title:"Error",message:"Error while fetching reviews from server",position:"bottomLeft"})}},t={form:document.querySelector(".footer-form"),email:document.querySelector(".footer-email-input"),successLabel:document.querySelector(".success-label"),errorLabel:document.querySelector(".error-label"),comments:document.querySelector(".footer-comments-input"),btn:document.querySelector(".footer-send-button"),modalBackdrop:document.querySelector(".footer-modal-backdrop"),modalOverlay:document.querySelector(".footer-modal-overlay")},l={addError(){t.successLabel.classList.add("visually-hidden"),t.errorLabel.classList.remove("visually-hidden"),t.email.classList.add("input-error"),t.email.classList.remove("input-success"),t.errorLabel.classList.add("is-open"),t.successLabel.classList.remove("is-open")},addSuccess(){t.errorLabel.classList.add("visually-hidden"),t.successLabel.classList.remove("visually-hidden"),t.email.classList.remove("input-error"),t.email.classList.add("input-success"),t.successLabel.classList.add("is-open"),t.errorLabel.classList.remove("is-open")},removeBoth(){t.email.classList.remove("input-success"),t.email.classList.remove("input-error"),t.successLabel.classList.remove("is-open"),t.errorLabel.classList.remove("is-open"),setTimeout(()=>{t.successLabel.classList.add("visually-hidden"),t.errorLabel.classList.add("visually-hidden")},250)}},c={close(){t.modalOverlay.classList.remove("is-open"),t.modalBackdrop.classList.remove("is-open"),setTimeout(()=>{t.modalBackdrop.classList.add("visually-hidden"),t.modalOverlay.classList.add("visually-hidden")},500),t.modalOverlay.children.close_button.removeEventListener("click",c.close),t.modalBackdrop.removeEventListener("click",f),document.body.removeEventListener("keydown",h)},open(){t.modalBackdrop.classList.remove("visually-hidden"),t.modalOverlay.classList.remove("visually-hidden"),t.modalBackdrop.classList.add("is-open"),t.modalOverlay.classList.add("is-open"),t.modalOverlay.children.close_button.addEventListener("click",c.close),t.modalBackdrop.addEventListener("click",f),document.body.addEventListener("keydown",h)}},v={showError(){p.error({message:"Please fill out both fields before sending!",messageColor:"#fafafa",backgroundColor:"#e74a3b",theme:"dark",closeOnClick:!0,timeout:3e3})},showBadRequest(){p.error({message:"Something went wrong. Please try again!",messageColor:"#fafafa",backgroundColor:"#e74a3b",theme:"dark",closeOnClick:!0,timeout:3e3})}},d={email:null,comments:null};if(localStorage.hasOwnProperty("userSubmitData")){const e=JSON.parse(localStorage.getItem("userSubmitData"));t.form.elements.email.value=e.email,t.form.elements.comments.value=e.comments,d.email=e.email,d.comments=e.comments}const b=()=>{localStorage.setItem("userSubmitData",JSON.stringify(d))},P=()=>{localStorage.removeItem("userSubmitData")},u=e=>/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.trim()),C=e=>{const o="https://portfolio-js.b.goit.study/api",r="/requests",a=e;return L.post(`${o}${r}`,a)},D=()=>{u(t.form.elements.email.value)||l.addError()},f=e=>{e.target===e.currentTarget&&c.close()},h=e=>{e.key==="Escape"&&c.close()},x=async e=>{try{e.preventDefault();const o=e.currentTarget;if(o.elements.email.value.trim()===""||o.elements.comments.value.trim()===""){v.showError();return}const r={email:o.elements.email.value.trim(),comment:o.elements.comments.value.trim()},a=await C(r);t.modalOverlay.children.title.textContent=a.data.title,t.modalOverlay.children.message.textContent=a.data.message,c.open(),l.removeBoth(),o.reset(),P()}catch(o){console.log(o),v.showBadRequest()}},A=e=>{d.email=e.target.value,b(),e.target.value.length>27&&innerWidth<=375&&(e.target.value=e.target.value.slice(0,25)+"..."),e.target.value.length>19&&innerWidth>375&&innerWidth<1440&&(e.target.value=e.target.value.slice(0,17)+"..."),e.target.value.length>31&&innerWidth>=1440&&(e.target.value=e.target.value.slice(0,29)+"..."),(!t.errorLabel.classList.contains("visually-hidden")||!t.successLabel.classList.contains("visually-hidden"))&&(u(e.target.value)&&l.addSuccess(),u(e.target.value)||l.addError(),e.target.value===""&&l.removeBoth())},I=e=>{d.comments=e.target.value,b(),e.target.value.length>27&&innerWidth<=375&&(e.target.value=e.target.value.slice(0,25)+"..."),e.target.value.length>19&&innerWidth>375&&innerWidth<1440&&(e.target.value=e.target.value.slice(0,17)+"..."),e.target.value.length>31&&innerWidth>=1440&&(e.target.value=e.target.value.slice(0,29)+"...")};t.btn.addEventListener("click",D);t.form.addEventListener("submit",x);t.email.addEventListener("input",A);t.comments.addEventListener("input",I);function z(){const o=document.querySelector(".back-to-top"),r=()=>document.documentElement||document.body;document.addEventListener("scroll",()=>{r().scrollTop>100?o.classList.remove("hidden"):o.classList.add("hidden")});const a=()=>{document.body.scrollIntoView({behavior:"smooth"})};o.addEventListener("click",a);const s=document.querySelector(".progress-bar");document.addEventListener("scroll",()=>{const n=r().scrollTop/(r().scrollHeight-r().clientHeight)*100;s.style.width=`${n}%`,r().scrollTop>100?o.classList.remove("hidden"):o.classList.add("hidden")})}function j(){new g(".about-me-secondlist",{showMultiple:!0}).open(0),new m(".about-me-swiper-container",{centeredSlides:!1,grabCursor:!0,loop:!0,keyboard:{enabled:!0},mousewheel:!0,touch:!0,navigation:{nextEl:".swiper-button-next"},slidesPerView:2,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}})}const $=()=>{new m(".projects-swiper",{direction:"horizontal",navigation:{nextEl:".projects-next-button",prevEl:".projects-previous-button"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0,tabKeys:!0},grabCursor:!0,spaceBetween:50})};function M(){new g(".faq-list",{showMultiple:!0}).open(0)}y();w();S();E();async function V(){await T()}V();z();j();$();M();
//# sourceMappingURL=commonHelpers.js.map
