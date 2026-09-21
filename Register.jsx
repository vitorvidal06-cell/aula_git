function Register() {
    return (
        <div>
            <h1>Cadastro de Usuário</h1>

            <form>
                <div>
                    <label>Nome:</label>
                    <input type="text" placeholder="Digite seu nome" />
                </div>

                <div>
                    <label>E-mail:</label>
                    <input type="email" placeholder="Digite seu e-mail" />
                </div>

                <div>
                    <label>Senha:</label>
                    <input type="password" placeholder="Digite sua senha" />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Register;