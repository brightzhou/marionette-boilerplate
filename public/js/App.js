/*jshint -W031 */
define([
		'backbone',
		'Router',
		'hogan'
	],
	function (Backbone, Router, Hogan) {
		'use strict';

		var App = new Backbone.Marionette.Application({

			initialize: function () {
				new Router();
			}

		});

		App.on('before:start', function () {
			Backbone.Marionette.Renderer.render = function (template, data) {
				return Hogan.compile(template).render(data);
			};

		});

		App.on('start', function () {
			Backbone.history.start();
		});

		return App;
	});
