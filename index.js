var path = require('path');

var ffi = require('ffi');

var ccurl = path.join(__dirname, 'build', 'lib', 'libccurl')
var libccurl = ffi.Library(ccurl, {
    ccurl_pow : [ 'string', [ 'string', 'int'] ],
    ccurl_pow_finalize : [ 'void', [] ],
    ccurl_pow_interrupt: [ 'void', [] ]
});

module.exports = libccurl
