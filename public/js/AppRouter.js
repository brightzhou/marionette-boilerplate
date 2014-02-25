define(['marionette', 'controllers/Controller'], function (Backbone, Controller) {
	'use strict';
	return Backbone.Marionette.AppRouter.extend({
		controller: new Controller(),
		appRoutes: {
			'': 'index'
		}
	});
});
