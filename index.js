import{s as m,a as g,i as s}from"./assets/vendor-D0tbaKAu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const f=document.querySelector(".gallery"),d=document.querySelector(".loader-text");let y=new m(".gallery a",{captionDelay:250,fileExt:"png|jpg|jpeg|gif"});function p(o){f.innerHTML=o.map(r=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
                <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
            </a>
            <ul class="galery-info">
            <li>
            likes ${r.likes}
            </li>
            <li>
            views ${r.views}
            </li>
            <li>
            comments ${r.comments}
            </li>
             <li>
            downloads ${r.downloads}
            </li>
        </ul>
        </li>
        `).join(""),y.refresh()}function h(){f.innerHTML=""}function L(){d.classList.add("loader")}function c(){d.classList.remove("loader")}const w=g.create({baseURL:"https://pixabay.com/api/",params:{key:"56127983-233044a9880c0570de7cf761a",image_type:"photo",orientation:"horizontal",safesearch:!0}});function b(o,r=1,l=40){return w.get("",{params:{q:o}}).then(e=>e.data).catch(e=>{throw s.error({message:"Something went wrong with the API request!"}),e})}const u=document.querySelector(".form");document.querySelector("button[type='submit']");let i="";u.addEventListener("submit",o=>{if(o.preventDefault(),h(),i=document.querySelector("input[name='search-text']").value.trim(),i.trim()===""){s.error({message:"Please enter a value to search for!"});return}L(),b(i).then(r=>{if(c(),r.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(r.hits)}).catch(r=>{c(),s.error({message:"An error occurred while fetching images. Please try again later."})}),u.reset()});
//# sourceMappingURL=index.js.map
