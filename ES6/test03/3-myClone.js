// let obj={};
let obj={
	name:'zhansan',
	age:12
}
let obj1={
	name:'lisi',
	gender:'男',
	sayName:function(){}
}
let obj2={
	color:'red',
	weight:'100'
}
function myClone(target,...tail){
	tail.forEach(function(item){
		//item是一个一个的对象
		for(let key in item){
			if(Array.isArray(item[key])){
				target[key]=JSON.parse(JSON.stringify(item[key]));
			}
			else if(item[key].constructor===Object){
				target[key]=JSON.parse(JSON.stringify(item[key]));			
			}
			if(item[key])
			else{
				target[key]=item[key];
			}	
		}
	})
	return target
}
myClone(obj,obj1,obj2);
console.log(obj);