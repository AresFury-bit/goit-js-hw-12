import{s as m,a as y,i as a}from"./assets/vendor-D0tbaKAu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const f=document.querySelector(".gallery"),d=document.querySelector(".loader-text");let g=new m(".gallery a",{captionDelay:250,fileExt:"png|jpg|jpeg|gif"});function h(o){f.innerHTML=o.map(e=>`
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
        `).join(""),g.refresh()}function p(){f.innerHTML=""}function L(){d.classList.add("loader")}function u(){d.classList.remove("loader")}const w=y.create({baseURL:"https://pixabay.com/api/",params:{key:"56127983-233044a9880c0570de7cf761a",image_type:"photo",orientation:"horizontal",safesearch:!0}});function b(o){return w.get("",{params:{q:o}}).then(s=>s.data).catch(s=>{throw a.error({message:"Something went wrong with the API request!"}),s})}const i=document.querySelector(".form");document.querySelector("button[type='submit']");let l="";i.addEventListener("submit",o=>{if(o.preventDefault(),p(),l=document.querySelector("input[name='search-text']").value.trim(),l.trim()===""){a.error({message:"Please enter a value to search for!"});return}L(),b(l).then(e=>{if(u(),e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(e.hits)}).catch(e=>{u(),a.error({message:"An error occurred while fetching images. Please try again later."}),i.reset()}),i.reset()});
//# sourceMappingURL=index.js.map
