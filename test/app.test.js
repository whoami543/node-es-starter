import request from 'supertest'
import app from '../src/server'

describe('GET /random', () => {
  it('should return 404', async () => {
    const res = await request(app).get('/random')
    expect(res.status).toBe(404)
  })
})
