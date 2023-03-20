const express = require("express");
const app = express();
const port = 6002;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const path = require("path"); not use yet
const cors = require("cors");
const bodyParser = require('body-parser');

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("connect to mongodb"))
    .catch((err) => console.log("dataabase Error"));


app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send("<h1>hello from node</h1>")
})

app.listen(port, () => {
    console.log("Backendisrunning");
}); 