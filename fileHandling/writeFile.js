const fs =require("fs")

const contetntAsync="Wring to the file and replace the first content Asynch"
const contetntSync="Wring to the file and replace the first content Synch"
//  METHOD ONE
fs.writeFile("../myFile.txt",contetntAsync,error=>{
    if(error){
        console.log(error)
    }
})

// METHOD TWO
try {
    fs.writeFileSync("../myFile.txt",contetntSync)
    
} catch (error) {
    console.log(error)
    
}


