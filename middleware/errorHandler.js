
export const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    if (err.code === "23505") {
        return res.status(409).json({ error: "El email ya está registrado" });
    }
    res.status(500).json({ error: "Error interno del servidor" });
};