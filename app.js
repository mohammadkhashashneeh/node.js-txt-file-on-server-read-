const http = require('http')
const fs = require("fs")
const server = http.createServer((req,res)=>{


    //For HTML page (contactUs)
    // fs.readFile('contactUs.html',(err,data)=>{
    //     if(err){

    //         res.writeHead(500,{"content-type":'text/plain'})
    //         console.log("sorry can't read from the server")
    //     }
    //     else {
    //         res.writeHead(200,{"content-type":"text/html"})
    //         res.end(data)
    //     }
    // })


    // For TXT file with tags (h1)
    fs.readFile('myfile.txt',(err,data)=>{
        if(err){

            res.writeHead(500,{"content-type":'text/plain'})
            console.log("sorry can't read from the server")
        }
        else {
            res.writeHead(200,{"content-type":"text/html"})
            res.end(data)
        }
    })


    // For TXT without any tag 
    // fs.readFile('myfile.txt',(err,data)=>{
    //     if(err){

    //         res.writeHead(500,{"content-type":'text/plain'})
    //         console.log("sorry can't read from the server")
    //     }
    //     else {
    //         res.writeHead(200,{"content-type":"text/plain"})
    //         res.end(data)
    //     }
    // })

    //Write from text File 
    // fs.writeFile("myfile.txt", "TEXT FILE FOR WRITE", (err)=>{
    //     if(err) throw err;
    //     console.log("File Saved");
    // })


});

// 127.0.0.1 // localhost

const thePort = 3000 

const HOST = "127.0.0.1" ;

server.listen(thePort,HOST,()=>{
    console.log(`the server is now running on port # ${thePort} and host ${HOST}`)
})

