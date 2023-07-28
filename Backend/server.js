import express from "express";
import mysql  from "mysql";
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "brera_dph", 
})

app.get("/", (re, res)=>{
    return res.json("le backend de mon application");
})

// afficher les donnes de la table newsletter
app.get("/Newsletter", (req, res)=>{
    const sql = "SELECT * FROM newsletter";
    db.query(sql, (err, data)=>{
        if(err){
            res.json(err);
        }else{
            res.json(data)
        }
    })
})

// afficher les donnes de la table actualite
app.get("/actualite", (req, res)=>{
    const sql = "SELECT * FROM actualite";
    db.query(sql, (err, data)=>{
        if(err){
            res.json(err);
        }else{
            res.json(data)
        }
    })
})

// newsletter
app.post("/newsletter", (req, res) =>{
    const sql = "INSERT INTO newsletter (`email`) VALUES (?)";
   
    db.query(sql, [ req.body.email], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})

// inserer des donnees dans la table actualite
app.post("/CreateActualite", (req, res) =>{
    const sql = "INSERT INTO actualite (`titre`, `theme`, `themeSuite`) VALUES (?)";
    const values = [
        req.body.titre, 
        req.body.theme,
        req.body.themeSuite,
    ]
    db.query(sql, [values], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})







app.listen(8081, ()=>{
    console.log("l'ecoute se fait sur le port 8081")
})