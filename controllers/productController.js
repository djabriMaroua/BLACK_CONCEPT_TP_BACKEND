 
const Product = require('../models/product');

const listProducts = (req, res) => {
  res.status(200).json(Product.getAllProducts());
};

const getProduct = (req, res) => {
  const product = Product.getProductById(parseInt(req.params.id));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

const addProduct = (req, res) => {
  const newProduct = Product.addProduct(req.body);
  res.status(201).json(newProduct);
};

const editProductById = async (req, res) => {
  const productId = parseInt(req.params.id); // Convert the ID from string to integer
  const updateData = req.body;

  // Use the updateProduct method from the model
  const updatedProduct = Product.updateProduct(productId, updateData);

  if (!updatedProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(updatedProduct);
};

const deleteProduct = (req, res) => {
  const deletedProduct = Product.deleteProduct(parseInt(req.params.id));
  if (deletedProduct) {
    res.status(200).json(deletedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

module.exports = {
  listProducts,
  getProduct,
  addProduct,
  editProductById,
  deleteProduct
};
