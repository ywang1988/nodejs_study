var http = require('http');
var url = require('url');
var router = require('./modules/router');
http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type' : 'text/html;  charset=utf-8'
	});
	if (request.url !== "/favicon.ico") { //清除第2此访问

		if (request.url !== "/favicon.ico") {
			var pathname = url.parse(request.url).pathname;
			//console.log(pathname);
			pathname = pathname.replace(/\//, ''); //替换掉前面的/
			console.log(pathname);
			router[pathname](request, response);
		}
		//response.write('hello,world');
		//optfile.readfile("F:\\nodejs\\n1_study\\views\\login.html", callback);
		//optfile.readfileSync("F:\\nodejs\\n1_study\\views\\login.html");
		//response.end('');//不写则没有http协议尾
	}
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');
