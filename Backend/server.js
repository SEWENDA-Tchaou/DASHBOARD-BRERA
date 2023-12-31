import express from "express";
import mysql  from "mysql";
import cors from 'cors';
import multer from "multer";
import path from "path";
 
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

app.get("/", (req, res)=>{
    return res.json("le backend de mon application");
})



// admin connexion
app.post("/login", (req, res)=>{
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    // const values = [
    //     req.body.email,
    //     req.body.password
    // ]
    db.query(sql, [req.body.email, req.body.password], (err, data)=>{
        if(err){
            res.json("Non echoue");
        }else{
            res.json(data);
        }
    })
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

// afficher les donnes de la table pub_acceuille
app.get("/pub", (req, res)=>{
    const sql = "SELECT * FROM page_acceuille";
    db.query(sql, (err, data)=>{
        if(err){
            res.json(err);
        }else{
            res.json(data)
        }
    })
})

// afficher les donnes de la table conseils
app.get("/conseil", (req, res)=>{
    const sql = "SELECT * FROM conseils";
    db.query(sql, (err, data)=>{
        if(err){
            res.json(err);
        }else{
            res.json(data)
        }
    })
})

// app.get("/image", (req, res)=>{
//     const sql = "SELECT * FROM image";
//     db.query(sql, (err, data)=>{
//         if(err){
//             res.json(err);
//         }else{
//             res.json(data)
//         }
//     })
// })

// afficher le contenu du boutton Lire la Suite
app.get("/lire", (req, res)=>{
  return res.json()
})

// app.get("/read/:id", (req, res)=>{
//     const sql = "SELECT * FROM conseils WHERE ID = ?";
//     const id = req.params.id;
//     db.query(sql, [id], (err, data)=>{
//         if(err){
//             res.json(err);
//         }else{
//             res.json(data)
//         }
//     })
// })

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

//inserer image 
const storage = multer.diskStorage({
    destination: path.join( '../public_html/', 'uploads'),
    filename: function (req, file, cb){
        cb(null, Date.now() + '_' + file.originalname)
    }
})
app.post("/imageupload", async (req, res) =>{
    try{
        let upload = multer({ storage: storage}).single('avatar');

        upload(req, res, function(err){
            if(!req.file){
                return res.send("S'il vous plait veiller selectionner une image");
            }else if(err instanceof multer.MulterError){
                return res.send(err);
            }else if (err){
                return res.send(err);

            }
            const classifiedsadd = {
                image: req.file.filename
            };
            const sql = "INSERT INTO image SET ?";
            db.query(sql, classifiedsadd, (err,)=>{
                if(err) throw err;
                res.json({ success: 1})
            })
        })
    }catch(err){
        console.log(err)
    }
})

// inserer des donnees dans la table pub_actualite
app.post("/pub_actu", (req, res) =>{
    const sql = "INSERT INTO page_acceuille (`pub`) VALUES (?)";
   
    db.query(sql, [ req.body.pub], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})

// inserer des donnees dans la table conseils
app.post("/conseil_sante", (req, res) =>{
    const sql = "INSERT INTO conseils (`titre`, `conseil1`, `conseil2`, `conseil3`) VALUES (?)";
    const values = [
        req.body.titre, 
        req.body.conseil1,
        req.body.conseil2,
        req.body.conseil3,
    ]
    db.query(sql, [ values], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})

//supprimer un conseil
app.delete("/conseils/:id", (req, res) =>{
    const sql = "DELETE FROM conseils WHERE ID = ?";

    const id = req.params.id;

    db.query(sql, [ id], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})

//supprimer une actualite
app.delete("/actualite/:id", (req, res) =>{
    const sql = "DELETE FROM actualite WHERE ID = ?";

    const id = req.params.id;

    db.query(sql, [ id], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})

//supprimer un email
app.delete("/Newsletter/:id", (req, res) =>{
    const sql = "DELETE FROM newsletter WHERE ID = ?";

    const id = req.params.id;

    db.query(sql, [ id], (err, data) =>{
        if(err){
            res.json("error")
        }else{
            res.json(data)
        }
    })
})

//supprimer la pub
app.delete("/pub_actu/:id", (req, res) =>{
    const sql = "DELETE FROM page_acceuille WHERE ID = ?";

    const id = req.params.id;

    db.query(sql, [ id], (err, data) =>{
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