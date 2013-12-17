define(['AppRouter'], function (AppRouter) {

    var MyApp = new Marionette.Application();

    MyApp.addRegions({
        mainRegion: "#body"
    });

    require(["modules/Module"], function (Module) {
        MyApp.module("myModule", Module);
    });

    MyApp.addInitializer(function () {
        MyApp.module("myModule").start();
        MyApp.appRouter = new AppRouter();
    });

    MyApp.on("initialize:after", function () {
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    return MyApp;
});
