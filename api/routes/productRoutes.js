import express from 'express';
import productController from '../controllers/productController';

const router = express.Router();

router.get('/:id',(req,res,next)=>{
    
});
router.get('/',(req,res,next)=>{
    
    productController.listProducts()
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
    productController.createProduct(req.body)
        .then(result => {
            res.json({
                data : result
            })
        })
        .catch(err => res.json({
            err : err
        }));

});  
router.put('/',(req,res,next)=>{
  
    productController.updateProduct(req.body)
        .then( result => {
            res.json({
                data : result
            })
        })
        .catch( err => res.json({
            err : err
        }));


});
router.delete('/:id',(req,res,next)=>{
    
   
    
});




module.exports = router;