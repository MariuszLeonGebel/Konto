const fastify = require('fastify');
const fs = require('fs').promises;
const path = require('path');
const app = fastify({logger: true});
const currDate = "";

app.register(require('@fastify/formbody'));

app.register(require("@fastify/view"), {
  engine: {
    twig: require("twig"),
  },
});


async function loadAllData() {
  const buffer = await fs.readFile("./public/data.json");
  const o = JSON.parse(buffer.toString());
  return o;
}

async function saveData(data) {
  const s = JSON.stringify(data, null, "  ");
  await fs.writeFile("./public/data.json", s);
}

// app.post("/data", async function(req, reply) {
//   const data = await loadAllData();
//   data.transactions.push(req.body);
//   await saveData(data);
//   reply.send("OK");
// })

const data = [
  { id: 1, transactionType: "WY", transactionAmount: 1, transactionDate: "2022-09-04" },
  { id: 2, transactionType: "WP", transactionAmount: 2, transactionDate: "2023-10-05" }
]

app.get('/', (req, reply) => {
  reply.view('/views/index.twig', {
      items: data
  });
});

const getCurrentDate = () => {
  let currentDate = new Date().toJSON().slice(0, 10);
  console.log("transactionDate: " + currentDate); // "2022-06-17" 
  return currentDate;
}

app.post('/data', function (req, reply) {
  console.log(req.body);
  const record = req.body;
  record.id = data.length + 1;
  record.transactionType = req.body.transactionType
  record.transactionAmount = parseFloat(req.body.transactionAmount);
  record.transactionDate = getCurrentDate();
  
  data.push(record);
  saveData(data);
  // loadAllData();
  reply.redirect('/');
  
});


// app.get('/data/:id', async function(req, reply) {
//   const data = await loadAllData();
//   const record = data.transactions.find(function(r) {
//     return r.id === parseInt(req.params.id, 10);
//   })
//   reply.send(record);

// });

// app.put("/data/:id", async function(req, reply) {
//   const data = await loadAllData();
//   data.transactions.push(req.body);
//   await saveData(data);
//   reply.send("OK");
// })

app.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})

// app.register(require('@fastify/static'), {
//   root: path.join(__dirname, 'public'),
//   prefix: '/public/', // optional: default '/'
// })



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

