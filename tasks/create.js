module.exports = function (grunt) {

    /*
        Create template pages and their associated assets
        Run from the command line as follows: grunt create --name=$var
    */

    var name = grunt.option('name') || null;

    var fs = require('fs');

    grunt.registerTask('create', function() {

        var assetsDirectory = 'src/assets/',
            pagesDirectory = 'src/templates/pages/',
            cssDirectory = 'src/assets/css/',
            imagesDirectory = 'src/assets/img/',
            javascriptDirectory = 'src/assets/js/scripts/',
            modulePattern = 'var '+name+' = (function () {\n\tfunction init () {\n\t}\n\treturn {\n\t\tinit: init\n\t}\n}());\n\n$(function () {\n\t'+name+'.init();\n});',
            templateContent = '---\ntitle: '+name+'\n---',
            importCSS = '\n@import "'+name+'.styl"';

        if (grunt.file.exists(pagesDirectory+name+'.hbs')) {
            grunt.fail.warn('A file already exists with that name, please use a different one.', 1);
        }

        // Make img directory
        grunt.file.mkdir(imagesDirectory+name);

        // create css
        grunt.file.write(cssDirectory+name+'.styl', '.'+name+' \n\tposition relative');

        // create js module
        grunt.file.write(javascriptDirectory+name+'.js', modulePattern);

        // create page template
        grunt.file.write(pagesDirectory+name+'.hbs', templateContent);

        // append stylesheet to main styles
        fs.appendFileSync(cssDirectory+'screen.styl', importCSS);

    });
};