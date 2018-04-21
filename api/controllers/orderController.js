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

const orderController = {
    listOrder: listOrder,
    findBy : findBy,
    createOrder : createOrder
}

module.exports = orderController;
    