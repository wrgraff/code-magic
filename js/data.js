'use strict';

(function() {
var names = [
		'Иван',
		'Хуан Себастьян',
		'Мария',
		'Кристоф',
		'Виктор',
		'Юлия',
		'Люпита',
		'Вашингтон'
	],
	surnames = [
		'да Марья',
		'Верон',
		'Мирабелла',
		'Вальц',
		'Онопко',
		'Топольницкая',
		'Нионго',
		'Ирвинг'
	],
	coatColors = [
		'rgb(101, 137, 164)',
		'rgb(241, 43, 107)',
		'rgb(146, 100, 161)',
		'rgb(56, 159, 117)',
		'rgb(215, 210, 55)',
		'rgb(0, 0, 0)'
	],
	eyesColors = [
		'black',
		'red',
		'blue',
		'yellow',
		'green'
	],
	fireballColors = [
		'#ee4830',
		'#30a8ee',
		'#5ce6c0',
		'#e848d5',
		'#e6e848'
	];

	window.data = {
		coatColors: window.util.cloneArray(coatColors),
		eyesColors: window.util.cloneArray(eyesColors),
		fireballColors: window.util.cloneArray(fireballColors),
		wizards: createWizardsList(4)
	};

	function createWizardsList(count) {
		var wizardsList = [];

		for (var i = 0; i < count; i++) {
			wizardsList[i] = {
				name: window.util.extractRandomItem(names) + ' ' + window.util.extractRandomItem(surnames),
				coat: window.util.extractRandomItem(coatColors),
				eyes: window.util.extractRandomItem(eyesColors),
			};
		};

		return wizardsList;
	};
})();
