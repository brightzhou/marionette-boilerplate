module.exports = (grunt) ->
  require('load-grunt-tasks') grunt

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    express:
      dev:
        options:
          script: 'server/server.js'

    watch:
      options:
        livereload: true
      express:
        files: ['public/js/**/*.js', 'server/**/*.js']
        tasks: ['test', 'express:dev']
        options:
          spawn: false
      sass:
        files: ['public/**/*.scss']
        tasks: ['sass:dev']
      templates:
        files: ['public/**/*.mustache']

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
      dev:
        files:
          'public/css/base.css': 'public/css/base.scss'
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
          reporter: 'Spec'
        src: ['tests/index.html']

  # Tasks
  grunt.registerTask 'test', ['jshint', 'mocha']
  grunt.registerTask 'default', ['test', 'sass:dev', 'express:dev', 'open:dev', 'watch']
  grunt.registerTask 'serve', ['test', 'sass:dev', 'express:dev', 'open:dev', 'watch']
  grunt.registerTask 'dist', ['test', 'sass:dist', 'cssmin:dist', 'requirejs', 'processhtml:dist']
