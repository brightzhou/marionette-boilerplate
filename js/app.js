require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        hogan: 'libs/hogan',
        mustache: 'libs/mustache',
        text: 'libs/text',
        bootstrap: 'libs/bootstrap'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore']
        },
        bootstrap: {
            deps: ['jquery']
        },
        Router: {
            deps: ['backbone']
        }
    }
})

requirejs.onError = function (err) {
    console.log(err.requireType);
    console.log(err.requireModules);
};

requirejs(['Router', 'jquery', 'underscore', 'backbone', 'hogan', 'mustache', 'bootstrap', 'text'], function (Router) {

    var myApp = window.myApp = {};
    myApp.events = _.extend({}, Backbone.Events);

    _.extend(Backbone.View.prototype, {
        close: function () {
            this.$el.unbind();
            this.$el.html('');
            if (this.onClose) {
                this.onClose();
            }
        },
        transition: function (render) {
            this.$el.hide();
            this.$el.html(render);
            this.$el.fadeIn(100);
        }
    });

    myApp.router = new Router();
    Backbone.history.start();
});
