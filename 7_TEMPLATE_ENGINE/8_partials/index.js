const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  partialsDir: [ "views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

  const items = ["item a", "item b", "item c"]

  res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.Js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.Js...',
    comments: 4
  }

  res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node JS',
      category: 'JavaScript',
      body: 'Este artigo vai te ajudar a aprender Node.Js...',
      comments: 4
    },
    {
      title: 'Aprender PHP',
      category: 'PHP',
      body: 'Este artigo vai te ajudar a aprender PHP...',
      comments: 4
    },
    {
      title: 'Aprender Python',
      category: 'Python',
      body: 'Este artigo vai te ajudar a aprender Python...',
      comments: 4
    }
  ]
  res.render('blog', {posts})
})

app.get('/', (req, res) => {

  const user = {
    name: 'Roger',
    surname: 'Frank',
    age: '43'
  }

  const filho = 'Thu'

  const auth = false

  const approved = true

  res.render('home', { user: user, filho, auth, approved })
})

app.listen(3000, () => {
  console.log('App funcionando!');
})