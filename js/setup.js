var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');

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
];

var wizardsList = createWizardsList(4);
appendWizards();

function createWizardsList(count) {
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
