//Object.assign()
//对象的浅复制，对象的合并
let obj={
	name:'zhangsan',
	friends:[],
	count:{}
}
// 浅复制
// let obj2=obj;

// let obj2=Object.assign(obj);
// console.log(obj2===obj);//true
//对象的合并
let obj2={
	age:12
}
let obj3=Object.assign({},obj);
console.log(obj);
console.log(obj3);
console.log(obj3===obj);//false
console.log(obj3.friends===obj.friends);//true
console.log(obj3.count===obj.count);//true
//对象的合并
let obj4={};
Object.assign(obj4,obj,obj2);
console.log(obj4);


