import express from 'express';
import OrderController from '../controllers/OrderController';

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.json(OrderController.get())
});
router.post('/',(req,res,next)=>{
    res.json({ 
        response : OrderController.postOrders(req)
    })
});  
router.put('/:id',(req,res,next)=>{
    res.json({
        response : 'edit order' + req.params.id
    })
});
router.delete('/:id',(req,res,next)=>{
    res.json({
        response : 'delete order' + req.params.id
    })
});

module.exports = router;