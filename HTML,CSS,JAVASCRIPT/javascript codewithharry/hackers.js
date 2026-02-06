



async function hecker()
{ 
 let div=document.createElement("div")
 div.textContent="INTIALIZING HACKING";
 document.querySelectorAll(".container")[0].appendChild(div)
  let x= await dot()
 
 let div1=document.createElement("div")
 div1.textContent="READING YOUR FILES";
 document.querySelectorAll(".container")[0].appendChild(div1)
  await dot()
 let div2=document.createElement("div")
 div2.textContent="PASSWORD FILES DETECTED";
 document.querySelectorAll(".container")[0].appendChild(div2)
  let x2=await dot()
 let div3=document.createElement("div")
 div3.textContent="SENDING FILES TO SERVER";
 document.querySelectorAll(".container")[0].appendChild(div3)
  let x3=await dot()
 let div4=document.createElement("div")
 div4.textContent="CLEANING UP";
 document.querySelectorAll(".container")[0].appendChild(div4)
  let x4=await dot()









}

async function dot() {
    
    let promise=new Promise((resolve,reject) => {
      
    
    
let d=Math.floor(Math.random()*3)+1




  const u=  setInterval(() => {
        const container = document.querySelectorAll(".container")[0];
        if (container && container.lastElementChild) {
            container.lastElementChild.insertAdjacentText("beforeend", ".");
        }
    }, 500)
    setTimeout( () => {
        clearInterval(u)
    resolve()},d*1000);})
      
await promise
    return ;
}

      
    
    
    

hecker()