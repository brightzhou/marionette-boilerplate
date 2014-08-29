/*jshint -W117*/
require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'libs/jquery/dist/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        marionette: 'libs/marionette/lib/backbone.marionette',
        hogan: 'libs/hogan/web/1.0.0/hogan',
        mustache: 'libs/mustache/mustache',
        text: 'libs/requirejs-text/text'
    },
    deps: ['mustache', 'text', 'marionette'],
    shim: {
        backbone: {
            deps: ['jquery', 'underscore']
        },
        marionette: {
            deps: ['backbone']
        },
        hogan: {
            exports: 'Hogan'
        },
        App: {
            deps: ['marionette']
        }
    }
});

requirejs.onError = function (err) {
    'use strict';
    console.log(err);
    console.log(err.requireType);
    console.log(err.requireModules);
};

requirejs([
        'backbone',
        'App',
        'hogan'
    ],
    function (Backbone, MyApp, Hogan) {
        'use strict';


        Backbone.Marionette.Renderer.render = function (template, data) {
            return Hogan.compile(template).render(data);
        };

        MyApp.start();
    });
