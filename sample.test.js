const request = require('supertest')
const app = require('./server')
describe('Post Upload Endpoint', () => {
    it('try to upload without file', async () => {
        const res = await request(app)
            .post('/api/csv/upload')
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('message')
        const {message} =res.body;
        expect(message).toBe('Please upload a CSV file!');
    })
    it('upload wrong file', async () => {
        const res = await request(app)
            .post('/api/csv/upload')
            .attach('file', './testing_files/invalid_file.jpeg')
        expect(res.statusCode).toEqual(500)
    })
    it('upload file test 1', async () => {
        const res = await request(app)
            .post('/api/csv/upload')
            .attach('file', './documentation/file_samples/TEST1.csv')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('recordsUpload')
    })
    it('upload file length records test 2', async () => {
        const res = await request(app)
            .post('/api/csv/upload')
            .attach('file', './documentation/file_samples/TEST2.csv')
        expect(res.statusCode).toEqual(200)
        const {recordsUpload} =res.body;
        expect(recordsUpload).toBe(3);
    })
})
describe('Get AllRecords Endpoint', () => {
    it('should get data object', async () => {
        const res = await request(app)
            .get('/api/csv/getall')
            expect(res.statusCode).toEqual(200)
            expect(res.body).toHaveProperty('data')
        })
});
afterAll(done => {
    app.close();
    done();
});