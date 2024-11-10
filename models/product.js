 
let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 }
  ];
  
  const getAllProducts = () => products;
  
  const getProductById = (id) => products.find(product => product.id === id);
  
  const addProduct = (newProduct) => {
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    const product = { id, ...newProduct };
    products.push(product);
    return product;
  };
  
  const updateProduct = (id, updatedProduct) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      return products[index];
    }
    return null;
  };
  
  const deleteProduct = (id) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      return products.splice(index, 1)[0];
    }
    return null;
  };
  
  module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
  };
  