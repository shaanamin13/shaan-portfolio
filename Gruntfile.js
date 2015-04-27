module.exports = function(grunt) {

  var globalConfig = {
    themeDir: 'themes/shaan'
  };

  // Project configuration.
  grunt.initConfig({

    globalConfig: globalConfig,
    pkg: grunt.file.readJSON('package.json'),
    

    sass: {
      dist: { 
        files: {
          '<%=globalConfig.themeDir %>/css/app.css' : '<%=globalConfig.themeDir %>/scss/app.scss',
          '<%=globalConfig.themeDir %>/css/_settings.css' : '<%=globalConfig.themeDir %>/scss/_settings.scss',
          '<%=globalConfig.themeDir %>/css/_theme.css' : '<%=globalConfig.themeDir %>/scss/_theme.scss',
          '<%=globalConfig.themeDir %>/css/editor.css' : '<%=globalConfig.themeDir %>/scss/editor.scss',
        },                  // Target
        options: {              // Target options
          style: 'compressed',
          sourcemap: 'true',
          loadPath: ['bower_components/foundation/scss']
        }
      }
    },
    //concat all the files into the build folder

    concat: {
      js:{
        src: [
        'division-bar/js/division-bar.js',
        'event_calendar/javascript/calendar.js',
        'event_calendar/javascript/calendar_widget.js',
        'event_calendar/javascript/lang/calendar_en.js',
        'event_calendar/javascript/calendar_widget_init.js',
        '<%=globalConfig.themeDir %>/bower_components/blazy/blazy.js',
        '<%=globalConfig.themeDir %>/bower_components/slick-carousel/slick/slick.js',
        '<%=globalConfig.themeDir %>/js/vendor/**/*.js',
        '<%=globalConfig.themeDir %>/js/vendor/*.js',
        '<%=globalConfig.themeDir %>/js/*.js'],
        dest: '<%=globalConfig.themeDir %>/build/build.src.js'
      }
    },

    //minify those concated files
    //toggle mangle to leave variable names intact

    uglify: {
      options: {
        mangle: true
      },
      my_target:{
        files:{
        '<%=globalConfig.themeDir %>/build/build.js': ['<%=globalConfig.themeDir %>/build/build.src.js'],
        }
      }
    },
    watch: {
      scripts: {
        files: ['<%=globalConfig.themeDir %>/js/*.js', '<%=globalConfig.themeDir %>/js/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: true,
        }
      },
      css: {
        files: ['<%=globalConfig.themeDir %>/scss/*.scss', '<%=globalConfig.themeDir %>/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: true,
        }
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  // Note: order of tasks is very important
  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);

};