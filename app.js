
const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/public/';
const port = 8080;

router.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function (req, res) {
  res.sendFile(path + 'index.html');
});

router.get('/subPage', function (req, res) {
  res.sendFile(path + 'subpage.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('UK Business Intelligence sample app 1 listening on port 8080!')
})