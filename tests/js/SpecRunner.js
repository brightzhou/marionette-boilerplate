require.config({
	baseUrl: '../public/js',
	paths: {
		jquery: 'libs/jquery/dist/jquery',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		marionette: 'libs/marionette/lib/backbone.marionette',
		hogan: 'libs/hogan/web/1.0.0/hogan',
		mustache: 'libs/mustache/mustache',
		text: 'libs/requirejs-text/text',
		chai: 'libs/chai/chai',
		'jquery-chai': 'libs/sinon-chai/lib/sinon-chai'
	},
	deps: ['mustache', 'text'],
	shim: {
		backbone: {
			deps: ['jquery', 'underscore']
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Backbone'
		},
		hogan: {
			exports: 'Hogan'
		}
	}
});

require(['require', 'marionette', 'hogan', 'chai', 'jquery-chai'],
	function (require, Backbone, Hogan, chai, jqueryChai) {

		Backbone.Marionette.Renderer.render = function (template, data) {
			return Hogan.compile(template).render(data);
		};

		chai.use(jqueryChai);

		require([
			'views/welcome/WelcomeViewTest'
		], function () {
			mocha.run();
		})

	});