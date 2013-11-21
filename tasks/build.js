module.exports = function (grunt) {
	grunt.registerTask('build', ['clean','assemble', 'stylus', 'copy', 'concat', 'uglify', 'cssmin', 'htmlmin']);
}