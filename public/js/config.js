require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        marionette: 'libs/marionette/lib/backbone.marionette',
        hogan: 'libs/hogan/web/1.0.0/hogan',
        mustache: 'libs/mustache/mustache',
        text: 'libs/requirejs-text/text',
        bootstrap: 'libs/bootstrap/dist/js/bootstrap'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            exports: 'Marionette'
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

requirejs.onError = function (err) {
    console.log(err);
    console.log(err.requireType);
    console.log(err.requireModules);
};

requirejs(['App', 'jquery', 'underscore', 'backbone', 'hogan', 'mustache', 'bootstrap', 'text'], function (MyApp) {
    Marionette.Renderer.render = function (template, data) {
        return Hogan.compile(template).render(data);
    };

    MyApp.start();
});
