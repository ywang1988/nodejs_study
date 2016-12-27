/*
function  controller(res){      
    res.write("发送");      
    call(res);          
}      
function  call(res){      
    console.log('call');      
}      
module.exports  =  controller;    //只支持一个函数      
   */    
    
//支持多个函数      
module.exports={      
    fun2:function(res){      
		res.write("我是fun2");      
    },      
    fun3:function(res){      
		res.write("我是fun3");        
    }      
}      

   