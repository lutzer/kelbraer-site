const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const multer = require('@koa/multer')
const path = require('path');
const { v4 : uuidv4 } = require('uuid');
const { convertImage } = require('./utils')

const app = new Koa();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/imgData'))
  },
  filename: function (req, file, cb) {
    let type = file.originalname.split('.')[1]
    cb(null, `${file.fieldname}-${uuidv4()}.${type}`)
  }
})


const upload = multer({
  storage: storage,
  fileFilter: (_req, file, cb) => {
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg" ||  file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
})

const router = new Router({
  prefix: '/api'
})

app.use(koaBody())
const submissions = []

// setup routes
router.post('/send/text', (ctx) => {
  const data = ctx.request.body
  if (!data.text)
    ctx.throw('Request body must contain text field', 400)
  else {
    submissions.push({ text: data.text })
    ctx.body = 'Submission received.'
  }
})
//IMAGE
router.post('/send/img',
  upload.single("image"),
 ctx => {
  if (!ctx.file) {
    ctx.throw('Error uploading file', 400)
  } else {
    convertImage(ctx.file.path, null, 384)
    ctx.body = 'File uploaded.'
  }
})

router.get('/submissions', (ctx) => {
  ctx.body = submissions
})

app.use(router.routes())

app.listen(3000);



