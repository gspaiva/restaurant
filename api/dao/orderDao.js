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

const findOrderByIdTable = (idtable) =>{
    return database.then(connection => {
        return connection.queryAsync( `SELECT count(P.name) as count, P.name,O.status,O.table_id FROM orders O
            INNER JOIN orders_products OP on OP.id_orders = O.id
            INNER JOIN products P on P.id = OP.id_products
            where
                O.table_id = ? and O.status = 1
            group by  P.name, O.status,O.table_id
        `, [idtable]);
    });
}

const createOrder = (order) => {
    return database.then(connection => {
        return connection.queryAsync( `INSERT INTO orders (value,table_id,status) values (?, ?, ?)`, [order.value, order.table_id, order.status]);
    });
}

const addProductToOrder = (idOrder, idProduct) => {

    return database.then(connection => {
        return connection.queryAsync(`INSERT INTO orders_products (id_orders,id_products) values (?,?)`, [idOrder,idProduct]);
    })
    .then(result => {
        return updateOrderValue(idOrder);
    });
}

const updateOrderValue  = (idOrder) => {
    return database.then(connection => {
        return connection.queryAsync(
            `UPDATE orders o, (select sum(p.value) as newvalue from orders o 
            inner join orders_products op on op.id_orders = o.id
            inner join products p on op.id_products = p.id
            where o.id = ?) src 
            SET o.value = src.newvalue where o.id=? `, [idOrder,idOrder]);
    });
    
}

const closeOrder = (idOrder) => {
    return database.then(connection => {
        return connection.queryAsync(`update orders set status = 0 where id = ?`, [idOrder]);
    });
}

const orderDao = {
    list: list,
    findOrderById : findOrderById,
    createOrder : createOrder,
    addProductToOrder : addProductToOrder,
    closeOrder : closeOrder,
    findOrderByIdTable : findOrderByIdTable

}



module.exports = orderDao;
