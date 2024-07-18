const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const disp = document.getElementById('disp');
const day =document.getElementById('day');
const date = document.getElementById('date');

let interval = null; 
let total = 0;

Timer = ()=>{

    const targetDate = new Date(date.value).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

        let d = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
        let hr = Math.max(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),0);
        let mt = Math.max(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),0);
        let sec = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);

        day.value = d;
        hour.value = hr;
        minute.value = mt;
        second.value = sec;

    if (distance < 0) {
        clearInterval(interval);
        day.value = '0';
        hour.value = '0';
        minute.value = "0";
        second.value = "0";
        disp.innerHTML = "Timer outdated !";
    }
}


start.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(Timer,1000);
    disp.innerHTML = "Time Remaining!";
});

reset.addEventListener('click', ()=>{
    console.log('reset is clicked')
    clearInterval(interval);
        day.value = '0';
        hour.value = '0';
        minute.value = "0";
        second.value = "0";
        disp.innerHTML = "Timer Reseted!";
        total= 0;

})
