function User(id, name, age) {
	this.id = id;
	this.name = name;
	this.age = age;
	this.enter=function(){
		console.log(this.name+"走进图书馆");
	}
}   

module.exports = User;

   