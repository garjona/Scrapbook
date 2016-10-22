/**
 * Created by admin on 22-10-16.
 */
var express = require('express');
var  app = express();

app.use(express.static(__dirname + "/../Vista"));
app.listen(3000);
console.log('Server running on port 3000');