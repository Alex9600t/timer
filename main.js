// let currentDate = new Date();
// // for (i = 1; true; i++){
// // console.log(currentDate.getFullYear() + ' year');
// // console.log(currentDate.getMonth() + ' month');
// // console.log(currentDate.getDate() + ' day');
// // console.log(currentDate.getHours() + ' hour');
// // console.log(currentDate.getMinutes() + ' min');
// // console.log(currentDate.getSeconds() + ' sec');
// // }

function calculateTime() {
    const inputElement = document.getElementById('inputiddata');
    const inputDate = new Date(inputElement.value);
    const currentDate = new Date();

    if (inputDate > currentDate) {
        const timeDifference = inputDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const timerDayElement = document.querySelector('.timer_day');
        timerDayElement.textContent = days;

        const timerHourElement = document.querySelector('.timer_hour');
        timerHourElement.textContent = hours;

        const timerMinElement = document.querySelector('.timer_min');
        timerMinElement.textContent = minutes;

        const timerSecElement = document.querySelector('.timer_sec');
        timerSecElement.textContent = seconds;

        console.log(`Time remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    } else {
        console.log("Дата уже прошла.");
    }
}


function changeTimerDay() {
    const timerDayElement = document.querySelector('.timer_day');
    timerDayElement.textContent = "10";
}
