const Product = require('../models/Product')

module.exports = class ProductController {
  static async showProducts(req, res) {
    const products = await Product.getProducts()
    res.render('products/all', {products})
  }

  static createProduct(req, res) {
    res.render('products/create')
  }

  static createProductPost(req, res) {
    const {name, image, price, description} = req.body


    // check number of bytes in image link
    const numberOfBytesInImageLink = encodeURI(image).split(/%..|./).length - 1;
    if (numberOfBytesInImageLink < 24) {
        image = null
    }

    // ============ solucao acima nao é minha (não estava querendo excluir a img)

    const product = new Product(name, image, price, description)

    product.save()

    res.redirect('/products')
  }

  static async getProduct(req, res) {
    const id = req.params.id

    const product = await Product.getProductById(id)

    console.log(product)
    res.render('products/product', {product})
  }

  static async removeProduct(req, res) {
    const id = req.params.id

    await Product.removeProductById(id)

    res.redirect('/products')
  }
}