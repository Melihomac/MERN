//Hello world uygulaması. Request burada http, body ve header gibilerini çağırmaya yarıyor.
//Response ise gelen requestleri(istekleri) alıp buna tepki olarak HTTP response yapıyor.
// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//   res.send("Rendering file")
// });

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// });

//---------------

//GET ve url işlemleri. localhost:8081/buraya gelecek ek ile http sayfasında mesajı görüntüleme işlemi.
// var express = require('express');
// var app = express();

// app.get('/', function(req,res){
//   console.log('GET Request for homepage');
//   res.send('Hello GET');
// });

// app.post('/', function(req, res){
//   console.log('POST Request for homepage');
//   res.send('Hello POST');
// });

// app.delete('/del_user', function(req, res){
//   console.log('DELETE Request for del_user');
//   res.send('Hello Delete');
// });

// app.get('/list_user', function(req, res){
//   console.log('GET Request for list_user');
//   res.send('Page Listing');
// });

// app.get('/ab*cd', function(req, res){
//   console.log('GET Request for ab*cd');
//   res.send('Page Pattern Match');
// });

// var server = app.listen(8081, function(){
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example listening at http://%s:%s', host, port);
// });

//---------------

//http://localhost:8081/images/wildhorses.webp yazarsak bize fotoğrafı gösterir.
// var express = require('express');
// var app = express();

// app.use(express.static('public'));

// app.get('/', function(req, res){
//   res.send('Hello World');
// });

// var server = app.listen('8081', function(){
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('http://%s:%s', host, port);
// });

//---------------

//http://127.0.0.1:8081/index.html sayfasına isim ve soyisim girildiğinde get metodu ile bilgileri ekrana
//yazdıran kod. Çıktıyı JSON formatında veriyor.
// var express = require('express');
// var app = express();

// app.use(express.static('public'));
// app.get('/index.html', function(req, res){
//   res.sendFile(__dirname + "/" + "index.html");
// });

// app.get('/process_get', function(req, res){
//   response = {
//     first_name:req.query.first_name,
//     last_name:req.query.last_name
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// });

// var server = app.listen('8081', function(){
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('http://%s:%s', host, port);
// });

//---------------

//http://127.0.0.1:8081/index.html adresine bilgileri girince POST işlemi ile bunu JSON formatında yazdırır.
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');

// // Create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(express.static('public'));
// app.get('/index.html', function(req, res){
//   res.sendFile(__dirname + "/" + "index.html");
// });

// app.post('/process_post', urlencodedParser, function(req, res){
//   response = {
//     first_name:req.body.first_name,
//     last_name:req.body.last_name
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// });

// var server = app.listen('8081', function(){
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('http://%s:%s', host, port);
// });

//---------------

//Cookie uygulaması.
// var express = require('express');
// var app = express();
// var cookieParser = require('cookie-parser');

// app.use("user",cookieParser());

// app.get('/', function(req, res){
//   console.log("Cookies: ", req.cookies);
// });

// app.listen(8081);

//----------------

//users.json dosyasındaki verileri listeleme işlemi.
// var express = require('express');
// var app = express();
// var fs = require('fs');

// app.get('/list_users', function(req, res){
//   fs.readFile(__dirname + "/" + "users.json", function(err, data){
//     if (err) throw err;
//     console.log(data);
//     res.end(data);
//   });
// });

// var server = app.listen('8081', function(){
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('http://%s:%s', host, port);
// });

//-----------------

//users.join dosyasına veri ekleme işlemi
// var express = require('express');
// var app = express();
// var fs = require("fs");

// var user = {
//    "user4" : {
//       "name" : "Miros",
//       "password" : "password4",
//       "profession" : "teacher",
//       "id": 4
//    },
// }

// app.get('/add_user', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       data["user4"] = user["user4"];
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })

//---------------

//serverdaki resimleri çeken kod bloğu
// var express = require('express');
// var fs = require('fs');
// var app = express();
// var fileupload = require('express-fileupload');
// var cors = require('cors');
// var bodyParser = require('body-parser');
// var morgan = require('morgan');
// var _ = require('lodash');

// app.use(fileupload({
//   createParentPath:true
// }));

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(morgan('dev'));

// const port = process.env.PORT || 3000;

// app.get('/upload-avatar', async (req, res) => {
//   try {
//       if(!req.files) {
//           res.send({
//               status: false,
//               message: 'No file uploaded'
//           });
//       } else {
//           //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
//           let avatar = req.files.avatar;
          
//           //Use the mv() method to place the file in upload directory (i.e. "uploads")
//           avatar.mv('./uploads/' + avatar.name);

//           //send response
//           res.send({
//               status: true,
//               message: 'File is uploaded',
//               data: {
//                   name: avatar.name,
//                   mimetype: avatar.mimetype,
//                   size: avatar.size
//               }
//           });
//       }
//   } catch (err) {
//       res.status(500).send(err);
//   }
// });

// var server = app.listen('8081', function(){
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('http://%s:%s', host, port);
// });

//---------------
