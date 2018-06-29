const path = require('path')
const ffi = require('ffi')
const ccurl = path.join(__dirname, 'build', 'lib', 'libccurl')

const libccurl = ffi.Library(ccurl, {
    ccurl_pow : [ 'string', [ 'string', 'int'] ],
    ccurl_pow_finalize : [ 'void', [] ],
    ccurl_pow_interrupt: [ 'void', [] ]
});

module.exports = libccurl
