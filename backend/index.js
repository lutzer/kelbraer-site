const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new Koa();
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

router.post('/send/image', (ctx) => {
  ctx.body = '/send'
})

router.get('/submissions', (ctx) => {
  ctx.body = submissions
})

app.use(router.routes())

app.listen(3000);