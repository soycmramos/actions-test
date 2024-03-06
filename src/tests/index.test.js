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
				assert.exists(res.body.env_variables)
				assert.isObject(res.body.env_variables)
				assert.exists(res.body.env_variables.PORT)
				assert.isString(res.body.env_variables.PORT)
				assert.strictEqual(res.body.env_variables.PORT, '3000')
				assert.exists(res.body.env_variables.JWT_SECRET)
				assert.isString(res.body.env_variables.JWT_SECRET)
				assert.strictEqual(res.body.env_variables.JWT_SECRET, 'shhh')
			})
	})
})
