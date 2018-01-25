// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var port = process.env.PORT||3000;
var cors = require('cors');
var whoami = require('./routes/whoami')

app.use(cors());
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

//app.use(express.static(__dirname+'/views'));
app.get("/",(req,res)=>{
  res.sendFile(__dirname+'/views/index.html');
});

app.use('/api/whoami',whoami)

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
