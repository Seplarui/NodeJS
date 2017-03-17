var fs= require('fs');
http= require('http');
http.get({host: 'shapeshed.com'}, function(res){
    console.log("Got a response from shapeshed.com");
}).on('error',function(e) {
    console.log("There was an error from shapeshed.com");
});

fs.readFile('hola.txt', 'utf8',function (err,data) {
    if(err) throw err;
    console.log('File 1 read!');
});

http.get({host: 'www.bbc.co.uk'}, function(res) {
    console.log("Got a response from bbc.co.uk");
}).on('error', function(e){
    console.log("There  was an error from bbc.co.uk");
});

fs.readFile('hola2.txt','utf8',function (err, data) {
    if(err) throw err;
    console.log('File 2 read!');
}); //kk