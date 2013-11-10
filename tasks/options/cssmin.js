module.exports = {
	minify: {
		expand: true,
		cwd: 'dist/assets/css',
		src: ['*.css', '!*.min.css'],
		dest: 'dist/assets/css',
		ext: '.css'
	}
}