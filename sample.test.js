const request = require('supertest')
const app = require('./server')
describe('Post Endpoints', () => {
it('upload file test', async () => {
    const res = await request(app)
        .post('/api/csv/upload')
        .attach('file', './documentation/file_samples/TEST1.csv')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('recordsUpload')
    })

  it('should get data object', async () => {
    const res = await request(app)
      .get('/api/csv/tutorials')
    //   .send({
    //     userId: 1,
    //     title: 'test is cool',
    //   })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
  })
})
afterAll(done => {
    app.close();
    done();
});