
import axios from "axios";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
let page = 1;
let per_page = 15;
const gallery = document.querySelector(".gallery");
const totalPages = Math.ceil(500 / per_page);
const btnLoadMore = document.querySelector(".btn-Load-more");
const axiosInstance = axios.create({
        baseURL: "https://pixabay.com/api/",
        params: {
            key: "56127983-233044a9880c0570de7cf761a",
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page:per_page,
        }
    });
export async function getImagesByQuery(query) {
   
    try { 
        const res = await axiosInstance.get("", { params: { q: query} });
        return res.data;
    } catch {
         iziToast.error({
    message: 'Something went wrong with the API request!',
        });
        throw error;
    }
}
  


export function hideLoadMoreButton(){
    showLoadMoreBtn.classList.add("hide-load-moreBtn");
}


const showLoadMoreBtn = document.querySelector(".btn-Load-more");
export function showLoadMoreButton(){
    showLoadMoreBtn.classList.remove("hide-load-moreBtn");
}





export function resetPage() {
    page = 1;
}





export async function loadMore(query) {
    // const query = document.querySelector("input[name='search-text']").value.trim();
    if (page > totalPages) {
    return iziToast.error({
      position: "topRight",
      message: "We're sorry, there are no more posts to load"
    });
  }

    try {
      page += 1;
    const posts = await fetchPosts(query);
    renderPosts(posts);
        const galleryItem = document.querySelector(".gallery-item");
    if (galleryItem) {
      const cardHeight = galleryItem.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth"  
      });
    }
    
const maxPage = Math.ceil(posts.totalHits / per_page);
    if (page >= maxPage) {
        hideLoadMoreButton();
        iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
    }
    // Replace button text after first request
    if (page > 1) {
      btnLoadMore.textContent = "Fetch more posts";
    }
  } catch (error) {
    console.log(error);
  }
};

async function fetchPosts(query) {
 try { 
     const res = await axiosInstance.get("", {
         params: {
             q: query,
             page: page,
             per_page: per_page,
         }
     });
        return res.data;
    } catch {
         iziToast.error({
    message: 'Something went wrong with the API request!',
        });
        throw error;
    }
}





        

function renderPosts(image) {
  const markup = image.hits
    .map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => {
      return `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <ul class="galery-info">
            <li>
            likes ${likes}
            </li>
            <li>
            views ${views}
            </li>
            <li>
            comments ${comments}
            </li>
             <li>
            downloads ${downloads}
            </li>
        </ul>
        </li>
        `;
    })
    .join("");
  gallery.insertAdjacentHTML("beforeend", markup);
}





// const totalHits = res.hits;
//         const maxPage = Math.ceil(totalHits / per_page);
// if (per_page >= maxPage) {
//             hideLoadMoreButton();
//             iziToast.info({
//     message: 'We re sorry, but you ve reached the end of search results.',
// });
            
//         } else {
//             showLoadMoreButton();
//         }









