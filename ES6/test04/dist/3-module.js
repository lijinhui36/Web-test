'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
//需要到处内容，让其他模块使用
var a = 1;
var b = 2;
function test() {
	console.log('test');
}
//导出
exports.a = a;
exports.b = b;
exports.test = test;
// export let m=10;
// export function say(){
// 	console.log('say')
// }

// 默认导出
// export default function(){
// 	console.log('default');
// }

// export default {
// 	name:'zhangsan',
// 	age:12
// };

// export default 'hello';
// let m=100;
// // export default m;
// export default function(){
// 	console.log('default');
// }
// export let n=10;
// export let a=1;
// export let b=2;