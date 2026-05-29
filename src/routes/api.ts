import { Router } from 'express';
import { login } from '../controllers/authController';
import { getCompany, updateCompany } from '../controllers/companyController';
import { getProducts, createProduct } from '../controllers/productController';
import { getApplications, createApplication } from '../controllers/applicationController';
import { getClients, createClient } from '../controllers/clientController';
import { authenticateToken, authorizeRoles } from '../middleware/auth';

const apiRoutes = Router();

// 1. Autenticação (Tela de Login)
apiRoutes.post('/auth/login', login);

// 2. Empresa / Informações Institucionais
apiRoutes.get('/company', getCompany);
apiRoutes.put('/company', authenticateToken, authorizeRoles('admin'), updateCompany);

// 3. Produtos (Oncochip)
apiRoutes.get('/products', getProducts);
apiRoutes.post('/products', authenticateToken, authorizeRoles('admin'), createProduct);

// 4. Aplicação do Produto
apiRoutes.get('/applications', getApplications);
apiRoutes.post('/applications', authenticateToken, createApplication);

// 5. Clientes / Instituições
apiRoutes.get('/clients', getClients);
apiRoutes.post('/clients', authenticateToken, createClient);

export { apiRoutes };
