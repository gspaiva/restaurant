import express from 'express';


const router = express.Router();

router.get('/',(req,res,next)=>{
    res.json({
        response : 'orders'
    })
});
router.post('/',(req,res,next)=>{
    res.json({ 
        response : 'create orders'
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