var express = require('express');
var router = express.Router();

// router.get('/', function(req, res){
//    res.send('GET route on things.');
//    console.log('Login Screen');
// });
// router.post('/', function(req, res){
//    res.send('POST route on things.');
// });

// module.exports = router;

router.route('/:username/:id')
    .get((req,res)=>{
      validateID(req.params.id);
    res.send(' welcome to page, ' + req.params.username)
})
    .post((req,res)=>{
    processData(req.params.username);
    res.send('data received ')
})

module.exports = router;