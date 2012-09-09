var url = require('url');
var local = require('./local');

module.exports = {
  
  url: function () {
    return url.parse('http://mlmorg.com').href;
  },

  local: function () {
    return local();
  }

};
