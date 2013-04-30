define(['marionette', 'text!./welcome.mustache'], function(Marionette, myTemplate){
	return Marionette.ItemView.extend({
		template: myTemplate,
		tagName: 'h1'
	});
});
