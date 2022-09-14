const fastify = require('fastify');
const fs = require('fs');
const app = fastify({logger: true});

app.get("/", function(req, reply) {
  const file = fs.readFileSync("./index.html");
  reply.header("Content-type", "text/html");
  reply.send(file);
 })

app.get("/styles.css", function(req, reply) {
  const file = fs.readFileSync("./styles.css");
  reply.header("Content-type", "text/css");
  reply.send(file);
})

app.get("/script.js", function(req, reply) {  
  const file = fs.readFileSync("./script.js"); 
  reply.header("Content-type", "application/json"); 
  reply.send(file);
})

app.listen({port: 3000});

