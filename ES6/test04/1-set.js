//Set集合
let set=new Set();
console.log(set);// Set{}

//size属性返回个数
console.log(set.size);// 0
// 添加数据
set.add(1);
set.add(1);
set.add('hello');
console.log(set);// Set{1,'hello'}
console.log(set.size);// 2
// //删除数据
// set.delete(1);
// console.log(set);// Set{'hello'}
// //清空数据
// set.clear();
// console.log(set);// Set{}
//遍历
//在set中key和value是一样的，都是value
let keys=set.keys();
console.log(keys);
let values=set.values();
console.log(values);
console.log('-----------------')
while(true){
	let result=values.next();
	if(result.done){
		break;
	}else{
		console.log(result.values);
	}
}
// console.log(values.next());
// console.log(values.next());
// console.log(values.next());
// for(let value of values){
// 	console.log(values);
// }
console.log('-----------------')
let entries=set.entries();
console.log(entries);
//Iteration


//使用forEach
set.forEach(function(value,key,set){
	console.log(value,key,set);
})
