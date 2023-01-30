const mongoose = require('mongoose')

async function main() {
  await mongoose.connect("mongodb://localhost:27017/testemongodb2")
  console.log('Conectou ao MongoDB com Mongoose!!');
}

mongoose.set('strictQuery', true) // => console pediu isso para : to suppress this warning

main().catch((err) => console.log(err))

module.exports = mongoose
