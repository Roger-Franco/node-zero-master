const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

  const user = {
    name: 'Roger',
    surname: 'Frank',
    age: '43'
  }

  const filho = 'Thu'

  res.render('home', { user: user, filho })
})

app.listen(3000, () => {
  console.log('App funcionando!');
})