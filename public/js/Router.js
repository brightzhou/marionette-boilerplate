define([
		'marionette',
		'Controller'
	],
	function (Marionette, Controller) {
		'use strict';
		return Marionette.AppRouter.extend({

			controller: new Controller(),

			appRoutes: {
				'': 'index'
			}

		});
	});
