const { promisify } = require('util')
const { exec } = require('child_process')
const sizeOf = require('image-size');

const execCommand = promisify(exec)

// converts an image to have always specified width and rotate if its landscape
const convertImage = async function(srcPath, destPath = undefined, width = 384) {
  destPath = destPath || srcPath
  const dims = sizeOf(destPath)
  // rotate if landscape
  rotate = dims.width > dims.height ? ' -rotate 90' : ''
  await execCommand(`convert ${srcPath} -set colorspace Gray -separate -average -resize "${width}^"${rotate} ${destPath}`)
  return destPath
}

module.exports = { convertImage }