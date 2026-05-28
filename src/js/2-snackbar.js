// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const btnSubmit = document.querySelector("button[type='submit']");
const radio = document.querySelector("input[type='radio']");
const delay = document.querySelector("input[type='number']");

btnSubmit.addEventListener("click", e => {
    e.preventDefault();
    // debugger;
    const dalayValue = delay.value;
    const selected = document.querySelector("input[type='radio']:checked");
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if (selected.value === "fulfilled") {
                resolve(dalayValue);
            } else {
                reject(dalayValue);
            }
        }, dalayValue);
        
    })

    promise.then((value) => {
        iziToast.success({
            title: '✅',
            message: `Fulfilled promise in ${value}ms`,
        });
    }).catch((value) => {
        iziToast.error({
            title: '❌',
            message: `Rejected promise in ${value}ms`,
        });
    });
});