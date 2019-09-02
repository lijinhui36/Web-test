let {a,b}={a:1,b:2};
console.log(a,b);
{
	// let {name,age}={
	// 	name:'zhangsan',
	// 	gender:'男',
	// 	age:12
	// }
	// console.log(name,age);//zhangsan 12 
	let {name:Myname,gender:Mygender='男',age:Myage,address:Myaddress='江苏'}={
		name:'zhangsan',
		gender:'男',
		age:12
		//相同部分name是联系Myname与zhangsan的纽带
	}
	console.log(Myname,Mygender,Myage,Myaddress);//zhangsan 12
	// let {x:y=3}={};
	// console.log(y,'----------');
	let {y=3}={undefined};
	console.log(y,'-');
	// let {y:y=3}
}