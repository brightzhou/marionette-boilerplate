define([
		'backbone',
		'views/welcome/WelcomeView'
	],
	function (Backbone, WelcomeView) {
		'use strict';

		var rm = new Backbone.Marionette.RegionManager();

		var regions = rm.addRegions({
			body: '#body'
		});

		return {
			showIndex: function () {
				regions.body.show(new WelcomeView());
			}
		};

	});