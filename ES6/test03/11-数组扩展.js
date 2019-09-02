let arr=[1,2,3];
// //改变原数组
// console.log(arr.fill(9));//[9,9,9]
// console.log(arr);//[9,9,9]
// console.log(arr.includes(22));
//数组实例的遍历 keys values entries
let keys=arr.keys();
console.log(keys);
let values=arr.values();
console.log(values);
let entries=arr.keys();
console.log(entries);
for(let [key,value] of entries){
	console.log(key,value);
}