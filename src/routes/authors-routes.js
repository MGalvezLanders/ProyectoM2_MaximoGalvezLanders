import express from "express";
import {loadEnvFile} from "node:process";
loadEnvFile(".env");
import pool from "../db/config";
const authorsRouter = express.Router();

// GET : Obtiene los autores

authorsRouter.get('/', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM authors ORDER BY name");
        res.json(result.rows);
    } catch (error) {
        console.log("Error obteniendo autores", error.message);
        res.status(500).json({error: "Error obteniendo autores"});
    }
});

//GET :ID : Obtiene autores por su id 

authorsRouter.get('/:id', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FORM authors WHERE id = $1", [req.params.id]);
        if (result.rows.length == 0) {
            return res.status(404).json({error: "Autor no encontrado"});
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error encontrando el autor", error,message);
        res.status(500).json({error: "Error encontrando autor por su id"});
    }
})