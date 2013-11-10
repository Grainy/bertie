module.exports = function (grunt) {
	grunt.registerTask('offline', ['default'], function () {
		grunt.config.set('offlineState', true);
		grunt.task.run('default', 'manifest');
	});
}