define([
		'backbone',
		'AppRouter',
		'views/welcome/WelcomeView'
	],
	function (Backbone, AppRouter, WelcomeView) {
		'use strict';

		var MyApp = new Backbone.Marionette.Application();

		MyApp.addRegions({
			mainRegion: '#body'
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
