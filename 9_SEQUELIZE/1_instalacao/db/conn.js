const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('nodesequelize2', 'root', 'Rog883**#', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()
  console.log('Conectamos com sucesso o Sequelize!');
} catch (error) {
  console.log( 'Não foi possível conectar', error);
}

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   password: 'Rog883**#',
//   database: 'nodemysql',
// })

// module.exports = pool 
module.exports = sequelize 