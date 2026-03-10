import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import authorsRouter from './routes/authors-routes.js';
import postsRouter from './routes/posts-routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Rutas
app.use('/api/authors', authorsRouter);
app.use('/api/posts', postsRouter);


// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});