module.exports = {			
	options: {
		"indent": 4,
		"condense": true,
		"indent_inner_html": true
	},
	all: {
		expand: true,
		cwd: 'dist/',
		ext: '.html',
		src: ['*.html'],
		dest: 'app/'
	}
}