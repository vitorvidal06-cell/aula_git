const express = require("express");

const app = express();

app.use(express.json());

app.post("/api/users", (req, res) => {
    const { nome, email, senha } = req.body;

    if (senha.length < 6) {
        return res.status(400).json({
            mensagem: "A senha deve ter pelo menos 6 caracteres."
        });
    }

    res.status(201).json({
        mensagem: "Usuário cadastrado com sucesso!",
        usuario: {
            nome,
            email,
            senha
        }
    });
});

module.exports = app;