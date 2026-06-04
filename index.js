import{s as d,a as m,i as a}from"./assets/vendor-D0tbaKAu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const u=document.querySelector(".gallery"),f=document.querySelector(".loader-text");let y=new d(".gallery a",{captionDelay:250,fileExt:"png|jpg|jpeg|gif"});function g(o){u.innerHTML=o.map(e=>`
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
        `).join(""),y.refresh()}function p(){u.innerHTML=""}function h(){f.classList.add("loader")}function c(){f.classList.remove("loader")}const L=m.create({baseURL:"https://pixabay.com/api/",params:{key:"56127983-233044a9880c0570de7cf761a",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:40}});function b(o){return L.get("",{params:{q:o}}).then(s=>s.data).catch(s=>{a.error({message:s})})}const q=document.querySelector(".form"),v=document.querySelector("button[type='submit']");let l="";v.addEventListener("click",o=>{if(o.preventDefault(),p(),l=document.querySelector("input[name='search-text']").value.trim(),l.trim()===""){a.error({message:"Please enter a value to search for!"});return}h(),b(l).then(e=>{if(c(),e.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e.hits)}).catch(e=>{c(),a.error({message:"An error occurred while fetching images. Please try again later."})}),q.reset()});
//# sourceMappingURL=index.js.map
