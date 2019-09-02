//后台线程
onmessage=function(event){
	//主线程给后台线程的参数
	var num=event.data;
	var total=0;
	for(var i=0;i<num;i++){
		total+=i;
	}
	postMessage(total);
}