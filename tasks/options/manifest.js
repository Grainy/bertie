module.exports = {
	generate: {
		options: {
			basePath: 'dist/',
			network: ['http://*', 'https://*'],
			preferOnline: true,
			verbose: true,
			timestamp: true,
			hash: true,
			master: ['index.html']
		},
		src: ['*.*', '**/*.*'],
		dest: 'dist/manifest.appcache'
	}
}