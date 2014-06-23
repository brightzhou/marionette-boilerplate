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
		'chai-jquery': 'libs/chai-jquery/chai-jquery'
	},
	deps: ['mustache', 'text'],
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
		chai: {
			deps: ['jquery'],
			exports: 'chai'
		},
		'chai-jquery': {
			deps: ['chai']
		}
	}
});

require(['require', 'marionette', 'hogan', 'chai', 'chai-jquery'],
	function (require, Marionette, Hogan, chai, chaiJquery) {

		chai.should();
		chai.use(chaiJquery);

		Marionette.Renderer.render = function (template, data) {
			return Hogan.compile(template).render(data);
		};

		require([
			'views/welcome/WelcomeViewTest'
		], function () {
			mocha.run();
		})

	});