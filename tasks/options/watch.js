module.exports = {
	options: {
		nospawn : true,
		livereload: true
	},
	assemble: {
		files: ['src/templates/**/**'],
		tasks: ['assemble'],
	},
	css: {
		files: ['src/assets/css/**'],
		tasks: ['stylus'],
	},
	jsVendor: {
		files: ['src/assets/js/vendor/**/**'],
		tasks: ['copy:jsVendor', 'concat', 'uglify:jsVendor'],
	},
	jsScripts: {
		files: ['src/assets/js/scripts/**/**'],
		tasks: ['copy:jsScripts'],
	},
	img: {
		files: ['src/assets/img/**/**'],
		tasks: ['copy:img'],
	},
	fonts: {
		files: ['src/assets/fonts/**'],
		tasks: ['copy:fonts'],
	},
	root: {
		files: ['src/**.ico'],
		tasks: ['copy:root'],
	},
}