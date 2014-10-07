/*jshint -W117*/
require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'libs/jquery/dist/jquery',
		underscore: 'libs/lodash/dist/lodash',
		backbone: 'libs/backbone/backbone',
		marionette: 'libs/marionette/lib/backbone.marionette',
		hogan: 'libs/hogan/web/1.0.0/hogan',
		text: 'libs/requirejs-text/text'
	},
	deps: ['text', 'marionette'],
	shim: {
		backbone: {
			deps: ['jquery', 'underscore']
		},
		marionette: {
			deps: ['backbone']
		},
		hogan: {
			exports: 'Hogan'
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
		'App'
	],
	function (App) {
		'use strict';

		App.start();
	});
