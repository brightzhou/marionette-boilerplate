define([
		'marionette',
		'views/welcome/WelcomeView'
	],
	function (Marionette, WelcomeView) {
		'use strict';

		var rm = new Marionette.RegionManager();

		var regions = rm.addRegions({
			body: '#body'
		});

		return {
			showIndex: function () {
				regions.body.show(new WelcomeView());
			}
		};

	});