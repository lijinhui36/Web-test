const {JSDON}=require('jsdom');
const {window}=new JSDOM('<!DOCTYPE html>');
const $=require('jquery')(window);
let p1=new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://134.175.154.93:8099/manager/category/findAllCategory',
		method:'get',
		succeess(res){
			resolve(res);
		},
		error(error){
			reject(error);
		}
	});
});
let p2=new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://134.175.154.93:8099/manager/article/findArticle?page=0&pageSize=10',
		method:'get',
		succeess(res){
			resolve(res);
		},
		error(error){
			reject(error);
		}
	});
});
let p3=new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://134.175.154.93:8099/manager/user/findAllUser',
		method:'get',
		succeess(res){
			resolve(res);
		},
		error(error){
			reject(error);
		}
	});
});
//如果p1,p2,p3都执行成功，做什么事，其他情况做什么事
//
//let p=Promise.all([p1,p2,p3]);
//谁执行的快，就用谁的结果，无论它的结果是什么将直接决定p的状态
let p=Promise.all([p1,p2,p3]);
p.then((res)=>{
	console.log(res);
}).chatch((error)=>{
	console.log(error);
});