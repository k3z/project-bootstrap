module.exports = function(grunt) {

    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        datetime: Date.now(),
        uglify: {
            'development': {
                'options': {
                    beautify: true,
                    mangle: false,
                },
                files: {
                    'www/assets/build/project.js': [
                        'www/assets/components/jquery/jquery.js',
                        'www/assets/components/components-bootstrap/js/bootstrap.js',
                        'www/assets/js/*.js'

                    ]
                }
            },
            'production': {
                'options': {
                    mangle: {toplevel: true},
                    squeeze: {dead_code: false},
                    codegen: {quote_keys: true}
                },
                files: {
                    'www/assets/build/project.js': [
                        'www/assets/components/jquery/jquery.js',
                        'www/assets/components/components-bootstrap/js/bootstrap.js',
                        'www/assets/js/*.js'

                    ]
                }
            }
        },
        concat: {
            'development': {
                src: [
                    'www/assets/css/*.css'
                ],
                dest: 'www/assets/build/project.css'
            }
        },
        mincss: {
            'production': {
                files: {
                    'www/assets/build/project.css': [
                        'www/assets/css/*.css'
                    ]
                }
            }
        },
        watch: {
            'observe': {
                files: [
                    'www/assets/js/*.js',
                    'www/assets/css/*.css'
                ],
                tasks: ['default'],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true
                }
            },
            'reload': {
                files: [
                    'www/*.html'
                ],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //tasks
    grunt.registerTask('default', ['development']);

    grunt.registerTask('development', 'Development Build', function() {
        grunt.task.run(
            'uglify:development',
            'concat:development'
        );
    });

    grunt.registerTask('production', 'Production Build', function() {
        grunt.task.run(
            'uglify:production',
            'mincss:production'
        );
    });

};