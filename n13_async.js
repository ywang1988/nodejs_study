var async = require('async');
function fun1() {
	var ii = 0;
	setInterval(function () {
		console.log("fun1=" + new Date());
		ii++;
		if (ii == 3) {
			clearInterval(this);
		}
	}, 1000);

}

function fun2() {
	var jj = 0;
	setInterval(function () {
		console.log("fun2=" + new Date());
		jj++;
		if (jj == 3) {
			clearInterval(this);
		}
	}, 1000);
}

//fun1();
//fun2();

function exec() {
	/*
	// 串行无关联
	async.series({
		one: function (done) {
			var ii = 0;
			setInterval(function () {
				console.log("fun1=" + new Date());
				ii++;
				if (ii == 3) {
					clearInterval(this);
					done(null, "one结束");
				}
			}, 1000);
		},
		two: function (done) {
			var jj = 0;
			setInterval(function () {
				console.log("fun2=" + new Date());
				jj++;
				if (jj == 3) {
					clearInterval(this);
					done(null, "two结束");
				}
			}, 1000);
		}
	}, function (err, rs) {
		console.log(err);
		console.log(rs);
	});
	
	//并行无关联
	async.parallel({
		one: function (done) {
			var ii = 0;
			setInterval(function () {
				console.log("fun1=" + new Date());
				ii++;
				if (ii == 3) {
					clearInterval(this);
					done(null, "one结束");
				}
			}, 1000);
		},
		two: function (done) {
			var jj = 0;
			setInterval(function () {
				console.log("fun2=" + new Date());
				jj++;
				if (jj == 3) {
					clearInterval(this);
					done(null, "two结束");
				}
			}, 1000);
		}
	}, function (err, rs) {
		console.log(err);
		console.log(rs);
	});
	*/
	
	// 串行有关联
	async.waterfall([
		function (done) {
			var ii = 0;
			setInterval(function () {
				console.log("fun1=" + new Date());
				ii++;
				if (ii == 3) {
					clearInterval(this);
					done(null, "one结束");
				}
			}, 1000);
		},
		function (pre, done) {
			var jj = 0;
			setInterval(function () {
				console.log(pre+"=" + new Date());
				jj++;
				if (jj == 3) {
					clearInterval(this);
					done(null, "two结束");
				}
			}, 1000);
		}
	], function (err, rs) {
		console.log(err);
		console.log(rs);
	});
}

exec();

console.log("主程序执行完毕");
