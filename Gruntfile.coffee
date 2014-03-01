module.exports = (grunt) ->
	require('load-grunt-tasks') grunt

	grunt.initConfig
		pkg: grunt.file.readJSON('package.json')

		express:
			dev:
				options:
					script: 'server/server.js'

		jshint:
			options:
				jshintrc: '.jshintrc'
			src: ['public/js/**/*.js', '!public/js/libs/**/*.js']

		watch:
			express:
				files: ['**/*.js']
				tasks: ['express:dev']
				options:
					spawn: false
			js:
				files: ['public/js/**/.js', 'server/**/*.js']
				tasks: ['jshint']

		open:
			dev:
				path: 'http://localhost:3000/'


	# Tasks
	grunt.registerTask 'default', ['jshint', 'express:dev', 'open:dev', 'watch']