module.exports = {
	options: {
		offline: '<%= offlineState %>',
		production: '<%= production %>',
		data: './src/**/*.{json,yml}',
		assets: 'dist/assets',
		images: 'assets/img',
		helpers: './src/helpers/helper-*.js',
		layoutdir: './src/templates/layouts',
		partials: ['./src/templates/includes/**/*.hbs'],
	},
	site: {
		options: {
			layout: 'default.hbs'
		},
		files: [{
			expand: true,
			cwd: 'src/templates/pages',
			src: ['*.*'],
			dest: 'dist/'
		},
	]},
}