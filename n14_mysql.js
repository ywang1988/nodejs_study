var mysql  = require('mysql');  //调用MySQL模块
//创建一个connection  
var connection = mysql.createConnection({      
    host: 'localhost',       //主机  
    user: 'root',               //MySQL认证用户名  
    password: 'Pa55Word',        //MySQL认证用户密码  
    database: 'hdmp',  
    port: '3306'                   //端口号  
});
//创建一个connection  
connection.connect(function(err){  
    if(err){         
        console.log('[query] - :'+err);  
        return;  
    }  
    console.log('[connection connect]  succeed!');  
}); 

//----插入
/*
var userAddSql = 'insert into user (uname,pwd) values(?,?)';
var param = ['ccc','ccc'];
connection.query(userAddSql,param,function(err,rs){
    if(err){
        console.log('insert err:',err.message);
        return;
    }
        console.log('insert success');
});
*/
//执行查询  
connection.query('select * from staffinfo where staffid=?',[1376], function(err, rs) {  
    if (err) {  
        console.log('[query] - :'+err);  
        return;  
    } 
    for(var i=0;i<rs.length;i++){
        console.log('The staffid is: ', rs[i].STAFFID); 
        console.log('The staffname is: ', rs[i].STAFFNAME); 
        console.log('The staffcode is: ', rs[i].STAFFCODE); 
    }
});   

//关闭connection  
connection.end(function(err){  
    if(err){ 
        console.log(err.toString());
        return;  
    }  
    console.log('[connection end] succeed!');  
});