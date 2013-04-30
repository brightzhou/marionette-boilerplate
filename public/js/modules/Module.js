define(['App', 'views/WelcomeView'], function(MyApp, WelcomeView){
	return function(Module){
		Module.startWithParent = false,
		Module.addInitializer(function(){
			var welcome = new WelcomeView();
			MyApp.mainRegion.show(welcome);
  		});
	}
});