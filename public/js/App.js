define(['marionette', 'backbone', 'AppRouter', 'views/welcome/WelcomeView'], function (Marionette, Backbone, AppRouter, WelcomeView) {
	'use strict';
	var MyApp = new Marionette.Application();

	MyApp.addRegions({
		mainRegion: 'body'
	});

	MyApp.addInitializer(function () {
		MyApp.appRouter = new AppRouter();
		MyApp.mainRegion.show(new WelcomeView());
	});

	MyApp.on('initialize:after', function () {
		if (Backbone.history) {
			Backbone.history.start();
		}
	});

	return MyApp;
});
