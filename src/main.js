
import * as renderFunctions from "./js/render-functions.js";

import { getImagesByQuery } from "./js/pixabay-api.js";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form")

const submitBtn = document.querySelector("button[type='submit']");
let query = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    renderFunctions.clearGallery();
    // debugger;
    query = document.querySelector("input[name='search-text']").value.trim();
     if (query.trim() === "") { 
iziToast.error({
    message: 'Please enter a value to search for!',
});
        return;
    }
      renderFunctions.showLoader();
    const data = getImagesByQuery(query).then(data => {
        renderFunctions.hideLoader();
        if (data.hits.length === 0) { 
iziToast.error({
    message: 'Sorry, there are no images matching your search query. Please try again!',
});
            return;
        }
        renderFunctions.createGallery(data.hits)
    }).catch(error => {
        renderFunctions.hideLoader();
        iziToast.error({
            message: 'An error occurred while fetching images. Please try again later.',
        });
    });
    form.reset();
})





