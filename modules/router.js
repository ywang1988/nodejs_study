var optfile = require('./optfile');
var url = require('url');
var querystring = require('querystring'); //post需导入

function getCallback(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'text/html;    charset=utf-8'
	});
	function callback(data) {
		res.write(data);
		res.end('');
	}
	return callback;
}

module.exports = {
	login : function (req, res) {
		/*res.writeHead(200, {
		'Content-Type' : 'text/html;    charset=utf-8'
		});
		function callback(data) {
		res.write(data);
		res.end('');
		}*/

		//--------get方式接收参数----------------
		/*
		var rdata = url.parse(req.url, true).query;
		console.log(rdata);
		if (rdata['email'] != undefined) {
		console.log(rdata['email']);
		console.log(rdata['pwd']);
		}
		 */
		//-------post方式接收参数----------------
		var post = ''; //定义了一个post变量，用于暂存请求体的信息
		req.on('data', function (chunk) { //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
			post += chunk;
		});
		//-------注意异步-------------
		req.on('end', function () { //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
			post = querystring.parse(post);
			//console.log('email:' + post['email'] + '\n');
			//console.log('pwd:' + post['pwd'] + '\n');
			//callback = getCallback(req, res);

			var array = ["email","pwd"];
			function callback(data) {
				var dataStr = data.toString();
				for(var i=0;i<array.length;i++) {
					var re = new RegExp("{"+array[i]+"}",'g');
					dataStr = dataStr.replace(re, post[array[i]]);
				}
				
				res.write(dataStr);
				res.end('');
			}
			optfile.readfile("./views/login.html", callback);
		});

	},
	zhuce : function (req, res) {
		/*function callback(data) {
		res.write(data);
		res.end('');
		}*/
		callback = getCallback(req, res);
		optfile.readfile("./views/zhuce.html", callback);
	},
	writefile : function (req, res) {
		/*function callback(data) {
		res.write(data);
		res.end('');
		}*/
		callback = getCallback(req, res);
		optfile.writefile("./views/one.txt", "大家好，才是真的好", callback);
	},
	showimg : function (req, res) {
		res.writeHead(200, {
			'Content-Type' : 'image/jpeg'
		});
		optfile.readImg('./imgs/img.jpg', res);
	}
}
