"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = exports.getClients = void 0;
let clients = [];
const getClients = (req, res) => {
    return res.status(200).json(clients);
};
exports.getClients = getClients;
const createClient = (req, res) => {
    const newClient = {
        id: Date.now().toString(),
        ...req.body,
        createdAt: new Date()
    };
    clients.push(newClient);
    return res.status(201).json(newClient);
};
exports.createClient = createClient;
