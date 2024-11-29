const express = require("express");
const router = express.Router();
const db = require("../dbConnection");
const bcrypt = require("bcryptjs");

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


        const storedHash = result[0].pass;

        bcrypt.compare(userPass, storedHash, (err, isMatch) => {
            if (err) {
                console.error(err);
                return res.status(500).send({
                    mensagem: "Erro ao comparar as senhas"
                });
            }

            if (isMatch) {
                return res.status(200).send({
                    mensagem: "Login bem-sucedido!"
                });
            } else {
                return res.status(400).send({
                    mensagem: "Senha incorreta!"
                });
            }
        })


    })

    
})

module.exports = router;