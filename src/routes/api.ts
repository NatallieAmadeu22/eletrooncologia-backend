import { Router } from 'express';
import { login } from '../controllers/authController';
import { getCompany, updateCompany } from '../controllers/companyController';
import { getProducts, createProduct } from '../controllers/productController';
import { getApplications, createApplication } from '../controllers/applicationController';
import { getClients, createClient } from '../controllers/clientController';

const apiRoutes = Router();

// 1. Autenticação (Tela de Login)
apiRoutes.post('/auth/login', login);

// 2. Empresa / Informações Institucionais
apiRoutes.get('/company', getCompany);
apiRoutes.put('/company', updateCompany);

// 3. Produtos (Oncochip)
apiRoutes.get('/products', getProducts);
apiRoutes.post('/products', createProduct);

// 4. Aplicação do Produto
apiRoutes.get('/applications', getApplications);
apiRoutes.post('/applications', createApplication);

// 5. Clientes / Instituições
apiRoutes.get('/clients', getClients);
apiRoutes.post('/clients', createClient);

export { apiRoutes };
