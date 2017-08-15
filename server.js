var express = require('express');//lib create the web server 
var morgan = require('morgan');//output the logs of the server what //reuests are comming to the server and how we are responding
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
   res.send('Article one requested and will be served here'); 
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) { ///ui/style.css' url request
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) { ///ui/style.css' url request
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

/*var names=[];
app.get('/submit-name/:name', function (req, res) {//:name is a parameter
    
    var name=req.params.name;
    
    names.push(name);
    //JSON Javascript object notation converting //js objects into strings
    res.send(JSON.stringify(names));
});
*/
var names=[];
app.get('/submit-name', function (req, res) {
    
    var name=req.query.name;
    
    names.push(name);
    //JSON Javascript object notation converting //js objects into strings
    res.send(JSON.stringify(names));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
