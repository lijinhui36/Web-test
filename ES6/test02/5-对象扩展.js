let name="zhangsan";
let age=12;
let gender='男';
let obj={
	name,
	age,
	gender,
	sayName(){
		console.log('hello');
	}
	// sayName:()=>{
	// 	console.log('hello');
	// }
}
// let obj={
// 	name:name,
// 	age:age,
// 	gender:gender
// }
console.log(obj)

let obj2={
	name,
	age,
	gender,
	sayHi(){
		console.log('hi');
	}
}
obj2.sayHi();

//属性名可以用表达式
//给对象中添加10个属性，以name为前缀，以index为后缀
let obj3={};
for(let i=1;i<11;i++){
		obj3['name'+i]=i;
	}
console.log(obj3);

let obj4={
	['name'+name]:'hello'
}
let obj5={
	[name]:'hello'
}
console.log(obj4,obj5);

console.log(obj2.sayHi.name);
function test(){};
console.log(test.name);
