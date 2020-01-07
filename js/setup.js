// Elements
var setupWindow = document.querySelector('.setup')
	setupButtonOpen = document.querySelector('.setup-open-icon'),
	setupButtonClose = setupWindow.querySelector('.setup-close'),
	setupNameInput = setupWindow.querySelector('.setup-user-name');

// Open and close buttons clicks
setupButtonOpen.addEventListener('click', openSetupWindow);
setupButtonClose.addEventListener('click', closeSetupWindow);
// Open and close button click by enter key
setupButtonOpen.addEventListener('keydown', (evt) => {
	if (evt.keyCode == 13) {
		openSetupWindow();
	};
});
setupButtonClose.addEventListener('keydown', (evt) => {
	if (evt.keyCode == 13) {
		closeSetupWindow();
	};
});
setupNameInput.addEventListener('keydown', (evt) => {
	evt.stopPropagation();
});
// Close window with esc key
function setupWindowCloseHandler(evt) {
	if (evt.keyCode == 27) {
		closeSetupWindow();
	};
};
// Open and close functions
function openSetupWindow() {
	setupWindow.classList.remove('hidden');
	document.addEventListener('keydown', setupWindowCloseHandler);
};
function closeSetupWindow() {
	setupWindow.classList.add('hidden');
	document.removeEventListener('keydown', setupWindowCloseHandler);
};

// Validation name input
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

var wizardCoat = document.querySelector('.wizard-coat'),
	wizardEyes = document.querySelector('.wizard-eyes'),
	wizardFireball = document.querySelector('.setup-fireball-wrap'),
	wizardFireballInput = wizardFireball.querySelector('input');

var wizardCoatIndex = 0,
	wizardEyesIndex = 0,
	wizardFireballIndex = 0;

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


// Create wizards list
var wizardsList = createWizardsList(4, cloneArray(names), cloneArray(surnames), cloneArray(coatColors), cloneArray(eyesColors));
// Add wizards list on page
appendWizards();

function createWizardsList(count, names, surnames, coatColors, eyesColors) {
	var wizardsList = [];

	for (var i = 0; i < count; i++) {
		wizardsList[i] = {
			name: getRandomItem(names) + ' ' + getRandomItem(surnames),
			coat: getRandomItem(coatColors),
			eyes: getRandomItem(eyesColors),
		};
	};

	return wizardsList;
};

function appendWizards() {
	var similarWizardsWindow = document.querySelector('.setup-similar');
	var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
	var wizardsContainer = similarWizardsWindow.querySelector('.setup-similar-list');

	for (var i = 0; i < wizardsList.length; i++) {
		var wizardContainer = wizardTemplate.cloneNode(true);

		wizardContainer.querySelector('.setup-similar-label').textContent = wizardsList[i].name;
		wizardContainer.querySelector('.wizard-coat').style.fill = wizardsList[i].coat;
		wizardContainer.querySelector('.wizard-eyes').style.fill = wizardsList[i].eyes;

		wizardsContainer.append(wizardContainer);
	};
	similarWizardsWindow.classList.remove('hidden');
};

function getRandomItem(array) {
	var index = Math.floor(Math.random() * array.length);
	var result = array[index];
	array.splice(index, 1);
	return result;
};

function cloneArray(array) {
	return array.slice(0, array.length);
};
