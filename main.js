async function executeTask() {
    while (true) {

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

        // console.log(`Time remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    } else {
        // const timerDayElement = document.querySelector('.timer_day');
        // timerDayElement.textContent = "Дата уже прошла";
        // document.querySelector.body.classList.toggle('does_time');
    }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

executeTask();
