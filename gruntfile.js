module.exports = function(grunt) {

  grunt.initConfig({
    // SASS -> CSS
    sass: {
      build: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'assets/css/styles.css': 'assets/scss/styles.scss'
        }
      },

      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'assets/css/styles.css': 'assets/scss/styles.scss'
        }
      }
    },

    // Autoprefixer to add CSS vendor prefixes
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'last 4 iOS versions', 'last 4 Android versions', 'ie 10', 'ie 9']        
      },
      
      dist: {
        files: {
          'assets/css/styles.css':'assets/css/styles.css'
        }
      }
    },

    // open the server
    browserSync: {
      bsFiles: {
        src : [
          'assets/css/*.css',
          '*.html'
        ]
      },
      options: {
        watchTask: true,
        server: './'
      }
    },

    // watch for changes
    watch: {
      styles: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass:build', 'autoprefixer']
      },
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['sass:build', 'autoprefixer', 'browserSync', 'watch']);
};