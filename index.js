import{a as p,S as y,i as s}from"./assets/vendor-Cq7ZUixy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",g="53364265-bba438c586e7b8abf4f224af4";function b(o){return p(h,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw new Error(t)})}let L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function v(o){const t=document.querySelector(".gallery"),a=o.map(({webformatURL:n,largeImageURL:e,tags:r,likes:i,views:d,comments:f,downloads:m})=>`
      <a class="gallery-item" href="${e}">
        <div class="photo-card">
          <img src="${n}" alt="${r}" loading="lazy" />
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${i}</p>
            <p class="info-item"><b>Views:</b> ${d}</p>
            <p class="info-item"><b>Comments:</b> ${f}</p>
            <p class="info-item"><b>Downloads:</b> ${m}</p>
          </div>
        </div>
      </a>`).join("");t.insertAdjacentHTML("beforeend",a),L.refresh()}const c=document.querySelector(".form"),w=document.querySelector(".gallery"),l=c.querySelector('input[name="search-text"]');c.addEventListener("submit",S);function S(o){o.preventDefault();const t=l.value.toLowerCase().trim();if(w.innerHTML="",!t){s.warning({message:"Please enter a search query!",position:"topRight"});return}q(t)}function q(o){P(),b(o).then(t=>{if(t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(t.hits),l.value=""}).catch(()=>{s.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{$()})}const u=document.querySelector(".loader");function P(){u.classList.remove("hidden")}function $(){u.classList.add("hidden")}
//# sourceMappingURL=index.js.map
