const fs = require('fs');

const readStream = fs.createReadStream('./docs/file.txt', {encoding: 'utf8'})

const writeStream = fs.createWriteStream('./docs/blog.txt');

// readStream.on('data', (chunk)=>{
//     console.log('------ NEW CHUNK ------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

// Piping
// readStream.pipe(writeStream)
