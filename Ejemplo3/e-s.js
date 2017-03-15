var http=require('http');
urls=['shapeshed.com', 'google.es','www.upv.es'];

function fetchPage(urls) {
    var start=new Date();
    http.get({host:urls},function (res)
            {
        console.log("Got response from: "+urls);
        console.log("Request box: ", new Date()-start,'ms');
    });
}

for (var i=0;i<urls.length;i++) {
    fetchPage(urls[i]);
}