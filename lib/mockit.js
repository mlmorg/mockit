'use strict';

var mod = require('module');

module.exports = function (path, mocks) {
  // Reference to the original require function
  var require = mod.prototype.require;

  // Overwrite the require function
  mod.prototype.require = function (path) {
    // Return a mock object, if present. Otherwise, call the original require
    // function in the current file's module context
    return mocks[path] || require.call(this, path);
  };

  // Require the module in the parent module context. Our overwritten require
  // function will be used for its module dependencies
  var file = require.call(module.parent, path);

  // Restore the original require function
  mod.prototype.require = require;

  // Return the module
  return file;
};

delete require.cache[__filename];
