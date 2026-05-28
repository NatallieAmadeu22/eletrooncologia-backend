"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompany = exports.getCompany = void 0;
let companyData = {
    nomeInstitucional: "Eletrooncologia",
    areaAtuacao: "Nanomedicina",
    pais: "Brasil",
    cidade: "São Paulo",
    anoFundacao: "2020",
    missao: "Transformar o tratamento do câncer por meio do Oncochip.",
    visao: "Ser referência global em nanorrobótica médica.",
    valores: "Inovação, Precisão, Ética e Cuidado Humano.",
    tecnologiaCentral: "Nanorrobôs liberados no sistema sanguíneo.",
    email: "contato@eletrooncologia.com",
    telefone: "(11) 99999-9999"
};
const getCompany = (req, res) => {
    return res.status(200).json(companyData);
};
exports.getCompany = getCompany;
const updateCompany = (req, res) => {
    companyData = { ...companyData, ...req.body };
    return res.status(200).json({ message: "Dados atualizados!", data: companyData });
};
exports.updateCompany = updateCompany;
