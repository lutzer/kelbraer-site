const { expect } = require('chai')
const chai = require('chai')
const chaiHttp = require('chai-http')
const _ = require('lodash')
const fs = require('fs')
chai.use(chaiHttp);

describe('Api Route Tests', () => {
  //SEND TEXT
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

   //UPLOAD IMAGES
   it('POST /api/send should upload an image', async () => {
     let result = await chai.request('http://localhost:3000').post('/api/send/img')
       .attach('image', fs.readFileSync(__dirname + '/files/image.jpg'), 'image.jpg')
      expect(result).to.have.status(200);  
  })
  
  it('POST /api/send should return 400 if no img sent', async () => {
    let result = await chai.request('http://localhost:3000').post('/api/send/img')
    expect(result.statusCode).to.equal(400)
  }) 

  it('POST /api/send should return 400 if pdf sent', async () => {
    let result = await chai.request('http://localhost:3000').post('/api/send/img')
      .attach('image', fs.readFileSync(__dirname + '/files/doc.pdf'), 'doc.pdf')
    expect(result.statusCode).to.equal(400)
  }) 

  //SUBMISSIONS
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