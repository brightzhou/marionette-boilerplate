module.exports = (grunt) ->
	require('load-grunt-tasks') grunt

	grunt.initConfig
		pkg: grunt.file.readJSON('package.json')

		jshint:
			options:
				jshintrc: '.jshintrc'
			src: ['public/js/**/*.js', '!public/js/libs/**/*.js']


	# Tasks
	grunt.registerTask 'default', ['jshint']
