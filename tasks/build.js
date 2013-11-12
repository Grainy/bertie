module.exports = function (grunt) {
	grunt.registerTask('build', ['assemble', 'stylus', 'copy', 'concat', 'uglify', 'cssmin', 'htmlmin']);
}