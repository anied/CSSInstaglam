module.exports = function(grunt) {

    grunt.initConfig({
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
                    "src/css/style.css": "src/less/style.less"
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};