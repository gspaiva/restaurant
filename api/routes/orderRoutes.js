import express from 'express';
import orderController from '../controllers/orderController';

const router = express.Router();


router.get('/:id',(req,res,next)=>{
    orderController.findBy(req.params.id).then(result => {
        if(result.length > 0){
            res.json({
                data : result[0]
            })
        }
        else{
            res.json({
                data : {}
            })
        }
        
    })
    .catch(err => res.json({
        err : err
    }));
});
router.get('/',(req,res,next)=>{
    
    orderController.listOrder()
        .then(result => {
            res.json({
                data : result
            })
        })
        .catch(err => res.json({
            err : err
        }));
});
router.post('/',(req,res,next)=>{
    orderController.createOrder(req.body)
        .then(result => {

            res.json({
                data : result
            })

        })
        .catch(err => res.json({
            err : err
        }));

});  
router.put('/:id',(req,res,next)=>{
  
});
router.delete('/:id',(req,res,next)=>{
    
   
    
});




module.exports = router;