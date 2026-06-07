import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector(".gallery");
const loaderText = document.querySelector(".loader-text");
const showLoadMoreBtn = document.querySelector(".btn-Load-more");
const galleryInstance = new simpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    fileExt: 'png|jpg|jpeg|gif',
});
export function clearGallery() {
    gallery.innerHTML = "";
}
export function createGallery(images) {
    const markup = generateMarkup(images);
    gallery.innerHTML = markup;
    galleryInstance.refresh();
}
export function renderPosts(data) {
    const images = data.hits ? data.hits : data; 
    const markup = generateMarkup(images);
    
    gallery.insertAdjacentHTML("beforeend", markup);
    galleryInstance.refresh();
}

export function showLoader() {
    if (loaderText) loaderText.classList.add("loader");
}
 
export function hideLoader() {
    if (loaderText) loaderText.classList.remove("loader");
}

export function hideLoadMoreButton(){
    if (showLoadMoreBtn) {
        showLoadMoreBtn.classList.add("hide-load-moreBtn");
    }
}

export function showLoadMoreButton(){
    if (showLoadMoreBtn) {
        showLoadMoreBtn.classList.remove("hide-load-moreBtn");
    }
}

function generateMarkup(images) {
    return images.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
        return `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <ul class="galery-info">
                <li><strong>Likes</strong><br>${likes}</li>
                <li><strong>Views</strong><br>${views}</li>
                <li><strong>Comments</strong><br>${comments}</li>
                <li><strong>Downloads</strong><br>${downloads}</li>
            </ul>
        </li>`;
    }).join("");
}