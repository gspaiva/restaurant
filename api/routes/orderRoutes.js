import express from 'express';
import OrderController from '../controllers/OrderController';

const router = express.Router();

router.get('/:id',(req,res,next)=>{
    OrderController.get(req.params.id).then(order =>{
        res.json({
            data: order
        })
    })
});
router.get('/',(req,res,next)=>{
    OrderController.read().then(orders =>{
        res.json({
            data: orders
        })
    })
});
router.post('/',(req,res,next)=>{
    OrderController.create(req.body).then(order =>
        res.json({ 
            data : order.toJSON() 
        })
    );
});  
router.put('/:id',(req,res,next)=>{
    OrderController.edit(req.params.id,req.body).then(order =>{
        res.json({
            data: order   
        })
    })  
});
router.delete('/:id',(req,res,next)=>{
    
    OrderController.delete(req.params.id).then(deletedOrder => {
        res.json({
            success: true,
            message : "The order with id " + req.params.id + " has been deleted"
        })
    }) 
    
});

module.exports = router;