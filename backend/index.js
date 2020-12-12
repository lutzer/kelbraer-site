const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const multer = require('@koa/multer')
const path = require('path');
const { v4 : uuidv4 } = require('uuid');
const { convertImage } = require('./utils')
const { getDatabase } = require('./database')
const { config } = require('./config')
const serve = require('koa-static');
const mount = require('koa-mount');

const app = new Koa();

// file upload
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, config.imageFolder)
    },
    filename: function (req, file, cb) {
      let type = file.originalname.split('.')[1]
      cb(null, `${file.fieldname}-${uuidv4()}.${type}`)
    }
  }),
  fileFilter: (_req, file, cb) => {
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg" ||  file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
})

// parse json bodies
app.use(koaBody())

// serve images
app.use(mount(config.imageRoute, serve(config.imageFolder)))

const router = new Router({
  prefix: '/api'
})

// setup routes
router.post('/send/text', async (ctx) => {
  const data = ctx.request.body
  if (!data.text)
    ctx.throw('Request body must contain text field', 400)
  else {
    const db = await getDatabase()
    db.get('submissions').push({ text: data.text, createdAt: Date.now() }).write()
    ctx.body = 'Submission received.'
  }
})

router.post('/send/img', upload.single("image"), async (ctx) => {
  if (!ctx.file) {
    ctx.throw('Error uploading file', 400)
  } else {
    const db = await getDatabase()
    db.get('submissions').push({ image: ctx.file.filename, createdAt: Date.now() }).write()
    convertImage(ctx.file.path, null, 384)
      .catch((err) => console.error(err))
      .then(() => console.info(`image ${ctx.file.path} converted.`))
    ctx.body = { file : ctx.file.filename}
    
  }
})

router.get('/submissions', async (ctx) => {
  const db = await getDatabase()
  const submissions = db.get('submissions').value()
  ctx.body = submissions.map( (entry) => {
    if (entry.image) {
      entry.image = config.imageRoute + entry.image
    }
    return entry
  })
})

app.use(router.routes())

app.listen(3000);



