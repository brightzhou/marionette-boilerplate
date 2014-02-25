define(['marionette', 'text!./welcome.mustache'], function (Backbone, myTemplate) {
	return Backbone.Marionette.ItemView.extend({
		template: myTemplate,
		tagName: 'h1'
	});
});
