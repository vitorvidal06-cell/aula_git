const express = require("express");

const app = express();

app.use(express.json());

app.post("/api/users", (req, res) => {
    const { nome, email, senha, cpf } = req.body;

    // Validação do CPF
    if (!cpf || !/^\d{11}$/.test(cpf)) {
        return res.status(400).json({
            mensagem: "CPF inválido. Digite 11 números."
        });
    }

    // Validação da senha
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
            senha,
            cpf
        }
    });
});

module.exports = app;