var config = require('../config');
var baseDir = config.directories.artifacts;
var watch = config.files.artifacts;

module.exports = {
    files: [watch],
    server: {
        baseDir: baseDir
    }
};
