import axios from "axios";
// Описаний у документації

import * as renderFunctions from "./js/render-functions";

import { getImagesByQuery } from "./js/pixabay-api";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form")

const submitBtn = document.querySelector("button[type='submit']");
let query = "";

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // debugger;
    query = document.querySelector("input[name='search-text']").value.trim();
     if (query.trim() === "") { 
iziToast.error({
    message: 'Sorry, there are no images matching your search query. Please try again!',
});
        return;
    }
      renderFunctions.showLoader();
    const data = getImagesByQuery(query).then(data => {
        renderFunctions.hideLoader();
        renderFunctions.createGallery(data)
    });
    form.reset();
})





