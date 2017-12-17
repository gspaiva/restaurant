'use strict';
import Sequelize from 'sequelize';
import config from '../config';

class OrderModel {

    constructor(){
        this.connection = config.database;
    }
    getModel(){
        return this.connection.define('Order',{
            itemname: Sequelize.STRING,
            itemprice: Sequelize.FLOAT
        });
    }

    create(order){
        const Order = this.getModel();
        return this.connection.sync()
            .then(()=> Order.create({
                itemname : order.itemname,
                itemprice: order.itemprice
            }));
            
    }
    read(){
        const Order = this.getModel();
        return Order.findAll();
    }
    get(id){
        const Order = this.getModel();
        return Order.findOne(
            {
                where : {id: parseInt(id)}
            }
        )
    }
    edit(id,order){
        const Order = this.getModel();
        return Order.update(order,{where: {id: parseInt(id)}})
    }
    delete(id){
        const Order = this.getModel();
        return Order.destroy({
            where : {id : id}
        })
    }
}


module.exports = new OrderModel();
