//Array.from()
//Array.of()
let temp={
	'0':'hello','1':'world',length:2
}
console.log(Array.from(temp));
console.log(Array.of(10));
console.log(Array.of(10,11));
let arr=[24,45,24,6,45,24];
//new Set()方法作用将数组转成去重对象
let set=new Set(arr);
console.log(set);
console.log(Array.from(set));
console.log([...set]); 
//数组去重
console.log([...new Set(arr)]);

//find findIndex迭代方法,查找回调函数，找到一个便返回
let result=arr.find((item,index)=>{
	return index>4;
})
console.log(result,'-----');
let result2=arr.findIndex((item)=>{
	return item>40;
})
console.log(result2);

console.log(new Array(10));
console.log(new Array(10,11));


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var ret1 = arr1.find((value, index, arr) => {
  return value > 4;
})

var ret2 = arr1.find((value, index, arr) => {
  return value > 14;
})
//"%s","%d"只管最接近他的那个
console.log('%s', ret1)//5
console.log('%s', ret2)//undefined
