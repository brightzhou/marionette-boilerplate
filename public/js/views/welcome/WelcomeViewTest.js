define(['./WelcomeView'], function (WelcomeView) {

	describe('WelcomeView', function () {

		var view;

		beforeEach(function () {
			view = new WelcomeView();
		});

		it('should exist', function () {
			WelcomeView.should.exist;
		});

		it('should render an h1 element', function () {
			view.render();
			view.$el.should.exist;
			view.$el.should.not.to.be.empty;
		});
	});
});