const multer = require('multer');
const fs = require('fs');
const DIR = '../uploads/';
const upload = multer({dest: DIR}).single('photo');
 
 
app.use(multer({
  dest: DIR,
  rename: (fieldname, filename) => {
    return filename + Date.now();
  },
  onFileUploadStart: (file) => {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: (file) => {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}));
 
app.get('/api', (req, res) => {
  res.end('file catcher example');
});
 
app.post('/api', (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }
 
    res.end('File is uploaded');
  });
});
 