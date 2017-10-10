var express = require('express');
var router = express.Router();
var multer = require('multer');
var DIR = './uploads/';

//  in our case, its a single file with the name photo
var upload = multer({dest: DIR}).single('photo');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
  
router.post('/', function (req, res, next) {
      var path = '';
      upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
        // No error occured.
        path = req.file.path;
        return res.send("Upload Completed for "+path); 
  });     
})
module.exports = router;