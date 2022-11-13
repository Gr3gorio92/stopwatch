const start = document.getElementById("start");
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let h = 00;
let m = 00;
let s = 00;
let count = 0;
let isStart = false;

start.addEventListener('click', e=>{
    e.preventDefault();
    isStart = true;
    startButton();
});

stop.addEventListener('click', function () {
    isStart = false;
});

reset.addEventListener('click', ()=>{
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
    h = 0;
    s= 0;
    m = 0;
    count = 0;
    isStart = false;
});

function startButton(){
    console.log('Sono partito')
    if(isStart){
        //inizio a contare i secondi
        count++;
        if(count==100){
            s++;
            count=0;
        }
        if(s==60){
            m++;
            s=0;   
        }
        if(m==60){
            h++;
            m=0;
            s=0;
        }

        let hrString = (h<10) ? '0'+h : h;
        let mString = (m<10) ? '0'+m : m;
        let sString = (s<10) ? '0'+s : s;

        document.getElementById('hour').innerHTML = hrString;
        document.getElementById('minutes').innerHTML = mString;
        document.getElementById('seconds').innerHTML = sString;
        setTimeout(startButton, 10);
    }
}