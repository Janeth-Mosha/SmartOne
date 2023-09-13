const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");


const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"crud",
})
db.connect((err)=>{
    if(err)throw err;
    console.log("connection to database successful");
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

// app.post('/login',(req, res) => {
//     const sql= "SELECT * FROM userInfo WHERE username = ? AND password = ?",
//     const values = [
//         re.body.email,
//         req.body.password
//     ]
//     db.query(sql, [values], (err, data) => {
//         if(err) return res.json("Login Failed");
//         return res.json(data);
//     })
// } )

app.get("/twalibu",function(req, res){
    db.query("SELECT * FROM userinfo",function(error, results, fields){
        if (!error) {
            return res.send({
                error: false,
                data: results[0],
                message: "users list",
            });
        }else{
            throw error;    
        }
    })
})


app.listen(9000, () => {
    console.log("Listening....");
})