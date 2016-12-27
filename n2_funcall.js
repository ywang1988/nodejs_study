var http = require('http');
var otherfun = require('./modules/otherfuns.js');
http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type' : 'text/html;    charset=utf-8'
	});
	if (request.url !== "/favicon.ico") { //清除第2此访问
		//otherfun.fun2(response);
		otherfun['fun3'](response);
		//otherfun(response);
		//fun1(response);
		response.end('');
	}
}).listen(8000);
console.log('Server    running    at    http://127.0.0.1:8000/');


//---普通函数
function fun1(res) {
	res.write("你好,我是fun1");
}
