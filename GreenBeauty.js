/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-04 16:34:12
 * @version $Id$
 */
function show1(){
  document.getElementById("header_nav_bar_list1").style.display="block";
}
function hide1(){
  document.getElementById("header_nav_bar_list1").style.display="none";
}
function show2(){
  document.getElementById("header_nav_bar_list2").style.display="block";
}
function hide2(){
  document.getElementById("header_nav_bar_list2").style.display="none";
}
function show3(){
  document.getElementById("header_nav_bar_list3").style.display="block";
}
function hide3(){
  document.getElementById("header_nav_bar_list3").style.display="none";
}
function choice(n){
	var tag;
	if(n==1){
		tag='main_nav_bar_list_display1';
	}
	else if(n==2){
		tag='main_nav_bar_list_display2';
	}
	else if(n==3){
		tag='main_nav_bar_list_display3';
	}
	else if(n==4){
		tag='main_nav_bar_list_display4';
	}	
	else if(n==5){
		tag='main_nav_bar_list_display5';
	}	
	else if(n==6){
		tag='main_nav_bar_list_display6';
	}		
	shows(tag);
}
function miss(m){
	var tak;
	if(m==1){
		tak='main_nav_bar_list_display1';
	}
	else if(m==2){
		tak='main_nav_bar_list_display2';
	}
	else if(m==3){
		tak='main_nav_bar_list_display3';
	}
	else if(m==4){
		tak='main_nav_bar_list_display4';
	}	
	else if(m==5){
		tak='main_nav_bar_list_display5';
	}	
	else if(m==6){
		tak='main_nav_bar_list_display6';
	}
	leave(tak);
}
function shows(t){
  document.getElementById(t).style.display="block";
}
function leave(flag){
  document.getElementById(flag).style.display="none";
}

window.onload=function(){
 	var wrap=document.getElementById('wrap'),
  	pic=document.getElementById('pic').getElementsByTagName("li"),
	 life=document.getElementById('life').getElementsByTagName("li"),
 	 index=0,
  	timer=null;
 	timer = setInterval(autoPlay, 3000);
 	wrap.onmouseover = function () {
 	 clearInterval(timer);
 }
 	wrap.onmouseout = function () {
 	timer = setInterval(autoPlay, 3000);
 }
 function autoPlay () {
  	if (++index >= pic.length) index = 0;
  	changePic(index);
 }
 function changePic (curIndex) {
 	 for (var i = 0; i < pic.length; ++i) {
 	 pic[i].style.display = "none";
  	life[i].style.display="none";
  }
  	pic[curIndex].style.display = "block";
   	life[curIndex].style.display="block";
 }
 
 };