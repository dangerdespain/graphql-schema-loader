var _ = require('underscore');
var utils = require('./utils/utils')();
var githubUtils = require('./utils/githubUtils')();
_.extend(utils, githubUtils);

module.exports = function(){
	return utils
}