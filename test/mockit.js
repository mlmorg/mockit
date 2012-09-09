var should = require('should');
var mockit = require('../lib/mockit');

describe('mockit', function () {

  var url = 'http://mocked';
  var local = false;
  var tester;

  describe('when mocking modules', function () {

    var mockUrl = {
      parse: function () {
        return { href: url };
      }
    };
    var mockLocal = function () {
      return local;
    };

    before(function () {
      tester = mockit('./helpers/tester', {
        url: mockUrl,
        './local': mockLocal
      });
    });

    after(function () {
      var name = require.resolve('./helpers/tester');
      delete require.cache[name];
    });

    it('should use the mocked methods for built-in modules', function () {
      tester.url().should.eql(url);
    });

    it('should use the mocked methods for local modules', function () {
      tester.local().should.eql(local);
    });

  });

  describe('when not mocking modules', function () {

    before(function () {
      tester = mockit('./helpers/tester', {});
    });

    after(function () {
      var name = require.resolve('./helpers/tester');
      delete require.cache[name];
    });

    it('should use the original methods from built-in modules', function () {
      tester.url().should.not.eql(url);
    });

    it('should use the original methods from local modules', function () {
      tester.local().should.not.eql(local);
    });

  });

});
