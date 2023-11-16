const express = require('express'); //set up middlewares to respond to HTTP Requests
const bodyParser = require("body-parser");//process JSON data
const cors = require("cors");//interact with resources from a different origin
var elasticClient = require('./app/connection');
const routes = require('./routes/routes')
const port = process.env.PORT || 8081;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json());

//to create new indexes
const createIndex =  async(req ,res , next) => {
  const {indexName} = req.body
  await elasticClient.indices.create({ index:indexName});
  
  console.log("Index created");
};
app.use("/create-indexes", createIndex)

app.use(routes)
app.listen(port, () => console.log(`Server is running on port ${port}`));