const fs=require("fs")
const addedData=" File Append at the end"
fs.appendFile("../myFile.txt",addedData,error=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("file is added ",fs.readFileSync("../myFile.txt","utf-8"))
    }
})