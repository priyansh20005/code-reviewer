const express = require("express");

const app = express();
const aiRoutes = require("./routes/ai.routes");

//for linking backend and frontend
const cors = require("cors");
app.use(cors());



app.use(express.json());

app.get("/" , (req, res)=>{
    console.log("request received");
    res.send("hello world");
})

app.use("/ai" , aiRoutes);




module.exports = app;
