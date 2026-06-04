import{s as d,a as f,i}from"./assets/vendor-D0tbaKAu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const m=document.querySelector(".gallery"),u=document.querySelector(".loader-text");let y=new d(".gallery a",{captionDelay:250,fileExt:"png|jpg|jpeg|gif"});function g(o){m.innerHTML=o.map(e=>`
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
        `).join(""),y.refresh()}function p(){u.classList.add("loader")}function c(){u.classList.remove("loader")}const h=f.create({baseURL:"https://pixabay.com/api/",params:{key:"56127983-233044a9880c0570de7cf761a",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40}});function L(o){return h.get("",{params:{q:o}}).then(s=>s.data.hits)}const b=document.querySelector(".form"),q=document.querySelector("button[type='submit']");let l="";q.addEventListener("click",o=>{if(o.preventDefault(),l=document.querySelector("input[name='search-text']").value.trim(),l.trim()===""){i.error({message:"Please enter a value to search for!"});return}p(),L(l).then(e=>{if(c(),e.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e)}).catch(e=>{c(),i.error({message:"An error occurred while fetching images. Please try again later."})}),b.reset()});
//# sourceMappingURL=index.js.map
