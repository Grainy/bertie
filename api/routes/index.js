exports.ref = function (req, res) {

	// modules
	var fs = require('fs-extra');

	// request
	var data = req.body,
		page = data.page,
		reference = data.reference,
		positionX = data.position.x,
		positionY = data.position.y;

	// options
	var dir = './src/assets/css/'
		ext = '.styl',
		path = dir+page+ext,
		css = '\n.ref\n\tposition: absolute\n\tleft: '+positionX+'px\n\ttop:'+positionY+'px\n';

	// check if css page exists
	fs.exists(path, function (exists) {
		if (exists===false) {
			console.log('\n'+page+ext+" not found at "+path+'\n');
		} else {
			appendCSS();
		}
	});

	// append css
	function appendCSS() {
		fs.appendFile(path, css, function (err) {
			if (err) {
				console.log('\n'+err+'\n')
			} else {
				send(200);
			}
		});
	}
};