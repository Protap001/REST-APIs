const express = require("express");
const app = express();
app.use(express.json());
const products = require("./routes/products");
const cors = require("cors");


const home = require("./routes/home");
app.use("/api/products", products)
app.use("/", home);


app.use(cors({
    origin: "*",
    methods: ["GET"]
}));
// app.use((req, res, next) =>{
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "GET");
//     next();
// })

app.listen(3000,()=>{
    console.log("listening on port 3000");
});