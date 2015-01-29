define([
		'marionette',
		'RegionManager'
	],
	function (Marionette, regionManager) {
		'use strict';

		return Marionette.Controller.extend({

			index: function () {
				regionManager.showIndex();
			}

		});

	});
