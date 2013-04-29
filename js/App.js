define(['marionette', 'backbone'], function (Marionette, Backbone) {
	var MyApp = new Marionette.Application();

	MyApp.addRegions({
		mainRegion: "#body"
	});

	MyApp.addInitializer(function (options) {
		require(["AppRouter"], function (AppRouter) {
			new AppRouter();
		});

	});

	MyApp.on("initialize:after", function (options) {
		if (Backbone.history) {
			Backbone.history.start();
		}
	});

	return MyApp;
});
