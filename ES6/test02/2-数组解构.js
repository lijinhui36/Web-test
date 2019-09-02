let [a, b,c,...d]=[1,2,3,4,5,6,7];
console.log(a,b,c,d);
//1,2,3
let result=Math.max(2,4,7,93,4);
console.log(result);
let result2=Math.max(...[1,2,3,4,5,6,7]);
console.log(result2);
//不要单独去使用扩展运算符展开数组，可以在参数那里使用，将参数数组转成参数列表.
//如果扩展运算符后边跟的是变量，那么接受多余的数组放置数组中
// var result3=...[1,2,3,4,5,6,7];
// console.log(result3);
// rest参数--->不再推荐使用arguments
function test(...tail){
	//获取所有的实参，然后累加
	tail=[1,2,3,4,5];

}
test(1,2,3,4,5);
//默认值解释
{
	let [a,b]=[];
	console.log(a,b);
	let [c=1,d=2]=[];
	console.log(c,d);
	//当解构完成之后，变量严格等于undefined的时候，默认值生效
	let [e=1,f=2]=[3,4];
	console.log(e,f);
	function test(){
		console.log('test');
		return re();
	}
	function re(){
		console.log(4);
	}
	//一种情况，是先进行默认值的赋值，再去解构值，如果有值，那么覆盖原先的默认值。
	//另外一种情况，先去判断解构的值有没有，如果有，进行赋值，如果没有，进行默认值的赋值
	//
	// let [g=test]=[1];
	// console.log('-------');
	// console.log(g);
	console.log('----');
	let [g=test()]=[];
	// console.log(g);
}
