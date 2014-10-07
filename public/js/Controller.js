define([
		'backbone',
		'RegionManager'
	],
	function (Backbone, regionManager) {
		'use strict';

		return Backbone.Marionette.Controller.extend({

			index: function () {
				regionManager.showIndex();
			}

		});

	});
