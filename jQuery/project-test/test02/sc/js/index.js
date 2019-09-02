//js
//点击切换页面
// console.log($);
$(function(){
	$('.sc-body li').click(function(event){
		var text=$(event.target).text();
		switch(text){
			case'学生管理':
			$('.content').load('../pages/student.html');
			break;
			case'班级管理':
			$('.content').load('../pages/class.html');
			break;
			case'年级管理':
			$('.content').load('../pages/grade.html');
			break;
			case'课程管理':
			$('.content').load('../pages/curse.html');
			break;
			case'教师管理':
			$('.content').load('../pages/teacher.html');
			break;
		}
	});
});