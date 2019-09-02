//get有参 拼接在url之后，查询字符串格式
    //post无参
    //post有参 表单格式数据
    function myAjax(method,url,param,handle,handle2){
    	//后台服务器的地址和后台代码的端口号
    	var baseURL='';
    	//handle当内部的异步执行成功的回调函数，在这个回调函数里，咱们需要将后台返回的数据提交给handle
    	 var http=new XMLHttpRequest();
    	 //处理get有参的情况
    	 if(method=='GET'&&param){
            url+='?'+encodeFormData
    	 }
    	 http.open=(method,baseURL+url);
    	 console.log(baseURL+url);
    	 http.onreadystatechange=function(){
    	 	if(http.status===2000&&http.readyState===4){
    	 		console.log('访问成功');
    	 		handle(JSON.parse(http.responseText));
    	 	}
    	 	else{
    	 		console.log(http.readyState);
    	 		handle2(http.readyState);
    	 	}
    	 }
    	 if(method=='POST'&&param){
            //设置Content-Type为表单格式
            http.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset:UTF-8');
            //发送表单格式数据
            http.send(encodeFormData(param));
    	 }else{
    	 	http.send();
    	 }
    	 http.send();
    }

    // 将js的对象转换成表单格式数据
		function encodeFormData(data){
			
			}