// const http = require('http')
// const fs = require('fs')
// const port = 3000

// const serve = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     fs.readFile('index.html', (error, data) => {
//         if(error){
//             res.writeHead(404)
//             res.write('Error: File not Found!')
//         }
//         else{
//             res.write(data)
//         }
//         res.end()
//     })
// })

// serve.listen(port, (error) => {
//     if(error){
//         console.log('Encountered an Error: ', error)

//     }
//     else{
//         console.log('Server is listening on port: ', port)
//     }
// })
var express = require('express');
var path = require('path');


var fs = require('fs')
const port = 3000;

var app = express();



app.get('/', (req, res) => {
    //app.engine('html', require('ejs').renderFile);
    res.sendFile('index.html', {root: __dirname})
})
// app.get('/', (req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     fs.readFile('index.html', (error, data) => {
//         if(error){
//             res.writeHead(404)
//             res.write('Error: File not Found!')
//         }
//         else{
//             res.write(data)
//         }
//         res.end()
//     })
// })

app.listen(port, (error) => {
    if(error){
        console.log('Encountered an Error: ', error)

    }
    else{
        console.log('Server is listening on port: ', port)
    }
})