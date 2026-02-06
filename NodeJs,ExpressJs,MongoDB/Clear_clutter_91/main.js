import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath="//Users//Shared//Files From d.localized//HTML//Backend//video91"
let files= await fs.readdir(basepath)

 for(const item of files)
 {  let ext=item.split(".")[item.split(".").length-1]
   if(ext!="js"&&ext!="json"&&item.split(".").length>1)
   {
    if(fsn.existsSync(path.join(basepath,ext)))
    {
        //move the files to the directory
        fs.rename(path.join(basepath,item),path.join(basepath,ext,item))

    }
    else{
        fs.mkdir(ext)
        fs.rename(path.join(basepath,item),path.join(basepath,ext,item))


    }
}
    console.log(item)
 }