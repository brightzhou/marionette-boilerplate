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
		mocha: 'libs/mocha/mocha',
		chai: 'libs/chai/chai',
		sinonjs: 'libs/sinonjs/sinon'
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
		},
		mocha: {
			deps: ['jquery'],
			exports: 'mocha'
		}
	}
});

require(['require', 'chai', 'mocha', 'sinonjs', 'marionette', 'hogan'],
	function (require, chai, mocha, sinonjs, Backbone, Hogan) {

		Backbone.Marionette.Renderer.render = function (template, data) {
			return Hogan.compile(template).render(data);
		};

		chai.should();
		mocha.setup('bdd');

		require([
			'views/welcome/WelcomeViewTest'
		], function () {
			mocha.run();
		})

	});