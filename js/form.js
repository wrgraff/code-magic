'use strict';

(function() {
	// Validation name input
	var setupNameInput = document.querySelector('.setup-user-name');
	setupNameInput.addEventListener('invalid', function(evt) {
		if (setupNameInput.validity.tooShort) {
			setupNameInput.setCustomValidity('Имя волшебника должно быть больше 2-х символов');
		} else if (setupNameInput.validity.tooLong) {
			setupNameInput.setCustomValidity('Имя волшебника должно быть меньше 25-ти символов');
		} else if (setupNameInput.validity.valueMissing) {
			setupNameInput.setCustomValidity('Имя волшебника обязательно для заполнения');
		} else {
			setupNameInput.setCustomValidity('');
		};
	});

	// Setup wizards
	var wizardCoat = document.querySelector('.wizard-coat'),
		wizardEyes = document.querySelector('.wizard-eyes'),
		wizardFireball = document.querySelector('.setup-fireball-wrap'),
		wizardFireballInput = wizardFireball.querySelector('input');

	var wizardCoatIndex = 0,
		wizardEyesIndex = 0,
		wizardFireballIndex = 0;

	var coatColors = window.data.coatColors,
		eyesColors = window.data.eyesColors,
		fireballColors = window.data.fireballColors;

	wizardCoat.addEventListener('click', () => {
		if (wizardCoatIndex >= coatColors.length - 1) {
			wizardCoatIndex = -1;
		};
		wizardCoat.style.fill = coatColors[++wizardCoatIndex];
	});
	wizardEyes.addEventListener('click', () => {
		if (wizardEyesIndex >= eyesColors.length - 1) {
			wizardEyesIndex = -1;
		};
		wizardEyes.style.fill = eyesColors[++wizardEyesIndex];
	});
	wizardFireball.addEventListener('click', () => {
		if (wizardFireballIndex >= fireballColors.length - 1) {
			wizardFireballIndex = -1;
		};
		wizardFireball.style.backgroundColor = fireballColors[++wizardFireballIndex];
		wizardFireballInput.value = fireballColors[wizardFireballIndex];
	});
})();
