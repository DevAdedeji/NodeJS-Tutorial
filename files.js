const fs = require('fs');

// Reading files
// fs.readFile('./docs/file.txt', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log("Last line")

// Writing files
// fs.writeFile('./docs/file.txt', 'Hello World', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('File was written');
// })

// fs.writeFile('./docs/file1.txt', 'Hello World', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('File was written');
// })

// Directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err, data)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('Folder created')
//     })
// } else {
//     fs.rmdir('./assets', (err, data)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("Folder deleted")
//     })
// }


// Deleting files
// if(fs.existsSync('./docs/file1.txt')){
//     fs.unlink('./docs/file1.txt', (err,data)=>{
//         if(err){
//                 console.log(err)
//             }
//             console.log('File deleted')
//     })
// }