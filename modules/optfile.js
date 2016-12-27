var fs = require("fs");
module.exports={
	readfile: function(path, callback) {
		fs.readFile(path,  function(err,  data) {
            if  (err)  {
              console.log(err);
			  callback("文件不存在");
            }else{
              console.log(data.toString());
			  callback(data)
            }
        });
        console.log("异步方法执行完毕");
	},
	readfileSync: function(path) {
		var  data  =  fs.readFileSync(path,'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");       
	},
	writefile : function (path, data, callback) { //异步方式
        fs.writeFile(path,  data,  function  (err)  {
            if  (err) {
                throw err;
            }
            console.log('It\'s  saved!');  //文件被保存
			callback("写文件成功！");
          });
    },
    writeFileSync:function(path,data){  //同步方式
        fs.writeFileSync(path,  data);
        console.log("同步写文件完成");
    },
	readImg:function(path,res){
        fs.readFile(path,'binary',function(err, file)  {
            if  (err) {
                console.log(err);
                return;
            }else{
                console.log("输出文件");
                //res.writeHead(200,  {'Content-Type':'image/jpeg'});
                res.write(file, 'binary');
                res.end();
            }
        });
    }
}

   