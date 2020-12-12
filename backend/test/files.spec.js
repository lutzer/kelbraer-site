const { convertImage } = require('./../utils')
const fs = require('fs')
var sizeOf = require('image-size');
const { expect } = require('chai');

describe('Util function tests', () => {

  it('resizeImage() should resize the small side of an image', async () => {
    const filePath = __dirname + '/files/copy.jpg'
    fs.copyFileSync(__dirname + '/files/image.jpg', filePath)
    let newImgPath = await convertImage(filePath, null, 200)

    const dim = sizeOf(newImgPath)
    expect(dim.width).to.equal(200)
  })

  it('resizeImage() should resize the small side of a smaller image', async () => {
    const filePath = __dirname + '/files/copy.jpg'
    fs.copyFileSync(__dirname + '/files/image.jpg', filePath)
    let newImgPath = await convertImage(filePath, null, 2000)

    const dim = sizeOf(newImgPath)
    expect(dim.width).to.equal(2000)
  })

  it('resizeImage() should resize the small side of a rotated image and rotate it back', async () => {
    const filePath = __dirname + '/files/copy.jpg'
    fs.copyFileSync(__dirname + '/files/image-rot.jpg', filePath)
    let newImgPath = await convertImage(filePath, null, 200)

    const dim = sizeOf(newImgPath)
    expect(dim.width).to.equal(200)
  })

})