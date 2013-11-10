module.exports = function (grunt) {

	var _ = grunt.util._,
		assets = [],
		links = [],
		regex = new RegExp('(?:href|src|url)[\=\(][\'"](?!(?:http|#|\s|"))(.+?(?=jpg|png|mp4|pdf|js)?)[\'"]', 'ig');

	grunt.registerTask('cleanse', function () {
		getAssetsArray();
	});

	// get list of all assets
	function getAssetsArray () {
		grunt.file.expand({
			filter: 'isFile',
			cwd: 'dist'
		}, ['assets/**/*']).forEach(function (file) {	
			assets.push(file);
		});
		getLinkedAssets(assets);
	}

	// find links to assets in content
	function getLinkedAssets (assets) {
		grunt.file.expand({
			filter: 'isFile',
			cwd: 'dist'
		}, ['**/*.html', '**/*.js', '**/*.css']).forEach(function (file) {	
			var content = grunt.file.read('dist/'+file);
			while ((result = regex.exec(content)) !== null) {
				links.push(result[1]);
			}
		});
		removeAssets(assets, links);
	}

	// remove unused assets
	function removeAssets () {
		var remove = _.difference(assets, links);
		remove.forEach(function (el) {
			console.log('Removed: '+el);
			grunt.file.delete('dist/'+el);
		});
	}

}