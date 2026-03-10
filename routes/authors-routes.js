import express from "express";
import { loadEnvFile } from "node:process";
loadEnvFile(".env");
import pool from "../db/config.js";
const authorsRouter = express.Router();

// GET : Obtiene los autores

authorsRouter.get('/', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM authors ORDER BY name");
        res.json(result.rows);
    } catch (error) {
        console.log("Error obteniendo autores", error.message);
        res.status(500).json({ error: "Error obteniendo autores" });
    }
});

// GET :ID : Obtiene autores por su id 

authorsRouter.get('/:id', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FORM authors WHERE id = $1", [req.params.id]);
        if (result.rows.length == 0) {
            return res.status(404).json({ error: "Autor no encontrado" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error encontrando el autor", error, message);
        res.status(500).json({ error: "Error encontrando autor por su id" });
    }
});

// POST /api/authors - Crear nuevo autor
authorsRouter.post('/', async (req, res) => {
    const {name, email, bio} = req.body;
    
    if(!name || !email){
        return res.status(400).json({error: "Nombre y Email son requeridos"});
    }

    try {
        const result = await pool.query("INSERT INTO authors (name, emai, bio) VALUES ($1, $2, $3) RETURNING *", [name, email, bio || null]);

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log("Error creando autores", error.message);

        if (error.code == "23505") {
            return res.status(409).json({error: "El email ya esta registrado"});
        }

        res.status(500).json({error: "Error creando autor"});
    }
});

// PUT /api/authors/:id - Actualizar un autor
authorsRouter.put('/:id', async (req, res) => {
    const { name, email, bio } = req.body;

    try {
        const result = await pool.query
            (`UPDATE authors
                SET name = COALESCE($1, name),
                    email = COALESCE($2, email),
                    bio = COALESCE($3, bio)
                WHERE id = $4
                RETURNING *`,
                [name, email, bio, req.params.id],
            );
        if (result.rows.length == 0) {
            return res.status(404).json({ error: "Autor no encontrado" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error actualizando autor", error.massage);

        if (error.code == "23505") {
            return res.status(409).json({ error: "El email ya esta registrado" });
        }
        res.status(500).json({ error: "Error actualizando autor" });
    }
});

// DELETE /api/authors/:id - Eliminar un autor
authorsRouter.delete('/:id', async (req, res) => {
    try {
        const result = await pool.query("DELETE FROM authors WHERE id = $1", [req.params.id]);
        if (result.rowCount == 0) {
            return res.status(404).json({ error: "Error no encontrado" });
        }
        res.json({ message: "Autor eliminado correctamente" })
    } catch (error) {
        console.log("Error eliminando el autor:", error.message);
        res.status(500).json({ error: "Error eliminando autor" });
    }
});



export default authorsRouter;