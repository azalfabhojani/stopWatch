// const msec = document.querySelector('p #misec');
// const sec = document.querySelector('p #sec');
// const min = document.querySelector('p #min');
// const hr = document.querySelector('p #hr');

// const start = document.querySelector('.container #start')

var hrPara = document.getElementById("hr")
var minPara = document.getElementById("min")
var secPara = document.getElementById("sec")
var msecPara = document.getElementById("msec")

var hr = 0
var min = 0
var sec = 0
var msec = 0

var interval;

function timer(){ 
    msec ++
    msecPara.innerHTML = msec
 if(msec == 100){
      sec++
      secPara.innerHTML = sec
      msec = 0
 }else if (sec == 60) {
     min++
     minPara.innerHTML = min
     sec = 0
 }
}

function start(){
     var startTime = document.getElementById("startTime")
     interval = setInterval(  timer ,10);
     startTime. disabled = true
}
function pause (){
    clearInterval (interval)
}

function reset (){
    clearInterval(interval)

    minPara.innerHTML = "00"
    secPara.innerHTML = "00"
    msecPara.innerHTML = "00"
    
    min = 0
    sec = 0
    msec = 0
}


















