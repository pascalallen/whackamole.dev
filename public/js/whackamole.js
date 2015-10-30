$(document).ready(function() {
"use strict";

$("html").css('cursor', "url(http://icons.iconarchive.com/icons/sirea/sharp-kitchen/96/Knife-icon.png), auto");

	var compPattern;
	var userPattern = [];
	var holeNum;
	var score;
	var hiScore = 0;
	var timer;
	var duration = 1500;

	$('#start').click(function() {
		selectLevel();
		newGame();
		// $(".btn").attr("disabled", true);
	});

	function newGame(){
		countdown();
		timer = 30;
		score = 0;
	}

	function countdown(){
		var timeInt = setInterval(function(){
			timer--;
			onRound();
			if(timer == 0){
				clearInterval(timeInt);
				var x = confirm("Play again?");
				if(x == true){
					newGame();
				}else{
					endGame();
				}
			}
			animateMole(randomMole());
		}, 1000)
	}

	function animateMole(hole_num){
		$("[data-value='" + hole_num + "'] img").animate({
			top: "-50px"
		}, 500)
		setTimeout(function(){
			$("[data-value='" + hole_num + "'] img").animate({
			top: "135px"
			}, 500)
		}, duration);
	}

	$('.container').on("click", "img", function(){
		score += 1;
		$("html").css('cursor', "url(http://www.cliparthut.com/clip-arts/294/blood-splash-294856.png), auto");
		setTimeout(function(){
			$("html").css('cursor', "url(http://icons.iconarchive.com/icons/sirea/sharp-kitchen/96/Knife-icon.png), auto");
		}, 500);
	});

	function randomMole(){
		holeNum = Math.floor(Math.random() * 13);
		return holeNum;
	}

	function onRound(){
		$("#score").html(score);
		$("#timer").html(timer);
		if(score > hiScore){
			hiScore = score;
			$("#hiscore").html(hiScore);
		}

	}

	function selectLevel(){
		var value = $(".active").val();
		switch(value){
			case "easy":
				duration;
				break;
			case "medium":
				duration = 1200;
				break;
			case "hard":
				duration = 900;
				break;
		}
	}

	$(".btn-group button").click(function(){
		$(this).addClass("active");
	});

	function endGame(){
		console.log("end game");
	}

});