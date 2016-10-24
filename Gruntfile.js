module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
           dist: {
                src: [
                    'js/libs/jquery.min.js',
                    'js/libs/bootstrap.js',
                    'js/libs/ie10-viewport-bug-workaround.js',
                    'js/app.js'
                ],
                dest: 'js/build/production.js'
            }
        },
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['theme.css'],
              dest: 'css',
              ext: '.min.css'
            }]
          }
        },
        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: {
              'css/theme.css': 'css/sass/theme.scss'
            }
          }
        },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.js'
            }
        },
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: "css/sass/*",
                tasks: ["sass", 'cssmin']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);
    grunt.registerTask('dev', ['concat', 'sass', 'cssmin', 'watch']);

};
