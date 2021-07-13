const clock = document.querySelector("h2#clock");


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//함수를 일정 시간(ms)마다 호출
setInterval(getClock, 1000);


//일정 시간(ms) 뒤에 함수 호출
//setTimeout()

//"1".padStart(2, "0");
//"01"
//padStart -> 문자열의 길이를 맞춰줌

//"1".padEnd(2, "0");
//"10"