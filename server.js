import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import authorsRouter from './routes/authors-routes.js';
import postsRouter from './routes/posts-routes.js';
import { errorHandler } from "./middleware/errorHandler.js";


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


//Middleware de manejo de errores
app.use(errorHandler);

//Se exporta para los test
export default app;

// if para que no lo llame al realizar los test
if (process.argv[1] === new URL(import.meta.url).pathname) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}