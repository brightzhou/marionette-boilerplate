require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		babysitter: 'libs/backbone.babysitter',
		wreqr: 'libs/backbone.wreqr',
		marionette: 'libs/backbone.marionette',
		json2: 'libs/json2',
		hogan: 'libs/hogan',
		mustache: 'libs/mustache',
		text: 'libs/text',
		bootstrap: 'libs/bootstrap'
	},
	shim: {
		backbone: {
			deps: ['jquery', 'underscore']
		},
		babysitter: {
			deps: ['backbone']
		},
		wreqr: {
			deps: ['backbone']
		},
		marionette: {
			deps: ['babysitter', 'wreqr', 'json2']
		},
		bootstrap: {
			deps: ['jquery']
		}
	}
})

requirejs.onError = function (err) {
	console.log(err.requireType);
	console.log(err.requireModules);
};

requirejs(['jquery', 'underscore', 'backbone', 'hogan', 'mustache', 'bootstrap', 'text'], function () {


});
