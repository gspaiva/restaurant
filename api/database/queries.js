const getOrderQuery = () => {
    return "SELECT * FROM orders where id = ?";
}

const getOrderProductQuery = () => {
    return `SELECT * FROM orders_products OP
            INNER JOIN orders O on O.id = OP.id_orders
            INNER JOIN products P on P.id = OP.id_products
            INNER JOIN tables T on O.table_id = T.id
    `;
}

const createOrderQuery = () => {
    return "INSERT INTO orders VALUES (NULL, ? , ?, true)";
}

const createTableQuery = () => {
    return "INSERT INTO tables VALUES (NULL, ?)";
}

const createOrderProduct = () => {
    return "INSERT INTO orders_products VALUES (?, ?)";
}


module.exports = {
    getOrderQuery : getOrderQuery,
    createOrderQuery : createOrderQuery,
    createTableQuery : createTableQuery,
    createOrderProduct : createOrderProduct,
    getOrderProductQuery : getOrderProductQuery
}