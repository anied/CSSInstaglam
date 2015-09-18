module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: "src/less/*.less",
                tasks: ['less']
            }
        },
        less: {
            development: {
                options: {
                    paths: ["src/less"]
                },
                files: {
                    "src/css/cssinstaglam.dev.css": "src/less/cssinstaglam.dev.less"
                }
            },
        },
        clean: {
            dist: ['dist/*']
        },
        copy: {
            build: {
                src: 'src/css/cssinstaglam.dev.css',
                dest: 'dist/cssinstaglam.css'
            }
        },
        'string-replace' : {
            version: {
              files: {
                'dist/cssinstaglam.css': 'dist/cssinstaglam.css'
              },
              options: {
                replacements: [{
                  pattern: /{{ VERSION }}/g,
                  replacement: '<%= pkg.version %>'
                }]
              }
            }
        },
        cssmin: {
          target: {
            options: {
                keepSpecialComments: 1
            },
            files: [{
              expand: true,
              cwd: 'dist',
              src: ['*.css', '!*.min.css'],
              dest: 'dist',
              ext: '.min.css'
            }]
          }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-string-replace');


    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['clean', 'copy:build', 'string-replace:version', 'cssmin']);

};