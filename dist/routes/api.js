"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutes = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const companyController_1 = require("../controllers/companyController");
const productController_1 = require("../controllers/productController");
const applicationController_1 = require("../controllers/applicationController");
const clientController_1 = require("../controllers/clientController");
const apiRoutes = (0, express_1.Router)();
exports.apiRoutes = apiRoutes;
// 1. Autenticação (Tela de Login)
apiRoutes.post('/auth/login', authController_1.login);
// 2. Empresa / Informações Institucionais
apiRoutes.get('/company', companyController_1.getCompany);
apiRoutes.put('/company', companyController_1.updateCompany);
// 3. Produtos (Oncochip)
apiRoutes.get('/products', productController_1.getProducts);
apiRoutes.post('/products', productController_1.createProduct);
// 4. Aplicação do Produto
apiRoutes.get('/applications', applicationController_1.getApplications);
apiRoutes.post('/applications', applicationController_1.createApplication);
// 5. Clientes / Instituições
apiRoutes.get('/clients', clientController_1.getClients);
apiRoutes.post('/clients', clientController_1.createClient);
