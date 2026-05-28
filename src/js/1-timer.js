
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const buttonStart = document.querySelector("button[data-start]");
buttonStart.disabled = true;
const input = document.querySelector("input#datetime-picker");
const dataDays = document.querySelector("span[data-days]");
const dataHours = document.querySelector("span[data-hours]");
const dataMinutes = document.querySelector("span[data-minutes]");
const dataSeconds = document.querySelector("span[data-seconds]");
let userSelectedDate;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

     const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= Date.now()) {
      iziToast.show({
    title: 'Error',
    message: '"Please choose a date in the future"'
});
      buttonStart.disabled = true;
      userSelectedDate = null;
    } else {
      buttonStart.disabled = false;
    }
  },
    };
    

flatpickr("#datetime-picker", options);

buttonStart.addEventListener("click", () => {

  const currentTime = Date.now();
    // debugger;
      input.disabled = true;
      buttonStart.disabled = true;
      const timerId = setInterval(() => { 
        // debugger;
        const deltaTime = userSelectedDate - currentTime;
        userSelectedDate -= 1000;
        const timeStr = convertMs(deltaTime);
        function addLeadingZero(value){
          return String(value).padStart(2, '0');
        }
        dataDays.textContent = addLeadingZero(timeStr.days); 
        dataHours.textContent = addLeadingZero(timeStr.hours); 
        dataMinutes.textContent = addLeadingZero(timeStr.minutes); 
        dataSeconds.textContent = addLeadingZero(timeStr.seconds); 
        if (deltaTime <= 1000) { 
          clearInterval(timerId);
          buttonStart.disabled = false;
          input.disabled = false;
        }
      }, 1000);
});








  
