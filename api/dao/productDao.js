import config from '../database/config';
const database = config.retrieveConnection();

const createProduct = (product) => {
    
    return database.then(connection => {
        return connection.queryAsync( `INSERT INTO products 
        (value,name,status) values (?, ?, ?)`, 
        [product.value, product.name, product.status]);
    });
}

const list = (product) => {
    return database.then(connection => {
        return connection.queryAsync( `SELECT * FROM products`);
    });
}

const updateProduct = (product) => {

    return database.then(connection => {
        return connection.queryAsync( `UPDATE products
        SET value = ?, status = ?, name = ?
        WHERE id = ?
        `, [product.value, product.status, product.name, product.id]);
    });

}

const productDao = {
    createProduct : createProduct,
    list : list,
    updateProduct : updateProduct
}



module.exports = productDao;