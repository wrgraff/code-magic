'use strict';

(function() {
	appendWizards( document.querySelector('.setup-similar-list') );

	function appendWizards(wizardsContainer) {
		var similarWizardsWindow = document.querySelector('.setup-similar');
		var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

		window.backend.load(successHandler, errorHandler);

		function successHandler(data) {
			for (var i = 0; i < 4; i++) {
				var wizardContainer = wizardTemplate.cloneNode(true);
	
				wizardContainer.querySelector('.setup-similar-label').textContent = data[i].name;
				wizardContainer.querySelector('.wizard-coat').style.fill = data[i].colorCoat;
				wizardContainer.querySelector('.wizard-eyes').style.fill = data[i].colorEyes;
	
				wizardsContainer.append(wizardContainer);
			};
		};

		function errorHandler(errorText) {
			console.log(errorText);
		};

		similarWizardsWindow.classList.remove('hidden');
	};
})();
