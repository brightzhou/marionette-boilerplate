require.config({
	baseUrl: '../public/js',
	paths: {
		jquery: 'libs/jquery/dist/jquery',
		underscore: 'libs/lodash/dist/lodash',
		backbone: 'libs/backbone/backbone',
		marionette: 'libs/marionette/lib/backbone.marionette',
		hogan: 'libs/hogan/web/1.0.0/hogan',
		text: 'libs/requirejs-text/text',
		chai: 'libs/chai/chai',
		'chai-jquery': 'libs/chai-jquery/chai-jquery',
		sinon: 'libs/sinonjs/sinon',
		'sinon-chai': 'libs/sinon-chai/lib/sinon-chai'
	},
	deps: ['text'],
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
		},
		'sinon-chai': {
			deps: ['sinon']
		}
	}
});

require(['require', 'marionette', 'hogan', 'chai', 'chai-jquery', 'sinon', 'sinon-chai'],
	function (require, Marionette, Hogan, chai, chaiJquery, sinon, sinonChai) {

		chai.should();
		chai.use(chaiJquery);
		chai.use(sinonChai);

		Marionette.Renderer.render = function (template, data) {
			return Hogan.compile(template).render(data);
		};

		require([
			'views/welcome/WelcomeViewTest'
		], function () {
			mocha.run();
		})

	});