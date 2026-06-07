import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://pixabay.com/api/",
    params: {
        key: "56127983-233044a9880c0570de7cf761a",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    }
});
export async function getImagesByQuery(query, page, perPage) {
    try { 
        const res = await axiosInstance.get("", { 
            params: { 
                q: query,
                page: page,
                per_page: perPage
            } 
        });
        return res.data;
    } catch (error) {
        throw error; 
    }
}