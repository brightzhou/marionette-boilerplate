/*jshint -W031 */
define([
		'marionette',
		'backbone',
		'Router',
		'hogan'
	],
	function (Marionette, Backbone, Router, Hogan) {
		'use strict';

		var App = new Marionette.Application({

			initialize: function () {
				new Router();
			}

		});

		App.on('before:start', function () {
			Marionette.Renderer.render = function (template, data) {
				return Hogan.compile(template).render(data);
			};

		});

		App.on('start', function () {
			Backbone.history.start();
		});

		return App;
	});
