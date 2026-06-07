import{s as w,a as b,i as a}from"./assets/vendor-D0tbaKAu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const g=document.querySelector(".gallery"),f=document.querySelector(".loader-text");let q=new w(".gallery a",{captionDelay:250,fileExt:"png|jpg|jpeg|gif"});function $(o){g.innerHTML=o.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
            </a>
            <ul class="galery-info">
            <li>
            likes ${e.likes}
            </li>
            <li>
            views ${e.views}
            </li>
            <li>
            comments ${e.comments}
            </li>
             <li>
            downloads ${e.downloads}
            </li>
        </ul>
        </li>
        `).join(""),q.refresh()}function v(){g.innerHTML=""}function P(){f.classList.add("loader")}function S(){f.classList.remove("loader")}let l=1,d=15;const M=document.querySelector(".gallery"),x=Math.ceil(500/d),B=document.querySelector(".btn-Load-more"),y=b.create({baseURL:"https://pixabay.com/api/",params:{key:"56127983-233044a9880c0570de7cf761a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d}});async function I(o){try{return(await y.get("",{params:{q:o}})).data}catch{throw a.error({message:"Something went wrong with the API request!"}),error}}function u(){h.classList.add("hide-load-moreBtn")}const h=document.querySelector(".btn-Load-more");function H(){h.classList.remove("hide-load-moreBtn")}function O(){l=1}async function j(o){if(l>x)return a.error({position:"topRight",message:"We're sorry, there are no more posts to load"});try{l+=1;const e=await A(o);R(e);const s=document.querySelector(".gallery-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const n=Math.ceil(e.totalHits/d);l>=n&&(u(),a.info({message:"We're sorry, but you've reached the end of search results."})),l>1&&(B.textContent="Fetch more posts")}catch(e){console.log(e)}}async function A(o){try{return(await y.get("",{params:{q:o,page:l,per_page:d}})).data}catch{throw a.error({message:"Something went wrong with the API request!"}),error}}function R(o){const e=o.hits.map(({largeImageURL:s,webformatURL:n,tags:t,likes:r,views:i,comments:p,downloads:L})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-image" src="${n}" alt="${t}" loading="lazy" />
            </a>
            <ul class="galery-info">
            <li>
            likes ${r}
            </li>
            <li>
            views ${i}
            </li>
            <li>
            comments ${p}
            </li>
             <li>
            downloads ${L}
            </li>
        </ul>
        </li>
        `).join("");M.insertAdjacentHTML("beforeend",e)}const m=document.querySelector(".form"),T=document.querySelector(".btn-Load-more");let c="";u();m.addEventListener("submit",async o=>{if(o.preventDefault(),v(),O(),u(),c=document.querySelector("input[name='search-text']").value.trim(),c.trim()===""){a.error({message:"Please enter a value to search for!"});return}P();try{const e=await I(c);if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}$(e.hits),e.totalHits>15?H():u()}catch{a.error({message:"An error occurred while fetching images. Please try again later."})}S(),m.reset()});T.addEventListener("click",()=>{j(c)});
//# sourceMappingURL=index.js.map
