import{s as d,a as m,i as a}from"./assets/vendor-D0tbaKAu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const u=document.querySelector(".gallery"),f=document.querySelector(".loader-text");let g=new d(".gallery a",{captionDelay:250,fileExt:"png|jpg|jpeg|gif"});function y(o){u.innerHTML=o.map(e=>`
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
        `).join(""),g.refresh()}function h(){u.innerHTML=""}function p(){f.classList.add("loader")}function L(){f.classList.remove("loader")}const w=m.create({baseURL:"https://pixabay.com/api/",params:{key:"56127983-233044a9880c0570de7cf761a",image_type:"photo",orientation:"horizontal",safesearch:!0}});function b(o){return w.get("",{params:{q:o}}).then(s=>s.data).catch(s=>{throw a.error({message:"Something went wrong with the API request!"}),s})}const c=document.querySelector(".form");document.querySelector("button[type='submit']");let i="";c.addEventListener("submit",o=>{if(o.preventDefault(),h(),i=document.querySelector("input[name='search-text']").value.trim(),i.trim()===""){a.error({message:"Please enter a value to search for!"});return}p();debugger;b(i).then(e=>{if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits)}).catch(e=>{a.error({message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{L(),c.reset()})});
//# sourceMappingURL=index.js.map
