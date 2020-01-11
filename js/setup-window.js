'use strict';

(function() {
	var setupWindow = document.querySelector('.setup'),
		setupButtonOpen = document.querySelector('.setup-open-icon'),
		setupButtonClose = setupWindow.querySelector('.setup-close'),
		setupNameInput = setupWindow.querySelector('.setup-user-name');

	// Open and close buttons clicks
	setupButtonOpen.addEventListener('click', openSetupWindow);
	setupButtonClose.addEventListener('click', closeSetupWindow);

	// Open and close button click by enter key
	setupButtonOpen.addEventListener('keydown', (evt) => {
		window.util.isEnterEvent(evt, openSetupWindow);
	});
	setupButtonClose.addEventListener('keydown', (evt) => {
		window.util.isEnterEvent(evt, closeSetupWindow);
	});

	// Open and close functions
 	// Close window with esc key
	function setupWindowCloseHandler(evt) {
		window.util.isEscEvent(evt, closeSetupWindow);
	};
	function openSetupWindow() {
		setupWindow.classList.remove('hidden');

		setupNameInput.addEventListener('keydown', (evt) => {
			evt.stopPropagation();
		});
		document.addEventListener('keydown', setupWindowCloseHandler);
	};
	function closeSetupWindow() {
		setupWindow.classList.add('hidden');
		document.removeEventListener('keydown', setupWindowCloseHandler);
	};
})();
