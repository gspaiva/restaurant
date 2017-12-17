import OrderModel from '../models/orderModel';

class OrderController{
    constructor(){
    }
    get(id){
        return OrderModel.get(id);
    }
    read(){
        return OrderModel.read();
    }
    create(order){
        /* validation */
        /* pass to model to persist the data */
         return OrderModel.create(order);
    }
    edit(id,order){
        return OrderModel.edit(id,order);
    }
    delete(id){
        return OrderModel.delete(id);
    }
    read(){
        return OrderModel.read();
    }
}
module.exports =  new OrderController();