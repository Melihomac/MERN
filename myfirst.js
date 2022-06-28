//const { MongoClient } = require("mongodb");

//---------------

//HTTP server oluşturma ve bunu tarayıcıda görmek
// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(9090);

//---------------

//Aynı klasör içinde oluşturulan html dosyasını okuma ve localhostta gösterme
// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req, res) {
//     fs.readFile('demofile1.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(9090);

//---------------

//Aynı klasör içine txt dosyası oluşturma ve içine yazma
// var fs = require('fs');

// fs.writeFile('mynewfile.txt', 'Hello World', function(err) {
//     if (err) throw err;
//     console.log('Updated!');
// });

//---------------

// Verilen URL yi parse şeklinde bölme ve terminalde gösterme
// var url = require('url');
// var adr = 'http://localhost:9090/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// var qData = q.query;
// console.log(qData.month);

//----------------

//Verilen url eğer hatalıysa bunu 404 şeklinde yazdırma, değilse aynı klasör içindeki html dosyasını açma
// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function(req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data) {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end("404 not Fount");
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(9090);

//---------------

//Module upper-case (npm install upper-case diyerek indir) Ardından bunu kullanma ve çıktısını tarayıcıda görme
// var http = require('http');
// var uc = require('upper-case');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(uc.upperCase("Hello World"));
//     res.end();
// }).listen(9090);

//---------------

//Events nodejs ile çalışan modülleri built-in(gömme) işlemi yapan bir araç. Burada basit bir örnek var.
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var myEventHandler = function() {
//     console.log('I hear a scream');
// }

// eventEmitter.on('scream', myEventHandler);
// eventEmitter.emit('scream');

//---------------

//Upload form oluşturma(sadece oluşturma)
// var formidable = require('formidable');
// var http = require('http');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
// }).listen(9090);

//---------------

//Upload form ve dosyayı kaydetme (Temporary folder) Geçici olarak
// var http = require('http');
// var formidable = require('formidable');

// http.createServer(function(req, res) {
//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function(err, fields, files){
//             res.write('File Uploaded');
//             res.end();
//         });
//     }
//     else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(9090);

//---------------

//Upload Form oluşturma ve dosyayı sisteme yükleyip NodeJS klasörü içerisine taşıma işlemi
// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function(req, res) {
//     if (req.url == '/fileupload') {
//         var form = new formidable.IncomingForm();
//         form.parse(req, function(err, fields, files){
//             var oldpath = files.filetoupload.filepath;
//             var newpath = 'melihomac@Melih-MacBook-Pro NodeJS' + files.filetoupload.originalFilename;
//             fs.rename(oldpath, newpath, function(err){
//                 if (err) throw err;
//                 res.write('File uploaded and moved !');
//                 res.end();
//             });
//         });
//     }
//     else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         return res.end();
//     }
// }).listen(9090);

//---------------

//Email gönderme işlemi 
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service:'hotmail',
//     auth:{
//         user: 'melihomac@hotmail.com',
//         pass: 'ERKmelih55555*'
//     }
// });

// var mailOptions = {
//     from: 'melihomac@hotmail.com',
//     to : 'melih_gfb_98@hotmail.com',
//     subject: 'Sending Email using NodeJS',
//     text: 'Hello Melih'
// };

// transporter.sendMail(mailOptions, function(err, info) {
//     if (error){
//         console.log(error);
//     }
//     else {
//         console.log('Email Sent' + info.response);
//     }
// });

//---------------

//MongoDB database oluşturma. Önce terminale "brew services start mongodb-community@5.0" yazıyoruz ardından
//node myfirst.js ile çalıştırıyoruz.
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

//---------------

//Collection Yaratma (Collection = Tablo)
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("customers", function(err, res){
//         if (err) throw err;
//         console.log("Collection Created");
//         db.close();
//     });
// });

//---------------

//Insert ekleme
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = { 
//         name: "Company",
//         address: "Atasehir",
//     };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });

//---------------

//_id field
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = [
//         { _id: 10, name:'Melih'},
//         { _id: 11, name:'Omac'},
//     ];
//     dbo.collection("products").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log(res);
//         db.close();
//     });
// });

//--------------

//find komutu kullanımı
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").findOne({}, function(err, result){
//         if (err) throw err;
//         console.log(result.name);
//         db.close();
//     });
// });

//---------------

//find komutu ve query birlikte kullanımı
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var query = { address: "Atasehir" };
//     dbo.collection("customers").find(query).toArray(function(err, result){
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

//---------------

//Sort işlemi (ters sıralama için name: -1)
//var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var mysort = { name: 1 };
//     dbo.collection("customers").find().sort(mysort).toArray(function(err, result){
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

//--------------------

//Silme işlemi
//var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myquery = { address: "Atasehir" };
//     dbo.collection("customers").deleteOne(myquery, function(err, obj){
//         if (err) throw err;
//         console.log("1 document Deleted");
//         db.close();
//     });
// });

//----------------

//Collection Silme işlemi
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").drop(function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// }); 

//---------------

//Update işlemi
//var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myquery = { address: "Atasehir" };
//     var newValues = { $set: {name: "Dursun", address: "Kadıkoy"} };
//     dbo.collection("customers").updateOne(myquery, newValues, function(err, result){
//         if (err) throw err;
//         console.log("1 document updated");
//         db.close();
//     });
// });

//---------------

//Listeleme işlemi
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("customers").find().toArray(function(err, result){
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

//---------------

//$lookup ile iki collectionu birleştirme (Join)
//var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection('orders').aggregate([
//     { $lookup:
//        {
//          from: 'products',
//          localField: 'product_id',
//          foreignField: '_id',
//          as: 'orderdetails'
//        }
//      }
//     ]).toArray(function(err, res) {
//     if (err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
//   });
// }); 

//---------------
