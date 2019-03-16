module.exports = function (grunt) {

// Project configuration.
    grunt.initConfig({
        uglify: {
            reader: {
                files: {
                    'dist/reader.min.js': [
                        'grapheditor/deflate/pako.min.js',
                        'grapheditor/deflate/base64.js',
                        'grapheditor/jscolor/jscolor.js',
                        'grapheditor/sanitizer/sanitizer.min.js',
                        'mxClient.js',
                        'grapheditor/js/Graph.js',
                        'grapheditor/js/Format.js',
                        'grapheditor/js/Shapes.js',
                        'drawio/shapes/*/*.js',
                    ]
                }
            },
            editor: {
                files: {
                    'dist/editor.min.js': [
                        'grapheditor/js/Init.js',
                        'grapheditor/deflate/pako.min.js',
                        'grapheditor/deflate/base64.js',
                        'grapheditor/jscolor/jscolor.js',
                        'grapheditor/sanitizer/sanitizer.min.js',
                        'mxClient.js',
                        'grapheditor/js/EditorUi.js',
                        'grapheditor/js/Editor.js',
                        'grapheditor/js/Sidebar.js',
                        'grapheditor/js/Graph.js',
                        'grapheditor/js/Format.js',
                        'grapheditor/js/Shapes.js',
                        'grapheditor/js/Actions.js',
                        'grapheditor/js/Menus.js',
                        'grapheditor/js/Toolbar.js',
                        'grapheditor/js/Dialogs.js',
                        'drawio/shapes/*/*.js',
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
}
