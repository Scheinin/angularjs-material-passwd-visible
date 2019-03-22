/**
 * Created by scheinin on 3/22/19.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            target: {
                files: {
                    "dist/angularjs-material-passwd-visible.css": "src/angularjs-material-passwd-visible.less"
                }
            }
        },
        cssmin: {
            options: {
                compatibility: true,
                keepSpecialComments: 0
            },
            target: {
                files: {
                    'dist/angularjs-material-passwd-visible.min.css': ['dist/angularjs-material-passwd-visible.css']

                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            dest: {
                files: {
                    'dist/angularjs-material-passwd-visible.js': [
                        'src/angularjs-material-passwd-visible.js'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            dest: {
                files: {
                    'dist/angularjs-material-passwd-visible.min.js': 'dist/angularjs-material-passwd-visible.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask(
        'build', ['less', 'cssmin', 'ngAnnotate', 'uglify']
    );
};
