const express = require("express");
const mysql = require("mysql");
const cors =require("cors")
const app = express();
const bcrypt=require("bcrypt");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const session=require("express-session");
const saltRounds=10;
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "db",
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database");
});

app.post('/api/register',(req,res)=>{
  const username=req.body.username
  const password=req.body.password
  bcrypt.hash(password,saltRounds,(err,hash)=>{  
  if(err){
    console.log(err);
  }  
  con.query("INSERT INTO users (username,password) VALUES (?,?)",[username,hash],
  (err,result)=>{
    console.log("user added");
  }
 )})
})
app.get("/api/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  con.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user=result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      
      }
    }
  );
});
app.post('/api/addbooks',(req,res)=>{
  const uploadBy=req.body.uploadBy;
  const title=req.body.title;
  const descreption=req.body.descreption;
  const pages=req.body.pages;
  const author=req.body.author;
  
  const sql=`INSERT INTO books (uploadBy,title,descreption,pages,author) VALUES(?,?,?,?,?)`
  con.query(sql,[uploadBy,title,descreption,pages,author],(err,result)=>{
    if(err)throw err;
    console.log("book added");
    res.status(200).json("book added");
  })
});
app.get("/api/books",(req,res)=>{
  const display=`SELECT * FROM books`;
  con.query(display,(err,result)=>{
    if(err){
      res.status(500).json("server problem");
    }
    
    res.status(200).json("book added");
  })
})
app.get('/api/logout', function(req, res) {
  req.session.destroy();      
  console.log('session destroyed');
  });
app.listen(3001,()=>{
  console.log("running server");
});

