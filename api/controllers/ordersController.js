'use strict';

function OrdersController (){
    var message = 'teste';

    function GetMessage(){
        return message;
    }

    return {
        GetMessage : GetMessage
    }

}

module.exports = OrdersController;