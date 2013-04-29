define(['marionette', 'controllers/Controler'], function (Marionette, MyController) {
	return Marionette.AppRouter.extend({
		controller: new MyController(),
		appRoutes: {
			'': 'index'
		}
	});
});
