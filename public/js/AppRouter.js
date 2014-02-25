define(['marionette', 'controllers/Controller'], function (Backbone, Controller) {
	return Backbone.Marionette.AppRouter.extend({
		controller: new Controller(),
		appRoutes: {
			'': 'index'
		}
	});
});
