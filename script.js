let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2024, 0, 1, 00,00);
let endTime = endDate.getTime();

function countdown(){
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainungTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let ondeDay = 24 * oneHr;

let addZeroes = (num) => (num < 0 ? '0$ {num}': num);

    if(endTime < todayTime){
        document.querySelector(".countdown").innerHTML = '<h1>Countdown Has Expired</h1>';
    } else{
        let daysLeft = Math.floor(remainungTime / ondeDay);
        let hrsLeft = Math.floor((remainungTime % ondeDay) / oneHr);
        let minsLeft = Math.floor((remainungTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainungTime % oneMin) / 1000);

        //console.log(daysLeft, hrsLeft, minsLeft, secsLeft);
        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }
}
let i = setInterval(countdown, 1000);
countdown();