$(document).ready(function() {
"use strict";

$("html").css('cursor', "url(http://icons.iconarchive.com/icons/sirea/sharp-kitchen/96/Knife-icon.png), auto");

	var compPattern;
	var userPattern = [];
	var holeNum;
	var score = 0;
	var level;
	var timer;
	var duration = 2000;

	$('#start').click(function() {
		selectLevel();
		newGame();
		// $(".btn").attr("disabled", true);
	});

	function newGame(){
		countdown();
		timer = 30;
		level = 1;
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
		moleSplat(hole_num);
	}

	function moleSplat(hole_num){
		$('.container').on("click", "img", function(){
			$(this).hide("explode", {pieces: 100});
			level += 1;
			$("html").css('cursor', "url(http://aminoapps.com/static/bower/emojify.js/images/emoji/boom.png), auto");
		})
		$("html").css('cursor', "url(http://icons.iconarchive.com/icons/sirea/sharp-kitchen/96/Knife-icon.png), auto");
	}

	function randomMole(){
		holeNum = Math.floor(Math.random() * 9);
		return holeNum;
	}

	function onRound(){
		$("#timer").html(timer);
		$("#level").html(level);
		if(level > score){
			score = level;
			$("#score").html(score);
		}
	}

	function selectLevel(){
		var value = $(".active").val();
		switch(value){
			case "easy":
				duration;
				break;
			case "medium":
				duration = 1000;
				break;
			case "hard":
				duration = 800;
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