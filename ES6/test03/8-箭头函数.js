//普通函数
function test(){
	console.log(this);
}
let test2=()=>{
	//箭头函数内部没有自己的this，this指向箭头函数声明时的父作用域中的this
	console.log(this);
}
test2();
test();//global window
// console.log(this);//module.exports
// console.log(this===module.exports);//true
let obj={
	test,
	test2
}
obj.test();//obj
obj.test2();//{}

//箭头函数内部的arguments不保存实参