const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Adam',
  password: 'Adouma1243',
  database: 'playlist',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/songs", (req, res) => {
    const q = "SELECT * FROM songs"
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post("/songs", (req, res) => {
    const q = "INSERT INTO songs (`title`,`desc`,`cover`) VALUES (?)"
    const values = [req.body.title,req.body.desc,req.body.cover]

    db.query(q,[values],(err, data)=>{
        if(err) return res.json(err)
        return res.json("song added to playlist")
    })
})


app.delete("/songs/:id",(req, res) => {
  const songId = req.params.id
  const q = "DELETE FROM songs WHERE id = ?"

  db.query(q,[songId],(err, data)=>{
    if(err) return res.json(err)
    return res.json("song has been deleted")
})
})



app.put("/songs/:id",(req, res) => {
  const songId = req.params.id
  const q = "UPDATE songs SET `title`= ?, `desc` = ?,`cover` = ? WHERE id = ? "
  const values = [req.body.title,req.body.desc,req.body.cover]

  db.query(q,[...values,songId],(err, data)=>{
    if(err) return res.json(err)
    return res.json("song has been updated")
})
})

app.post("/signup", (req, res) => {
  const q = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)"
  const values = [req.body.name,req.body.email,req.body.password]

  db.query(q,[values],(err, data)=>{
    if(err) return res.json(err)
    return res.json("user added")
})
})
app.get("/users", (req, res) => {
  const q = "SELECT * FROM users"
  db.query(q,(err, data)=>{
      if(err) return res.json(err)
      return res.json(data)
  })
})
app.post("/login", (req, res) => {
  const q = "SELECT name FROM users WHERE `email`=? AND `password` = ?"

  db.query(q,[req.body.email,req.body.password],(err, data)=>{
    if (err) {
      return res.status(500).json(err)
    }
    if (data.length > 0) {
      const userName = data[0].name
      return res.json("welcome",userName);
    } else {
      return res.status(401).json("Invalid email or password")
    }
  });
});



app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
