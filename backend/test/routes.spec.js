const { expect } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const _ = require('lodash')

chai.use(chaiHttp);

describe('Api Route Tests', () => {

  it('POST /api/send should receive text', async () => {
    let result = await chai.request('http://localhost:3000').post('/api/send/text')
      .send({ text : 'Hallo wie gehts?'})
    expect(result.statusCode).to.equal(200)
  })

  it('POST /api/send should send 400 when no text supplied', async () => {
    let result = await chai.request('http://localhost:3000').post('/api/send/text')
      .send({})
    expect(result.statusCode).to.equal(400)
  })

  it('GET /api/submissions should return empty array with no data', async () => {
    let result = await chai.request('http://localhost:3000').get('/api/submissions')
    expect(result.body).to.be.an('array')
  })

  it('GET /api/submission should show received text', async () => {
    const text = "Irgendein text"
    // send text
    await chai.request('http://localhost:3000').post('/api/send/text').send({ text: text})
    // get text
    let result = await chai.request('http://localhost:3000').get('/api/submissions')
    expect(_.last(result.body).text).to.equal(text)
  })

})