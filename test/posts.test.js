import { describe, test, expect, afterAll, beforeAll } from 'vitest';
import request from 'supertest';
import app from '../server.js';
import pool from '../db/config.js';



describe('GET /api/posts', () => {

    test('Esta publicado', async () => {
        const response = await request(app).get('/api/posts');
        expect(response.status).toBe(200);
    });

});

describe('GET /api/posts/id', () => {

    test('Devuelve status 200', async () => {
        const response = await request(app).get(`/api/posts/${testAuthorId}`);
        expect(response.status).toBe(200);
    });

    test('ID invalido', async () => {
        const response = await request(app).get('/api/posts/abc');
        expect(response.status).toBe(400);
    });

    test('Autor no encontrado', async () => {
        const response = await request(app).get('/api/posts/9999');
        expect(response.status).toBe(404);
    });


});


describe('POST /api/posts', () => {

    test('Enviado correctamente', async () => {
        const response = await request(app).post('/api/posts/').send({
            name: 'Juan',
            email: `juan${Date.now()}@mail.com`
        });
        testPostAuthorId = response.body.id;
        expect(response.status).toBe(201);
    });

    test('Nombre y email requeridos', async () => {
        const response = await request(app).post('/api/posts').send({ name: 'juan' });
        expect(response.status).toBe(400);
    });

    test('Formato de email invalido', async () => {
        const response = await request(app).post('/api/posts').send({ name: 'juan', email: 'juangmail.com' });
        expect(response.status).toBe(400);
    });

});

describe('PUT /api/posts/id', () => {

    test('Enviado correctamente', async () => {
        const response = await request(app).put(`/api/posts/${testAuthorId}`).send({name: 'maximo'});
        expect(response.status).toBe(200);
    });

    test('Autor no encontrado', async () => {
        const response = await request(app).put('/api/posts/999').send({id: 999});
        expect(response.status).toBe(404);
    });

    test("Id  invalido", async () => {
        const response = await request(app).put('/api/posts/abc').send({author: 'abc'});
        expect(response.status).toBe(400);
    });

});

describe('DELETE /api/posts/id', () =>{
    
    test('Eliminado exitoso', async () => {
        const response = await request(app).delete(`/api/posts/${testAuthorId}`).send({name: 'Juan'});
        expect(response.status).toBe(200);
    });
    
    test("Id  invalido", async () => {
        const response = await request(app).delete('/api/posts/abc').send({author: 'abc'});
        expect(response.status).toBe(400);
    });

    test('Autor no encontrado', async () => {
        const response = await request(app).delete('/api/posts/999').send({id: 999});
        expect(response.status).toBe(404);
    });
    
});

afterAll(async () => {
    await pool.end();
});