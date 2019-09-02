function test(){
	console.log(this);
	(()=>{
		console.log(this);
	})();
}
test();//global 2次
let obj={
	nama:'zhangsan',
	test
}
obj.test();//obj 2次

function test(){
	console.log(this,'----');
	return ()=>{
		console.log(this,'+++++');
	}
}
let obj={
	name:'zhangsan',
	test:test()
}
obj.test()