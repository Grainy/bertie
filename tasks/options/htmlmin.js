module.exports = {
	options: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,        
   	},
	files: {
		expand: true,
		cwd: 'dist/',
		src: '**/*.html',
		dest: 'dist/'
	}
}