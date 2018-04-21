import config from '../database/config';
const database = config.retrieveConnection();



const list = () => {
    return database.then(connection => {
        return connection.queryAsync( `SELECT * FROM orders O
            INNER JOIN tables T on T.id = O.table_id
            INNER JOIN orders_products OP on OP.id_orders = O.id
            INNER JOIN products P on P.id = OP.id_products
        `);
    });

};

const findOrderById = (id) => {
    return database.then(connection => {
        return connection.queryAsync( `SELECT * FROM orders O
            INNER JOIN tables T on T.id = O.table_id
            INNER JOIN orders_products OP on OP.id_orders = O.id
            INNER JOIN products P on P.id = OP.id_products
            WHERE O.id = ?
        `, [id]);
    });
};

const createOrder = (order) => {
    return database.then(connection => {
        return connection.queryAsync( `INSERT INTO orders (value,table_id,status) values (?, ?, ?)`, [order.value, order.table_id, order.status]);
    });
}

const orderDao = {
    list: list,
    findOrderById : findOrderById,
    createOrder : createOrder
}



module.exports = orderDao;
