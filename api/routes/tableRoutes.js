import express from 'express';
import config from '../database/config';
import queries from '../database/queries';

const router = express.Router();
const database = config.retrieveConnection();


router.get('/:id',(req,res,next)=>{


});
router.get('/',(req,res,next)=>{
    
});
router.post('/',(req,res,next)=>{
    
    database.then(connection => {
        return connection.queryAsync(queries.createTableQuery(),[req.body.tablename]);
    })
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log(err));
    

});  
router.put('/:id',(req,res,next)=>{
  
});
router.delete('/:id',(req,res,next)=>{
    
   
    
});

module.exports = router;