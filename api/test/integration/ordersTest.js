describe('Orders routes',()=>{
    const defaultOrder = {
        id : 1,
        itens : ['fish','rice','potato']
    };
    describe('Route GET /orders',()=>{
        it('should return a list of orderes',(done)=>{
            request
                .get('/order')
                .end((err,res) =>{
                    expect(res.body[0].itens).to.be.eql(defaultOrder.itens);
                    expect(res.body[0].id).to.be.eql(defaultOrder.id);
                    done(err);
                })
        })
    });
});