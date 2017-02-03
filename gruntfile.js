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

    // Browserify (for bundling JS and compiling to ES2015)
    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', {
              presets: ['es2015']
            }]
          ]
        },
        files: {
          'assets/js/dist/scripts.js' : 'assets/js/scripts.js'
        }
      }
    },

    //Minify the JavaScript
    uglify: {
      scripts: {
        files: {
          'assets/js/dist/scripts.js' : ['assets/js/dist/scripts.js']
        }
      }
    },

    // open the server
    browserSync: {
      bsFiles: {
        src : [
          'assets/css/*.css',
          '*.html',
          '/assets/js/*.js'
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

      scripts: {
        files: ['assets/js/scripts.js'],
        tasks: ['browserify']
      }
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // dev mode: uncompressed files 
  grunt.registerTask('default', ['sass:build', 'autoprefixer', 'browserify', 'browserSync', 'watch']);
  
  // production ready: minified files
  grunt.registerTask('dist', ['sass:dist', 'autoprefixer', 'browserify', 'uglify']);
};