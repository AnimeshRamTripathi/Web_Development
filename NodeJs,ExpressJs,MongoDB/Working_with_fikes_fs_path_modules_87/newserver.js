// const fs=require("fs")
import fs from "fs"
console.log(fs)

fs.writeFile("Animesh.txt","Animesh is a good boy",()=>
{
    fs.readFile("Animesh.txt",(error,data)=>
    {
        console.log(error,data.toString)
    })
   
})
fs.appendFile("kush.txt","KUSHWA_BHAI",(e,d)=>
    {console.log("pranaam")
        console.log(d)
        
    })
console.log("bye")
