let obj={
	name:'zhangsan',
	age:12,
	gender:'男'
}
//for-in
//返回所有属性名组成数组
// let keys=Object.keys(obj);
// console.log(keys);
// //返回所有属性值组成数组
// let values=Object.values(obj);
// console.log(values);
//返回key-value键值对组成的数组
let entries=Object.entries(obj);
console.log(entries);
//for-of遍历
for(let [key,value] of entries){
	console.log(key,value);
}
//遍历数组
var arr=['hello','hi'];
for(let item of arr){
	console.log(arr);
}
//遍历对象
for(let [key,value] of Object.entries(obj)){
	console.log(key,value);
}