import express from 'express';
import cors from 'cors';
import { apiRoutes } from './routes/api';

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor da Eletrooncologia rodando em http://localhost:${PORT}`);
});
