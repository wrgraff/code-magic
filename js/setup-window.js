'use strict';

(function() {
	var setupWindow = document.querySelector('.setup'),
		setupButtonOpen = document.querySelector('.setup-open-icon'),
		setupButtonClose = setupWindow.querySelector('.setup-close'),
		setupForm = setupWindow.querySelector('.setup-wizard-form'),
		setupNameInput = setupWindow.querySelector('.setup-user-name');

	// Open and close buttons clicks
	setupButtonOpen.addEventListener('click', openSetupWindow);
	setupButtonClose.addEventListener('click', closeSetupWindow);

	// Submit action
	setupForm.addEventListener('submit', function(evt) {
		window.backend.save(new FormData(setupForm), closeSetupWindow, function(errorText) {
			console.log(errorText);
		});
		evt.preventDefault();
	});

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

	// Draggable window
	var dragHandler = document.querySelector('.setup-user .upload');

	dragHandler.addEventListener('mousedown', (evt) => {
		evt.preventDefault();
		var dragged = false;

		document.addEventListener('mousemove', moveMouseHandler);
		document.addEventListener('mouseup', upMouseHandler);

		var currentPosition = {
			top: evt.clientY,
			left: evt.clientX,
		};


		function moveMouseHandler(moveEvt) {
			moveEvt.preventDefault();

			dragged = true;
			var shift = {
				top: moveEvt.clientY - currentPosition.top,
				left: moveEvt.clientX - currentPosition.left,
			};
			currentPosition = {
				top: moveEvt.clientY,
				left: moveEvt.clientX,
			};

			setupWindow.style.left = setupWindow.offsetLeft + shift.left + 'px';
			setupWindow.style.top = setupWindow.offsetTop + shift.top + 'px';
		};

		function upMouseHandler(upEvt) {
			upEvt.preventDefault();
			document.removeEventListener('mousemove', moveMouseHandler);
			document.removeEventListener('mouseup', upMouseHandler);

			if (dragged) {
				dragHandler.addEventListener('click', clickUploadHandler);

				function clickUploadHandler(evt) {
					evt.preventDefault();
					dragHandler.removeEventListener('click', clickUploadHandler);
				};
			};
		};
	});
})();
