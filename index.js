const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
const app = express();
const importData = require("./data.json")

const PORT = process.env.PORT || 5005

// app.use(cors());
// app.use(express.json())
// app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.send("Ajay......ajay");    
    console.log('hello')  
    });

    app.get("/api/get",(req,res)=>{
        const sqlSelect =
    "SELECT * FROM contactus";
   db.query(sqlSelect, (err, result)=>{
    console.log("work")
    res.send(result)
    console.log(importData)
    })
})

// app.post("/api/insert",(req, res) => {
           
//   });



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})