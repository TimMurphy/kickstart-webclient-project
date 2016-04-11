'use strict';

var $ = require('./helpers');
var gulp = require('gulp');
var merge = require('merge-stream');

module.exports = {
    source: copySource,
    vendors: copyVendors    
};

function copySource() {
    var src = $.files.source;
    var dest = $.directories.artifacts;

    return $.copyDirectory(src, dest);
}

function copyVendors() {
    var node_modules = $.directories.node_modules;
    var vendors = $.directories.vendors;

    return merge(
        $.copyDirectory(`${node_modules}/bootstrap/dist/**/*`, `${vendors}/bootstrap`),
        $.copyDirectory(`${node_modules}/jquery/dist/**/*`, `${vendors}/jquery`)
    );
}
