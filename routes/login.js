const express = require("express");
const router = express.Router();
const db = require("../dbConnection");

router.post("/login", (req, res) => {
    const {userEmail, userPass} = req.body;

    const emailExist = `SELECT * FROM usuarios WHERE email = ?`

    db.query(emailExist, [userEmail], (err, result) => {
        if(err){
            console.error(err);
            return res.status(500).send({
                mensagem: "Erro ao consultar o banco de dados"

            })
        }

        if(result.length === 0){
            return res.status(400).send({
                mensagem: "Este email não existe!"
            })
        }

        

    })

    
})