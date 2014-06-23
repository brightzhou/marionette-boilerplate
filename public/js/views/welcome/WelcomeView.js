define(['marionette', 'text!./welcomeTmpl.mustache'], function (Marionette, myTemplate) {
	'use strict';
	return Marionette.ItemView.extend({
		template: myTemplate,
		tagName: 'p'
	});
});
