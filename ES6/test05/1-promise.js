const {JSDON}=require('jsdom');
const {window}=new JSDOM('<!DOCTYPE html>');
const $=require('jquery')(window);
let p=new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://134.175.154.93:8099/manager/category/findAllCategory',
		method:'get',
		succeess(res){
			resolve(res);
		}
		error(error){
			reject(error);
		}
	});
});
//传递的参数是promise对象，不做任何操作，原样返回promise对象
let p1=Promise resolve(p);
p1.then(function(res){
	console.log(res);
}).catch(function(error){
	console.log(error);
}).finally(()=>{
	//无论成功或者失败，都会执行
	console.log('finally');
})
//如果参数是非thenable对象，那么返回resolved状态的promise对象
//非thenable对象内部没有then对象
//thenable对象  内部有then方法的对象
//既然返回的是resolved状态的promise对象，那么内部执行了resolve函数，
let p2=Promise.resolve('hello');
p2.then(()=>{
	console.log('resolve');
}).catch(()=>{
	console.log('reject');
})


//参数：空
let p4=Promise.resolve();
p4.then(()=>{
	console.log('resolve');
}).catch(()=>{
	console.log('reject');
})

let  p5=Promise.reject('hello');
p5.then(()=>{
	console.log('resolve');
}).catch(()=>{
	console.log('reject');
})