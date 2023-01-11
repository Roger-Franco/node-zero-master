const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
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