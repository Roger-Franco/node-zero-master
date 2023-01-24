const User = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class AuthController {
  static async login(req, res) {
    res.render('auth/login')
  }

  static async register(req, res) {
    res.render('auth/register')
  }

  static async registerPost(req, res) {
    const {name, email, password, confirmpassword} = req.body

    // password match validation
    if(password !== confirmpassword) {
      req.flash('message', 'As senhas não conferem, tente novamente')
      res.render('auth/register')

      return
    }

    const checkIfUserExists = await User.findOne({where:{email:email}})

    if(checkIfUserExists) {
      req.flash('message', 'O e-mail já está em uso!')
      res.render('auth/register')

      return
    }

    // create a password
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = {
      name, 
      email,
      password: hashedPassword
    }

    // parei em 6 minutos... a mensagem de cadastro realizado com sucesso nao esta funcionando, deve ser algum problema no redirect

    try {
      const createdUser = await User.create(user)
      // initialize session
      req.session.userid = createdUser.id

      req.flash('message', 'Cadastro realizado com sucesso!')

      req.session.save(() => {
        res.redirect('/') // com redirect nao quer funcionar
      })
    } catch (error) {
      console.log(err)
    }
  }
}