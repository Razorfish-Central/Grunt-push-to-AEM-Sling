module.exports = function (grunt) {

    // configure the tasks
    grunt.initConfig({
        paths: {
            dependencies: 'aem/ui.apps/src/main/content/jcr_root/etc/designs/thrivent/independent/clientlib-dependencies',
            site: 'aem/ui.apps/src/main/content/jcr_root/etc/designs/thrivent/independent/clientlib-site',
            libroot: 'aem/ui.apps/src/main/content/jcr_root/etc/designs/thrivent/independent',
            html: 'aem/ui.apps/src/main/content/jcr_root/apps/thrivent/independent/components'
        },
        sass: {
            dist: {
                options: {
                    lineNumbers: true
                },
                files: {
                    '<%= paths.site %>/style.css': '<%= paths.site %>/scss/style.scss'
                }
            }
        },
        slang: {
          // AEM author configuration
          author: {
            options: {
              host: 'localhost',
              port: '4502',
              ignorePaths: true
            }
          }
        },
        watch: {
            // watch task for AEM author
            css: {
                files: ['<%= paths.site %>/scss/*.scss'],
                tasks: ['sass']
            },
            author: {
                files: ['<%= paths.site %>/style.css','<%= paths.site %>/js/*.js',
                '<%= paths.site %>/js.txt',
                '<%= paths.site %>/css.txt',
                '<%= paths.dependencies %>/js/*.js',
                '<%= paths.dependencies %>/js.txt',
                '<%= paths.html %>/**/*.html'],
                tasks: ['slang:author'],
                options: {
                    spawn: false
              }
            }
        }
    });

    // we only want to upload the modified file to AEM, not all files
    grunt.event.on('watch', function(action, filepath) {
        grunt.config.set('slang.author.src', filepath);
    });

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-slang');

    // define the tasks
    grunt.registerTask(
        'default',
        'Watches the project for changes, automatically builds them and runs a server.',
        ['sass','watch']
    );
};
