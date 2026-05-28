"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@eletrooncologia.com' && password === 'onco123') {
        return res.status(200).json({
            message: 'Login realizado com sucesso!',
            user: { name: 'Administrador Oncologista', email },
            token: 'fake-jwt-token-eletrooncologia'
        });
    }
    return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
};
exports.login = login;
