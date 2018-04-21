import productDao from '../dao/productDao';


const listProducts = () => {
    
    return productDao.list();
};

const createProduct = (product) => {
        return productDao.createProduct(product);
};

const updateProduct = (product) => {
    return productDao.updateProduct(product);
};

const productController = {
   listProducts : listProducts,
   createProduct : createProduct,
   updateProduct : updateProduct

}

module.exports = productController;