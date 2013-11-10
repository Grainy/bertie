module.exports = function (grunt) {
	grunt.registerTask('server', function () {
		grunt.config.set('production', true);
		grunt.task.run('express:api', 'connect:server', 'watch');
	});
}