const express = require("express");

const app = express();

app.use(express.json());

app.post("/api/users", (req, res) => {
    const { nome, email, senha } = req.body;

    res.status(201).json({
        mensagem: "Usuário cadastrado com sucesso!",
        usuario: {
            nome,
            email,
            senha
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});