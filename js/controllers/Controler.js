define(['App', 'marionette'], function (MyApp, Marionette) {
	return Marionette.Controller.extend({

		initialize: function (options) {
			console.log('init controller');
		},

		index: function () {
			console.log('init');
		}

	});
});
