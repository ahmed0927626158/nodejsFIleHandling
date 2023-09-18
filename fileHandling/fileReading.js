const { error } = require("console")
const fs=require("fs")

fs.readFile("../myFile.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error)
        return;
    }
    console.log(data)
})

try {
    const data=fs.readFileSync("../myFile.txt","utf-8")
    console.log(data)
} catch (error) {
    console.log(error)
    
}