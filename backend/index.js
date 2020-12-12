const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const multer = require('@koa/multer')
const path = require('path');
const { compileFunction } = require('vm');
const app = new Koa();
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/imgData'))
},
  filename: function (req, file, cb) {
   let type = file.originalname.split('.')[1]
   cb(null, `${file.fieldname}-${uuidv4()}.${type}`)
}

})


const upload = multer(
  {
   storage: storage,

   fileFilter: (_req, file, cb) => {
     console.log("I am fiile", file.mimetype)
     if(file.mimetype == "image/png" || file.mimetype == "image/jpg" ||  file.mimetype == "image/jpeg") {
      cb(null, true);
     }
     else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    
     }
   }
  })


/*function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
} */




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
  console.log('ctx.request.file', ctx.request.file);
  console.log('ctx.file', ctx.file);
  console.log('ctx.request.body', ctx.request.body);
  ctx.body = 'done';  
 
})

router.get('/submissions', (ctx) => {
  ctx.body = submissions
})

app.use(router.routes())

app.listen(3000);



