var artifacts = './artifacts';
var node_modules = './node_modules';
var source = './source'

module.exports = {
    directories: {
        artifacts: artifacts,
        node_modules: node_modules,
        source: source,
        vendors: artifacts + '/vendors'
    },
    files: {
        artifacts: artifacts + '/**/*',
        bower: './bower.json',
        index: source + '/index.html',
        source: source + '/**/*'
    }
};
