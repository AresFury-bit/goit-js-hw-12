import{s as c,a as u,i as d}from"./assets/vendor-BCnp8CzI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=document.querySelector(".gallery"),l=document.querySelector(".loader-text");let m=new c(".gallery-container a",{captionDelay:250,fileExt:"png|jpg|jpeg|gif"});function y(o){f.innerHTML=o.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
            </a>
            <ul class="galery-info">
            <li>
            likes ${t.likes}
            </li>
            <li></li>
            views ${t.views}
            </li>
            <li>
            comments ${t.comments}
            </li>
             <li>
            downloads ${t.downloads}
        </ul>
        </li>
        `).join(""),m.refresh()}function p(){l.classList.add("loader")}function g(){l.classList.remove("loader")}const h=u.create({baseURL:"https://pixabay.com/api",params:{key:"56127983-233044a9880c0570de7cf761a",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40}});function L(o){return h.get("",{params:{q:o}}).then(s=>s.data.hits)}const b=document.querySelector(".form"),q=document.querySelector("button[type='submit']");let i="";q.addEventListener("click",o=>{if(o.preventDefault(),i=document.querySelector("input[name='search-text']").value.trim(),i.trim()===""){d.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(),L(i).then(t=>{g(),y(t)}),b.reset()});
//# sourceMappingURL=index.js.map
