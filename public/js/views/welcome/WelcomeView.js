define(['marionette', 'text!./welcomeTmpl.mustache'], function (Backbone, myTemplate) {
	'use strict';
	return Backbone.Marionette.ItemView.extend({
		template: myTemplate,
		tagName: 'h1'
	});
});
