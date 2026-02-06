function random(number) {
    

let d=Math.random();
if(d<0.1)
document.querySelectorAll(".box")[number].style.backgroundColor="red"
if(d>=0.1&&d<=0.2)
document.querySelectorAll(".box")[number].style.backgroundColor="yellow"
if(d>0.2&&d<=0.3)
document.querySelectorAll(".box")[number].style.backgroundColor="green"
if(d>0.3&&d<=0.4)
document.querySelectorAll(".box")[number].style.backgroundColor="blue"
if(d>0.4&&d<=0.5)
document.querySelectorAll(".box")[number].style.backgroundColor="purple"
if(d>0.5)
document.querySelectorAll(".box")[number].style.backgroundColor="black"
}
for(let i=0;i<document.querySelectorAll(".box").length;i++)
{
    
    random(i);
}





