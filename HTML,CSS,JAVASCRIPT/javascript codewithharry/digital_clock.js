const data=
{
    day:"02",
    month:"07",
    year:"2024",
    hour:"23",
    minutes:"59",
    seconds:"55"
    
}
let div=document.createElement("div");
div.innerHTML="DATE:"+data.day+":"+data.month+":"+data.year;
document.querySelectorAll(".container")[0].append(div);
let div0=document.createElement("div");
div0.className="hours"
div0.innerHTML="TIME:"
document.querySelectorAll(".container1")[0].append(div0);

let div2=document.createElement("div");
div2.className="hours"
div2.innerHTML=data.hour+":"
document.querySelectorAll(".container1")[0].append(div2);
let div3=document.createElement("div");
div3.className="minutes"
div3.innerHTML=data.minutes+":"
document.querySelectorAll(".container1")[0].append(div3);
let div1=document.createElement("div");
div1.className="seconds"
document.querySelectorAll(".container1")[0].append(div1);


setInterval(() => {
data.seconds=parseInt(data.seconds)+1
if(parseInt(data.seconds)>=60)
{data.seconds="00"
    data.minutes=parseInt(data.minutes)+1
   
    if(parseInt(data.minutes)>=60)
    {data.minutes="00"
        

        data.hour=parseInt(data.hour)+1
        
        
        if(parseInt(data.hour)>23)
        { 
            data.hour="00"
        }
        a="0";
if(data.seconds>9||data.seconds==0)
a=""
div1.innerHTML=a+(data.seconds);
        div2.innerHTML=a+(data.hour)+":"
        

    }
    a="0";
if(data.minutes>9||data.minutes==0)
a=""
div1.innerHTML=a+(data.seconds);
    div3.innerHTML=a+(data.minutes)+":"
    
    


}
var a="0";
if(data.seconds>9||data.seconds==0)
a=""
div1.innerHTML=a+(data.seconds);


  
}


,1000)