# DevSpark
 - Api REST para gestionar usuarios, que permite leer, crear, modificar y eliminar usuarios y posts de la base de datos alojada en PostgresSQL, con validaciones y test basicos para un mayor desempeño

 ## 🌐 URL de la API

API desplegada en: **Railway**

```
https://proyectom2maximogalvezlanders-production.up.railway.app
```
---
## 📚 Documentación interactiva

Open API disponible en:
```
https://proyectom2maximogalvezlanders-production.up.railway.app/api-docs
```

Desde ahí se pueden probar todos los endpoints directamente desde el navegador.\


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
DATABASE_URL=
PORT=
NODE_ENV=
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


## 🧪 Testeo de la API con Postman

Para probar los endpoints de la API se puede utilizar **Postman**, una herramienta que permite enviar solicitudes HTTP y visualizar las respuestas del servidor.

### 1️⃣ Instalar Postman

Descargar Postman desde el sitio oficial:

https://www.postman.com/downloads/

Instalar la aplicación y abrirla.

---

### 2️⃣ Crear una nueva solicitud

1. Abrir Postman.
2. Hacer clic en **New Request**.
3. Seleccionar el método HTTP correspondiente (`GET`, `POST`, `PUT`, `DELETE`).
4. Ingresar la URL del endpoint.

Ejemplo:

```
https://proyectom2maximogalvezlanders-production.up.railway.app/api/authors
```

---

### 3️⃣ Probar un endpoint GET

Para obtener todos los autores:

**Método**

```
GET
```

**URL**

```
https://proyectom2maximogalvezlanders-production.up.railway.app/api/authors
```

Luego presionar **Send**.

Respuesta esperada:

```json
[
  {
    "id": 1,
    "name": "Gabriel García Márquez",
    "email": "gabriel@email.com",
    "bio": "Escritor colombiano",
    "created_at": "2026-03-16T12:00:00.000Z"
  }
]
```

---

### 4️⃣ Probar un endpoint POST

Para crear un nuevo autor.

**Método**

```
POST
```

**URL**

```
https://proyectom2maximogalvezlanders-production.up.railway.app/api/authors
```

Ir a la pestaña **Body → raw → JSON** y enviar:

```json
{
  "name": "Autor de prueba",
  "email": "autor@test.com",
  "bio": "Autor creado para testing"
}
```

Presionar **Send**.

Respuesta esperada:

```json
{
  "id": 2,
  "name": "Autor de prueba",
  "email": "autor@test.com",
  "bio": "Autor creado para testing",
  "created_at": "2026-03-16T12:10:00.000Z"
}
```

---

### 5️⃣ Probar otros endpoints

También se pueden probar:

- Obtener autor por ID  
- Actualizar un autor  
- Eliminar un autor  
- Crear y consultar posts  

Ejemplo:

```
GET /api/posts
GET /api/posts/{id}
POST /api/posts
DELETE /api/posts/{id}
```

---

### 6️⃣ Verificación de respuestas

Al enviar la solicitud, Postman mostrará:

- **Status code** (200, 201, 400, 404, etc.)
- **Tiempo de respuesta**
- **Cuerpo de la respuesta (JSON)**

Esto permite verificar que los endpoints funcionan correctamente.

---

## Uso de IA

En el proyecto se utilizaron herramientas de **Inteligencia artificial** para el desarrollo y aprendizaje 

La ia fue utilizada como **herramienta de asistencia**

---

### Herramientas utilizadas 

- Chatgpt: Usada para consultas sobre errores y archivos de documentacion

- Claude: Usada para enseñar codigo 

---

## Claud usada para aprender testing

![Claud usada para aprender testing](./img/Claude%201.png)

![Claud usada para aprender testing](./img/claude%202.png)

![Claud usada para aprender testing](./img/Claude%203.png)

---

## ChatGPT usada para escirbir archivo openapi

![ChatGPT usada para escribir archivo open api](./img/ChatGPT%201.png)

![ChatGPT usada para escribir archivo open api](./img/ChatGPT%202.png)

---

## Clude para resolver errores de codigo

![Claude usada para resolver errores](./img/uso%20de%20IA-ayuda%20a%20corregir%201.png)

![Claude usada para resolver errores](./img/uso%20de%20IA-ayuda%20a%20corregir%202.png)

![Claude usada para resolver errores](./img/uso%20de%20IA-ayuda%20a%20corregir%203.png)

---

## 👤 Autor

Proyecto desarrollado por:

**Maximo Galvez Landers**