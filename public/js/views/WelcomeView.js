define(['marionette'], function(Marionette){
	return Marionette.ItemView.extend({
		template: '<div>Welcome to your brand new Marionette app !</div>',
		tagName: 'h1'
	});
});
