
const chalk = require('chalk');
const inquirer = require('inquirer')

inquirer
  .prompt([
    { name: 'nome', message: 'Qual o seu nome?' },
    { name: 'idade', message: 'Qual a sua idade?' },
  ]).then((answers) => {

    console.log(chalk.bgYellow.black(`O seu nome é ${answers.nome} e sua idade ${answers.idade} anos`));
    x = 2;
  }).catch((err) => {
    console.log(`Erro: ${err}`);
  })