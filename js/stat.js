'use strict';

(function() {
	window.renderStatistics = function(ctx, names, times) {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
		ctx.fillRect(140, 20, 420, 270);

		ctx.fillStyle = '#fff';
		ctx.fillRect(130, 10, 420, 270);

		ctx.fillStyle = '#000';
		ctx.font = "16px PT Mono";
		ctx.fillText('Ура! Вы победили!', 260, 40);
		ctx.fillText('Список результатов:', 250, 60);

		for (var i = 0; i < names.length; i++) {
			renderRgaph(ctx, names[i], times[i], i, findLargest(times));
		};

	};

	function findLargest(times) {
		var largestTime = 0;
		for (var i = 0; i < times.length; i++) {
			if (times[i] > largestTime) {
				largestTime = times[i];
			};
		};
		return largestTime;
	};

	function renderRgaph(ctx, name, time, i, largestTime) {
		if (name == 'Вы') {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		} else {
			ctx.fillStyle = 'hsl(235, ' + Math.floor(Math.random() * 100) + '%, 50%)';
		};
		var xPos = 160 + (90 * i);
		var height = (150 * time) / largestTime;

		ctx.fillRect(xPos, (100 + (150 - height)), 40, height);

		ctx.fillStyle = '#000';
		ctx.fillText(name, xPos, 270);
		ctx.fillText(Math.floor(time), xPos, (90 + (150 - height)));
	};
})();
