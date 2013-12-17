define(['text!./welcome.mustache'], function (myTemplate) {
    return Backbone.Marionette.ItemView.extend({
        template: myTemplate,
        tagName: 'h1'
    });
});
