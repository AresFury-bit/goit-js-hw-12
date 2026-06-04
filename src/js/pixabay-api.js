
import axios from "axios";

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const axiosInstance = axios.create({
        baseURL: "https://pixabay.com/api/",
        params: {
            key: "56127983-233044a9880c0570de7cf761a",
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    });
export function getImagesByQuery(query, page = 1, per_page = 40) {
   
    const res = axiosInstance.get("", { params: { q: query } }).then(res => {
        return res.data;
    }).catch(error => {
        iziToast.error({
    message: 'Something went wrong with the API request!',
        });
        throw error;
    });
    return res;
}
  
