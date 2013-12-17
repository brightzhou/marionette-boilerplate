define(['controllers/Controller'], function (Controller) {
    return Backbone.Marionette.AppRouter.extend({
        controller: new Controller(),
        appRoutes: {
            '': 'index'
        }
    });
});
