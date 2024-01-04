let time=document.querySelector(".timeShow h1");

let millyseconds =0 , sec = 0; min =0; hr =0 ;
let timeRes;

document.querySelector("#start").onclick=()=>{
    timeRes = setInterval(updateTime , 10 );
}

function updateTime(){
    millyseconds = millyseconds +10;
    if(millyseconds == 1000 ){
        sec +=1;
        millyseconds=0;

        if(sec == 60 ){
            min +=1;
            sec = 0;
            if(min == 60){
                hr +=1;
                min = 0;
            }
        }
    }

    let ms,s,m,h;

    if(hr <10){
        h="0"+hr;
    }else{
        h =hr ;
    }

    if (min <10) {
        m = "0"+min;
    } else {
        m=min;
    }

    if (sec <10) {
        s="0"+sec;
    } else {
        s=sec;
    }
    if (millyseconds > 10) {
        ms = "0"+millyseconds;
    }else if (millyseconds >100){
ms = "00" +millyseconds;
    }else{
        ms = millyseconds;
    }

    time.innerHTML = `${h} : ${m} : ${s} : ${ms} ` 
}

document.querySelector("#stop").onclick=()=>{
    clearInterval(timeRes);
}

document.querySelector("#reset").onclick=()=>{
    clearInterval(timeRes);
    millyseconds = 0;
    sec = 0;
    min = 0;
    hr = 0;
    time.innerHTML ="00 : 00 : 00 : 0000";
}