const fs=require("fs")

fs.unlink("../myFile.txt",error=>{
    if(error)
    {
        console.log(error)
    }
    console.log("File deleted successfuly")
})