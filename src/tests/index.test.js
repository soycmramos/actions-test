import app from '../app.js'
import request from 'supertest'
import { assert } from 'chai'


describe('GET /', () => {
  it('should get a success response with code 200 and title "OK" and a "Hello world" JSON message', () => {
    request(app)
      .get('/')
      .expect('Content-Type', /applicacion\/json/)
      .expect(200)
      .expect(res => {
        assert.exists(res.body)
        assert.isObject(res.body)
        assert.strictEqual(res.body.mgs, 'Hello world')
      })
  })
})