
import * as renderFunctions from "./js/render-functions.js";

import { getImagesByQuery, loadMore, resetPage, showLoadMoreButton, hideLoadMoreButton } from "./js/pixabay-api.js";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form")
const btnLoadMore = document.querySelector(".btn-Load-more");

// const submitBtn = document.querySelector("button[type='submit']");

let query = "";
 hideLoadMoreButton();
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // btnLoadMore.style.display = "none";
    renderFunctions.clearGallery();
    resetPage();
    hideLoadMoreButton();
    // debugger;
    query = document.querySelector("input[name='search-text']").value.trim();
     if (query.trim() === "") { 
iziToast.error({
    message: 'Please enter a value to search for!',
});
        return;
    }
    renderFunctions.showLoader();
    // debugger;
    try{
        const data = await getImagesByQuery(query)
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                return;
            }
        renderFunctions.createGallery(data.hits)

        if (data.totalHits > 15) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
        }
        
    } catch {
         iziToast.error({
            message: 'An error occurred while fetching images. Please try again later.',
        })
        }
            renderFunctions.hideLoader();
    form.reset()
    
})



btnLoadMore.addEventListener("click", () => {
    loadMore(query);
});





