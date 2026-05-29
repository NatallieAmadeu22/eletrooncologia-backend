"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
const login = (req, res) => {
    const { email, password } = req.body;
    // Usuário estático por enquanto; em produção consulte um banco
    if (email === 'admin@eletrooncologia.com' && password === 'onco123') {
        const user = { name: 'Administrador Oncologista', email, role: 'admin' };
        const token = jsonwebtoken_1.default.sign({ email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '8h' });
        return res.status(200).json({
            message: 'Login realizado com sucesso!',
            user,
            token
        });
    }
    return res.status(401).json({ error: 'E-mail ou senha inválidos.' });
};
exports.login = login;
