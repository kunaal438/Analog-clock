const hourHand = document.querySelector('[data-hour-hand]');
const minHand = document.querySelector('[data-min-hand');
const secHand = document.querySelector('[data-sec-hand');

const showTime = () => {
    let time = new Date();

    let secRatio = time.getSeconds() / 60;
    let minRatio = (secRatio + time.getMinutes()) / 60;
    let hourRatio = (minRatio + time.getHours()) / 12;

    setRotation(secHand, secRatio);
    setRotation(minHand, minRatio);
    setRotation(hourHand, hourRatio);

}

const setRotation = (element, rotateValue) => {
    element.style.setProperty('--rotation', rotateValue * 360);
}

setInterval(showTime, 1000);

showTime();