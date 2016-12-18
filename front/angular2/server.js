const express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/app/html/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
