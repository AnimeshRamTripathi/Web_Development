function createcard(title,cname,views,monthsold,duration,thumbnail) {
    let div=document.createElement('div')
    div.className="card"
    document.querySelectorAll(".container")[0].append((div))
   let img=document.createElement('img')
   img.className="image"
   img.src=thumbnail
   let len=document.querySelectorAll(".container")[0].childNodes.length
   document.querySelectorAll(".container")[0].childNodes[len-1].appendChild(img)
   let tm=document.createElement('div')
   tm.className="time"
   tm.textContent=duration
   document.querySelectorAll(".container")[0].childNodes[len-1].appendChild(tm)
   let tit=document.createElement('div')
   tit.className="title"
   tit.textContent=title
   document.querySelectorAll(".container")[0].childNodes[len-1].appendChild(tit)
   let cnam=document.createElement('div')
   cnam.className="channelname"
   cnam.textContent=cname+"  ○"
   document.querySelectorAll(".container")[0].childNodes[len-1].appendChild(cnam)
   let e=view(views)
   let vw=document.createElement('div')
   vw.className="vws"
   vw.textContent=e+"  ○"
   document.querySelectorAll(".container")[0].childNodes[len-1].appendChild(vw)
   let ym=document.createElement('div')
   ym.className="yms"
ym.textContent=monthsold+"months ago"
   document.querySelectorAll(".container")[0].childNodes[len-1].appendChild(ym)

   



 

   
  
   
  





    
}
function view(views) {
    let i=Number(views)
   
    let count=0
 
    while(i>=1)
    {
        count=count+1;
        i=i/10
        console.log(i)
    }
    console.log(count)
    if(count>='4'&&count<=6)
    {let z=views/1000+'K'
    return z
    }
    else if(count>6)
    {let f=views/1000+'M'
    return f
    }
    return views
    
}
createcard("Basic Structure Of a Html Website | SIGMA web development #1 | CodeWithHarry","CodeWithHarry",300000,3,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw" )
createcard("Installing VS code | SIGMA web development #2 | CodeWithHarry","CodeWithHarry",3000,3,"31:23","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_sVj4Cw273EE2dnVxk_GeeDocQ" )

