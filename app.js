let http = require("http");
let fs = require("fs");

//READ STREAM
// const newReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");

//WRITEABLE STREAM
// const newWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

//MANUALLY WRITING TO STREAM
// newReadStream.on('data', function(chunk){
//   console.log('new chunk received');
//   newWriteStream.write(chunk)
// })

//PIPE (AUTOMATICALLY WRITES TO STREAM)
// newReadStream.pipe(newWriteStream);

//SEND DATA TO A USER (put READ STREAM & WRITE STREAM into created SERVER):

let server = http.createServer(function(req, res) {
  console.log("request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  const newReadStream = fs.createReadStream(__dirname + "/index.html", 'utf8'); //<- serving client HTML file
  //send data down the stream to the client (res) (Rather than create file *above*):
  newReadStream.pipe(res);

  // res.end(`I'm in the matrix!`);
});

server.listen(3000, "127.0.0.1");
console.log(`we're doing server stuff on port 3000 yoo....`);
