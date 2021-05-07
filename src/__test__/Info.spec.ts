import request from 'supertest';

import app from '../shared/infra/http/index';

describe('Info', () => {
    it('should be able to list information to state', async () => {
        await request(app).get('/info').send({
            state: 'nova tarefa',
            dateStart: 'tarefa de teste',
            dateEnd: 1
        });

        const response = await request(app).get('/info');

        expect(response.status).toBe(200);
        // expect(response.body).toMatchObject(
        //     expect.objectContaining({
        //         name: 'nova tarefa',
        //         description: 'tarefa de teste',
        //         user_id: 1
        //     }),
        // );
    });
});
