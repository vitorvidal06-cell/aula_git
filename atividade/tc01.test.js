const request = require("supertest");
const app = require("./index");

describe("TC-01 - Cadastro de usuário", () => {
    test("deve cadastrar um usuário com sucesso", async () => {
        const resposta = await request(app)
            .post("/api/users")
            .send({
                nome: "Vitor",
                email: "vitor@email.com",
                senha: "123456",
                cpf: "12345678901"
            });

        expect(resposta.statusCode).toBe(201);

        expect(resposta.body.mensagem).toBe(
            "Usuário cadastrado com sucesso!"
        );
    });
});