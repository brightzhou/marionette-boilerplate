define(['backbone'], function () {
    return Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function () {
            require([ 'views/index/IndexView' ], function (View) {
                myApp.router.changeView(View);
            });

        },

        changeView: function (View) {
            if (this.currentView) {
                this.currentView.close();
            }
            this.currentView = new View();
            this.currentView.render();
        }
    });
});