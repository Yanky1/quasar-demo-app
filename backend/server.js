
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/j',(request, response) => {

 response.end(JSON.stringify(request.body));
});

app.listen(8081,() => {
  console.log("Started on PORT 8081");
})

app.use("/", router);
