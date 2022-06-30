//Stream ile output.txt dosyasının içine mesajımızı yazıyoruz.
// var fs = require('fs');
// var data = 'Hello World. My name is Melih';

// var writerStream = fs.createWriteStream('output.txt');
// writerStream.write(data, 'utf-8');
// writerStream.end();

// writerStream.on('finish', function(){
//     console.log('Write completed');
// });

// writerStream.on('error', function(){
//     console.log(err.stack);
// });
// console.log('Program Ended');

//---------------

//output.txt dosyasını zip formatına çevirme işlemi.
// var fs = require("fs");
// var zlib = require('zlib');

// fs.createReadStream('output.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('output.txt.gz'));
  
// console.log("File Compressed.");
