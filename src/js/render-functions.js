import simpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loaderText = document.querySelector(".loader-text");


// Шукаємо посилання <a> всередині нашого контейнера
let galleryInstance = new simpleLightbox('.gallery a', {
    captionDelay: 250,
    fileExt: 'png|jpg|jpeg|gif', /* Чітко вказуємо дозволені розширення файлів */
});

export function createGallery(images) {
    
    gallery.innerHTML = images.map(image => {
        return `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            </a>
            <ul class="galery-info">
            <li>
            likes ${image.likes}
            </li>
            <li>
            views ${image.views}
            </li>
            <li>
            comments ${image.comments}
            </li>
             <li>
            downloads ${image.downloads}
            </li>
        </ul>
        </li>
        `
    }).join("");

    galleryInstance.refresh();
}


export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loaderText.classList.add("loader");
}
 
export function hideLoader() {
     loaderText.classList.remove("loader");
}


