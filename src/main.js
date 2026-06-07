import * as renderFunctions from "./js/render-functions.js";
import { getImagesByQuery } from "./js/pixabay-api.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const btnLoadMore = document.querySelector(".btn-Load-more");


let page = 1;
const per_page = 15;
const totalPages = Math.ceil(500 / per_page); 
let query = "";


renderFunctions.hideLoadMoreButton();


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    renderFunctions.clearGallery();
    page = 1; 
    renderFunctions.hideLoadMoreButton();
    
    query = document.querySelector("input[name='search-text']").value.trim();
    
    if (query === "") { 
        iziToast.error({ message: 'Please enter a value to search for!' });
        return;
    }
    
    renderFunctions.showLoader();
    
    try {
        const data = await getImagesByQuery(query, page, per_page);
        
        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        }
        
        renderFunctions.createGallery(data.hits);
        if (data.totalHits > per_page) {
            renderFunctions.showLoadMoreButton();
        } else {
            renderFunctions.hideLoadMoreButton();
            iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
        }
        
    } catch (error) {
        iziToast.error({
            message: 'An error occurred while fetching images. Please try again later.',
        });
    } finally {
        renderFunctions.hideLoader();
        form.reset();
    }
});
btnLoadMore.addEventListener("click", async () => {
    if (page >= totalPages) {
        renderFunctions.hideLoadMoreButton();
        return iziToast.error({
            position: "topRight",
            message: "We're sorry, there are no more posts to load"
        });
    }

    renderFunctions.showLoader();
    renderFunctions.hideLoadMoreButton();

    try {
        page += 1;
        
        const data = await getImagesByQuery(query, page, per_page);
        renderFunctions.renderPosts(data);
    
        const galleryItem = document.querySelector(".gallery-item");
        if (galleryItem) {
            const cardHeight = galleryItem.getBoundingClientRect().height;
            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth"  
            });
        }
        const maxPage = Math.ceil(data.totalHits / per_page);
        if (page >= maxPage) {
            renderFunctions.hideLoadMoreButton();
            iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
        } else {
            renderFunctions.showLoadMoreButton();
        }
        
        if (page > 1) {
            btnLoadMore.textContent = "Fetch more posts";
        }
    } catch (error) {
        console.error(error);
        renderFunctions.showLoadMoreButton();
    } finally {
        renderFunctions.hideLoader();
    }
});