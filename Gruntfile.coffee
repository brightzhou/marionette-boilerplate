module.exports = (grunt) ->
	require('load-grunt-tasks') grunt

	grunt.initConfig
		pkg: grunt.file.readJSON('package.json')

		express:
			dev:
				options:
					script: 'server/server.js'

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

		jshint:
			options:
				jshintrc: '.jshintrc'
			src: [
				'public/js/**/*.js'
				'!public/js/libs/**/*.js'
				'!public/js/**/*Test.js'
			]

		sass:
			dist:
				files:
					'dist/css/style.css': 'public/css/base.scss'

		cssmin:
			dist:
				options:
					report: 'gzip'
				files:
					'dist/css/style.css': ['dist/css/style.css']

		requirejs:
			compile:
				options:
					baseUrl: 'public/js/'
					name: 'config'
					mainConfigFile: 'public/js/config.js'
					out: 'dist/js/script.js'
					preserveLicenseComments: false
					optimize: 'uglify2'
					paths:
						requireLib: 'libs/requirejs/require'
					include: 'requireLib'
					wrapShim: true

		processhtml:
			dist:
				files:
					'dist/index.html': ['public/index.html']

		mocha:
			test:
				options:
					reporter: 'Nyan'
				src: ['tests/index.html']

	# Tasks
	grunt.registerTask 'default', ['jshint', 'express:dev', 'open:dev', 'watch']
	grunt.registerTask 'test', ['jshint', 'mocha']
	grunt.registerTask 'dist', ['jshint', 'sass:dist', 'cssmin:dist', 'requirejs', 'processhtml:dist']
