function animationMenu(a){
	var elem = document.getElementById(a);
	var funushScroll = elem.offsetTop-95;
	$("html, body").animate({ scrollTop: funushScroll });
}
window.onload = function() {
	//анимация команды
	OurTemPoz();
	function OurTemPoz(){
		var elemm = document.getElementsByClassName('Team');
		for(var i = 0; i < elemm.length; i++){
			elemm[i].style.marginLeft = 5+250*i+"px";
		}
		var el = elemm.length/4;
		PointScroll(el);
	}
	//создаю точки для прокрутки
	function PointScroll(el){
		var point = document.getElementById('PointsScr');
		var points = '';
		for(var i = 0; i < el; i++){
			points = points+"<div class='PointsS' onclick='animateLeftScr("+i+")'><div id=PST"+i+"></div></div>";
		}
		point.innerHTML = points;
	}

	//анимация клиентов
	OurTemPozl5();
	function OurTemPozl5(){
		var elemm = document.getElementsByClassName('ClaentsList5');
		for(var i = 0; i < elemm.length; i++){
			elemm[i].style.marginLeft = 5+200*i+"px";
		}
		var el = elemm.length/4;
		PointScrollL5(el);
	}
	//создаю точки для прокрутки
	function PointScrollL5(el){
		var point = document.getElementById('PointsScrList5');
		var points = '';
		for(var i = 0; i < el; i++){
			points = points+"<div class='PointsSL5' onclick='animateLeftScrList5("+i+")'><div id=PSTL5"+i+"></div></div>";
		}
		point.innerHTML = points;
	}


//анимация фраз клиентов
	OurTemPozl7();
	function OurTemPozl7(){

		var elemm = document.getElementsByClassName('FOClL7');
		for(var i = 0; i < elemm.length; i++){
			elemm[i].style.marginLeft = 1000*i+"px";
		}
		var el = elemm.length;
		PointScrollL7(el);
	}
	//создаю точки для прокрутки
	function PointScrollL7(el){
		var point = document.getElementById('PointsScrList7');
		var points = '';
		for(var i = 0; i < el; i++){
			points = points+"<div class='PointsSL7' onclick='animateLeftScrList7("+i+")'><div id=PSTL7"+i+"></div></div>";
		}
		point.innerHTML = points;
	}
};


//прокрутка команды
function animateLeftScr(val){
	$(".PointsS div").css({'backgroundColor' : 'white'});
	$(".OurTeam").animate({ scrollLeft: 1000*val });
	var idjQ= $(".PointsS")[val].children[0].id;
	$("#"+idjQ).css({'backgroundColor' : 'rgb(252,172,69)'});
}



//прокрутка клиетов
function animateLeftScrList5(val){
	$(".PointsSL5 div").css({'backgroundColor' : 'white'});
	$(".OurClients").animate({ scrollLeft: 1000*val });
	var idjQ= $(".PointsSL5")[val].children[0].id;
	$("#"+idjQ).css({'backgroundColor' : 'rgb(252,172,69)'});
}

//прокрутка фраз клиетов
function animateLeftScrList7(val){
	$(".PointsSL7 div").css({'backgroundColor' : 'white'});
	$(".OClL7").animate({ scrollLeft: 1000*val });
	var idjQ= $(".PointsSL7")[val].children[0].id;
	$("#"+idjQ).css({'backgroundColor' : 'rgb(252,172,69)'});
}

function PartfolHeigrth(val,val2){
	console.log($(val2));
	$(".L6AS").css({'color':'rgb(135,135,135)'});
	$(val2).css({'color':'rgb(34,34,34)'});
	if(val=="all"){
		$('.PartfolScrol').animate({height: '250px'});
	}
	else if(val=="PSL61"){
		$("#PSL61").animate({height: '100%'});
		$("#PSL62").animate({height: '0'});
		$("#PSL63").animate({height: '0'});

	}
	else if(val=="PSL62"){
		$("#PSL61").animate({height: '0'});
		$("#PSL62").animate({height: '100%'});
		$("#PSL63").animate({height: '0'});

	}
	else if(val=="PSL63"){
		$("#PSL61").animate({height: '0'});
		$("#PSL62").animate({height: '0'});
		$("#PSL63").animate({height: '100%'});

	}
}

/*Проверяем дынне формы*/
function validateEmail(email) {
    var re = new RegExp("(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)");
    if(re.exec(email.value)){
    	return true;
    }
    else{
    	email.parentNode.childNodes[1].innerHTML = "<a>"+email.parentNode.childNodes[1].innerText+"</a><a class='ErorTurnL8'>*</a>";
    	return false;
    }
};
function validateName(name) {
    var re = new RegExp("(^[a-zA-Zа-яА-Я0-9_.+-]+$)");
    if(re.exec(name.value)){
    	return true;
    }
    else{
    	name.parentNode.childNodes[1].innerHTML = "<a>"+name.parentNode.childNodes[1].innerText+"</a><a class='ErorTurnL8'>*</a>";
    	return false;
    }
}
function validateMass(mass) {
    var re = new RegExp("(^[a-zA-Zа-яА-Я0-9_.+-]+$)");
    if(re.exec(mass.value)){
    	return true;
    }
    else{
    	mass.parentNode.childNodes[1].innerHTML = "<a>"+mass.parentNode.childNodes[1].innerText+"</a><a class='ErorTurnL8'>*</a>";
    	return false;
    }
}
function sendCont(thi){
	delErors();
	var essoe0 = validateName(thi[0]);
	var essoe1 = validateEmail(thi[1]);
	var essoe2 = validateMass(thi[2]);
	if(essoe0 && essoe1 && essoe2){
		ThenkMass();
	}
	ThenkMassVisible()
}
function delErors(){
	var err = document.getElementsByClassName("ErorTurnL8");
	for(var i = err.length; i != 0 ; i--){
		err[0].parentNode.removeChild(err[0]);
	}
}

$(document).on("click", ".alert", function(e) {
  bootbox.alert("jQueryScript.Net!", function() {
    console.log("Alert Callback");
  });
});

function ThenkMassVisible(){
	$(".ThanksMass").show();
	$("#TMAM1").show("fast");
}
function ThenkMassInvis(){
	setTimeout(function(){$(".ThanksMass").hide()}, 200);
	$("#TMAM1").hide("fast");
}