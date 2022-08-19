
    var hours1 = 0
    var hours2 = 0
    var minutes1 = 0
    var minutes2 = 0
    var seconds1 = 0;
    var seconds2 = 0;

const startButton = document.getElementById("start_btn")
var isStarted = 0;



startButton.onclick = () => {
    if (isStarted == 0) {
        startWatch()
        isStarted = 1;
        startButton.innerText="PAUSE"
    }
    else {
        stopWatch()
        isStarted = 0;
        startButton.innerText="RESUME"
    }
}
document.getElementById("reset_btn").onclick = () => {
    resetWatch()
    isStarted = 0;
    startButton.innerText="START"
}

const startWatch = () => {

   
   Watch=setInterval(() => {
       
       seconds2++;
       if (seconds2 > 9) {
           seconds1++;
           seconds2 = 0;
       }
       if (seconds1 * 10 + seconds2 > 59) {
           minutes2++;
           seconds1=0;
           seconds2 = 0;
       }
       if (minutes2 > 9) {
           minutes1++;
           minutes2 = 0;
           seconds1=0;
           seconds2 = 0;
       }
        if (minutes1 * 10 + minutes2 > 59) {
           hours2++;
           minutes1=0;
           minutes2 = 0;
           seconds1=0;
           seconds2 = 0;
       }
       if (hours2 > 9) {
           hours1++;
           hours2 = 0;
           minutes1=0;
           minutes2 = 0;
           seconds1=0;
           seconds2 = 0;
       }
       document.getElementById("showWatch").innerText =  `${hours1}${hours2}:${minutes1}${minutes2}:${seconds1}${seconds2}`
    }, 1000);
}


const stopWatch = () => {
    clearInterval(Watch);
}

const resetWatch = () => {
    hours1 = 0
    hours2 = 0
    minutes1 = 0
    minutes2 = 0
    seconds1 = 0;
    seconds2 = 0;
    clearInterval(Watch);
    document.getElementById("showWatch").innerText = `${hours1}${hours2}:${minutes1}${minutes2}:${seconds1}${seconds2}`
}