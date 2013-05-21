require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'libs/jquery/jquery',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		babysitter: 'libs/backbone.babysitter/lib/backbone.babysitter',
		wreqr: 'libs/backbone.wreqr/lib/backbone.wreqr',
		marionette: 'libs/marionette/lib/backbone.marionette',
		json2: 'libs/json2/json2',
		hogan: 'libs/hogan/web/1.0.0/hogan',
		mustache: 'libs/mustache/mustache',
		text: 'libs/requirejs-text/text',
		bootstrap: 'libs/bootstrap/docs/assets/js/bootstrap'
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		babysitter: {
			deps: ['backbone']
		},
		wreqr: {
			deps: ['backbone']
		},
		marionette: {
			deps: ['babysitter', 'wreqr', 'json2'],
			exports: 'Marionette'
		},
		bootstrap: {
			deps: ['jquery']
		}
	}
});

requirejs.onError = function (err) {
	console.log(err.requireType);
	console.log(err.requireModules);
};

requirejs(['App', 'jquery', 'underscore', 'backbone', 'hogan', 'mustache', 'bootstrap', 'text'], function (MyApp) {
	Marionette.Renderer.render = function (template, data) {
		var template = Hogan.compile(template);
		return template.render(data);
	}

	MyApp.start();
});
