// function loadscript(src,callback) {
//     let script=document.createElement("script");
//     script.src=src;
//     script.onload=() => callback(script)

//    document.head.append(script)
      
    
    
    
// }
// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",(script) => { alert("SCRIPT IS LOADED");
// alert(script.src);

  
// })
let script=document.createElement("script");
    script.src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js";
   

let promise=new Promise((resolve,reject) => {
    script.onload=() => resolve("HI")
  
  
})
document.head.append(script)
let script1=document.createElement("script");
    script1.src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js";


let promise1=new Promise((resolve,reject) => {
    script1.onload=() => resolve("BYE")
  
  
})
document.head.append(script1)



  

let p3=Promise.all([promise,promise1])
p3.then((s) => {
   console.log(s)
  
}
)




 
    

