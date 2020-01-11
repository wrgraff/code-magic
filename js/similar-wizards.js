'use strict';

(function() {
	appendWizards( document.querySelector('.setup-similar-list') );

	function appendWizards(wizardsContainer) {
		var similarWizardsWindow = document.querySelector('.setup-similar');
		var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

		var wizardsList = window.data.wizards;
		for (var i = 0; i < wizardsList.length; i++) {
			var wizardContainer = wizardTemplate.cloneNode(true);

			wizardContainer.querySelector('.setup-similar-label').textContent = wizardsList[i].name;
			wizardContainer.querySelector('.wizard-coat').style.fill = wizardsList[i].coat;
			wizardContainer.querySelector('.wizard-eyes').style.fill = wizardsList[i].eyes;

			wizardsContainer.append(wizardContainer);
		};

		similarWizardsWindow.classList.remove('hidden');
	};
})();
