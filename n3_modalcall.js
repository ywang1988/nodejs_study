var http = require('http');
var Teacher = require('./modules/Teacher');
http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type' : 'text/html;    charset=utf-8'
	});
	if (request.url !== "/favicon.ico") { //清除第2此访问
		teacher = new Teacher(1, "王二", 20);
		teacher.enter();
		teacher.teach(response);
		response.end('');
	}
}).listen(8000);
console.log('Server    running    at    http://127.0.0.1:8000/');

