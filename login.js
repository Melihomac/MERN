var express = require('express');
var router = express.Router();

router.get('/login', function(req, res){
  res.send(req.params);
  console.log('Login Screen');
});

router.get('/login/:loginId', function(req, res){
   res.send(req.params);
   console.log('Login Screen');
});
router.post('/login', function(req, res){
   res.send('POST route on things.');
});

module.exports = router;

// router.route('/:username/:id')
//     .get((req,res)=>{
//       validateID(req.params.id);
//     res.send(' welcome to page, ' + req.params.username)
// })
//     .post((req,res)=>{
//     processData(req.params.username);
//     res.send('data received ')
// })