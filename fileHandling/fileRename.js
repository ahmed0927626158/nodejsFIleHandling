const fs =require("fs")

getCurrentFiles()

fs.rename("../myFile.txt","../renamedFile.txt",()=>{
    console.log("file is renamed Succussfuly \n")
    getCurrentFiles()
     
})

function getCurrentFiles(){
    console.log("current files \n")
    fs.readdirSync(__dirname).forEach(file=>{
        console.log(file)
    })
}