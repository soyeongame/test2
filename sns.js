;~function(global){
	'use strict';
	var Game = global.Game;
	if (Game) {
		var str;
		if (/zh\-cn/i.test(navigator.language)) {
			str = ['I finished ', 'floors, challenge me | ', '전소연 탈출게임'];
		} else if (/zh\-/i.test(navigator.language)) {
			str = ['I finished ', 'floors, challenge me | ', '전소연 탈출게임'];
		} else {
			str = ['I finished ', ' floors, challenge me | ', '전소연 탈출게임'];
		}
		Game.on('gameOver', function(score, bestScore) {
			if (bestScore >= 10) {
				document.title = str[0] + bestScore + str[1] + str[2];
			} else {
				document.title = str[2];
			}
		});
		Game.on('gameStart', function() {
			document.title = str[2];
		});
	}
}(window);