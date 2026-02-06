
import fs from "fs/promises"

let a=await fs.readFile("kush.txt")
let b= await fs.appendFile("kush.txt","sorry bhai\n\n\n\n Feel hai bhaii!!")

console.log(a.toString())