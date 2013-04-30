define(['marionette', 'backbone', 'AppRouter'], function (Marionette, Backbone, AppRouter) {
	var MyApp = new Marionette.Application();

	MyApp.addRegions({
		mainRegion: "#body"
	});

	require(["modules/Module"], function(Module){
		MyApp.module("myModule", Module);
	})

	MyApp.addInitializer(function (options) {
		MyApp.module("myModule").start();
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
