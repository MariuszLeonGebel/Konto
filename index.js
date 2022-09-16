const fastify = require('fastify');
const fs = require('fs').promises;
const path = require('path');
const app = fastify({logger: true});

async function loadAllData() {
  const buffer = await fs.readFile("./public/data.json");
  const o = JSON.parse(buffer.toString());
  return o;
}

async function saveData(data) {
  const s = JSON.stringify(data, null, "  ");
  await fs.writeFile("./public/data.json", s);
}

app.post("/data", async function(req, reply) {
  const data = await loadAllData();
  data.transactions.push(req.body);
  await saveData(data);
  reply.send("OK");

  // const body = JSON.stringify(req.body)
  // fs.writeFile("./public/data.json", body, function(err) {
  //   if(err !== null) {
  //     reply.statusCode = 500;
  //     reply.send("Internal server error");
  //     return;
  //   }
  //   reply.send("ok");
  // })
})

app.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/', // optional: default '/'
})



// app.get("/", function(req, reply) {
//   const stream = fs.createReadStream("./index.html");
//   reply.send(stream);
//   // const file = fs.readFile("./index.html", function(err, file){
//   //   reply.header("Content-type", "text/html");
//   //   reply.send(file);
//   // });
 
//  })

// app.get("/styles.css", function(req, reply) {
//   const file = fs.readFileSync("./styles.css");
//   reply.header("Content-type", "text/css");
//   reply.send(file);
// })

// app.get("/script.js", function(req, reply) {  
//   const file = fs.readFileSync("./script.js"); 
//   reply.header("Content-type", "application/json"); 
//   reply.send(file);
// })

app.listen({port: 3000});

