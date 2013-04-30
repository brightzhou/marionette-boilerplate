define(['marionette', 'backbone', 'AppRouter'], function (Marionette, Backbone, AppRouter) {
	var MyApp = new Marionette.Application();

	MyApp.addRegions({
		mainRegion: "#body"
	});

	MyApp.addInitializer(function (options) {
		require(["controllers/Controller"], function (Controller) {
			MyApp.appRouter = new AppRouter({
            	controller:new Controller()
			});
		});

	});

	MyApp.on("initialize:after", function (options) {
		if (Backbone.history) {
			Backbone.history.start();
		}
	});

	return MyApp;
});
