// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const btnSubmit = document.querySelector("button[type='submit']");
const radio = document.querySelector("input[type='radio']");
const delay = document.querySelector("input[type='number']");






btnSubmit.addEventListener("click", e => {
    e.preventDefault();
    const selected = document.querySelector("input[type='radio']:checked");
    const promise = new Promise((resolve, reject) => {

        if (selected.value === "fulfilled") {
            resolve();
        } else {
            reject();
        }

        
    })

    promise.then(() => {
        setTimeout(() => {
            iziToast.success({
    title: '✅',
    message: `Fulfilled promise in ${delay.value}ms`,
});
        }, delay.value);
           
        }).catch(() => {
            setTimeout(() => { 
                iziToast.error({
    title: '❌',
    message: `Rejected promise in ${delay.value}ms`,
});
            },delay.value);
           

        });


});