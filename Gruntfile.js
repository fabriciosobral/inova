module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["src/less"],
                    yuicompress: true
                },
                files: {
                    "./dist/css/style.css": "./src/less/style.less"
                }
            }
        },
        watch: {
            css: {
                files: "./src/less/*.less",
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};