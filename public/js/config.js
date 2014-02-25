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
	deps: ['hogan', 'mustache', 'text'],
	shim: {
		backbone: {
			deps: ['jquery', 'underscore']
		},
		marionette: {
			exports: 'Backbone'
		}
	}
});

requirejs.onError = function (err) {
	console.log(err);
	console.log(err.requireType);
	console.log(err.requireModules);
};

requirejs(['App', 'backbone'], function (MyApp, Backbone) {

	Backbone.Marionette.Renderer.render = function (template, data) {
		return Hogan.compile(template).render(data);
	};

	MyApp.start();
});
