# DevSpark
 - Api REST para gestionar usuarios, que permite leer, crear, modificar y eliminar usuarios y posts de la base de datos alojada en PostgresSQL, con validaciones y test basicos para un mayor desempeño

 ## 🌐 URL de la API

API desplegada en: **Railway**

```
https://proyectom2maximogalvezlanders-production.up.railway.app
```
---

## 🚀 Deployment en Railway


### 1️⃣ Crear el proyecto

1. Ir a https://railway.app
2. Crear un nuevo proyecto.
3. Conectar el repositorio de GitHub que contiene la API.

### 2️⃣ Variables de entorno

Las variables de entorno se configuran solas dentro de railway. Verificar que esten las siguientes:

- DB_HOST=
- DB_PORT=
- DB_USER=
- DB_PASSWORD=
- DB_NAME=
- DATABASE_URL=
- PORT=

### 3️⃣ Public URL

Una vez desplegada, Railway genera una **URL pública** para acceder a la API.

Ejemplo:

```
postgresql://postgres:OMBkzotzpgDWLvgyIdWuJGFbATCcItcX@yamanote.proxy.rlwy.net:19277/railway
```

### 4️⃣ Redeploy automático

Cada vez que se hace un **push a GitHub**, Railway redepliega automáticamente la aplicación con los últimos cambios.




---


## 🛠 Tecnologías utilizadas

Lista del stack usado en el proyecto.

- Node.js
- Express.js
- PostgreSQL
- Open API
- Vitest
- Supertest

---

## 📡 Endpoints disponibles

### Autores

| Método | Endpoint | Descripción |
|------|------|------|
| GET | /api/authors | Obtener todos los autores |
| GET | /api/authors/:id | Obtener autor por ID |
| POST | /api/authors | Crear un nuevo autor |
| PUT | /api/authors/:id | Actualizar un autor |
| DELETE | /api/authors/:id | Eliminar un autor |

---

### Posts

| Método | Endpoint | Descripción |
|------|------|------|
| GET | /api/posts | Obtener todos los posts |
| GET | /api/posts/:id | Obtener post por ID |
|GET  | /api/posts/author/:authorId | Obtener posts por autor id |
| POST | /api/posts | Crear un post |
| PUT | /api/posts/:id | Actualizar un post |
| DELETE | /api/posts/:id | Eliminar un post |

---

## 💻 Ejemplos de uso

### Obtener todos los autores

```bash
SELECT * FROM authors ORDER BY name
```

---

### Crear un autor

```bash
INSERT INTO authors (name, email, bio)
VALUES ('Gabriel García Márquez', 'gabriel@email.com', 'Escritor colombiano, autor de Cien años de soledad')
RETURNING *;
```

---

### Obtener todos los posts

```bash
SELECT * FROM posts WHERE published = true ORDER BY created_at DESC
```

---

## 📚 Documentación interactiva

Open API disponible en:

```
https://tu-api-url.com/api-docs
```

Desde ahí se pueden probar todos los endpoints directamente desde el navegador.

---

## ⚙️ Instalación local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/MGalvezLanders/ProyectoM2_MaximoGalvezLanders.git
```

---

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

### 3️⃣ Configurar variables de entorno

Crear un archivo `.env` con las siguientes variables:

```
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
DATABASE_URL=
PORT=
```

---

### 4️⃣ Ejecutar el servidor

```bash
npm start
```

Servidor disponible en:

```
Servidor corriendo en http://localhost:3000
```

---

## 🧪 Ejecutar tests

```bash
npm test
```


---

## 👤 Autor

Proyecto desarrollado por:

**Maximo Galvez Landers**