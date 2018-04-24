import orderDao from '../dao/orderDao';


const listOrder = () => {
    
    return orderDao.list();
};

const findBy = (id) => {

    return orderDao.findOrderById(id);
};

const createOrder = (order) => {
    
        return orderDao.createOrder(order);
};

const addProductToOrder = (idOrder, idProduct) =>{
    return orderDao.addProductToOrder(idOrder, idProduct);
}
const closeOrder = (idOrder) => {
    return orderDao.closeOrder(idOrder);
}
const findOrderByIdTable = (idtable) => {
    return orderDao.findOrderByIdTable(idtable);
}

const orderController = {
    listOrder: listOrder,
    findBy : findBy,
    createOrder : createOrder,
    addProductToOrder : addProductToOrder,
    closeOrder : closeOrder,
    findOrderByIdTable : findOrderByIdTable
}

module.exports = orderController;
    