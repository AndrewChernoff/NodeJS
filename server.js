/* const user = require('./user/user')

console.log(`${user.personInfo.name} is ${user.personInfo.age} years of age` );
user.greetThem();
console.log(__dirname)
console.log(__filename)
 */

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.end(`<form action="/" method="post" >
          <input type="text"/>
          <button type="submit">Submit</button>
          </form>`);
  } else if (req.method === "POST") {
    const body = [];

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });

    req.on("end", () => {
      const messege = body.toString().split('=')[1]
      res.end(`
        <h1>sup${messege}</h1>`);
    });
  }
});

server.listen(3000);
