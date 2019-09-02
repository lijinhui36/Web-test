function test(a,b,c,d='1'){};
console.log(test.length);//3
//给某个形参上设置默认值，length则不包含这个参数
//只要遇到默认是就立马返回length
