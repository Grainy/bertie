'use strict';

function loadConfig (path) {

	var glob = require('glob'),
		object = {},
		key;

	glob.sync('*', {cwd: path}).forEach(function (option) {
		key = option.replace(/\.js$/,'');
		object[key] = require(path + option);
	});

	return object;
}

module.exports = function (grunt) {

	var config = {
			pkg: grunt.file.readJSON('package.json'),
			env: process.env
		};

	require('load-grunt-tasks')(grunt);
	grunt.util._.extend(config, loadConfig('./tasks/options/'));
	grunt.initConfig(config);
	grunt.loadTasks('tasks');

};