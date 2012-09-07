# Mockit

Mockit is a simple library for mocking module dependencies during testing.
Other dependency injection libraries create a sandbox around the tested module
forcing the user to deal with an entirely new module context. Mockit simply
overwrites the mocked dependencies and includes the module in its original
scope.

## Installation

``` bash
$ npm install mockit
```

## Usage

To mock the http module in a required file:

``` javascript
var mockit = require('mockit');

var mockHttp = {
  // Mocked methods here...
};

var Downloader = mockit('../lib/downloader', {
  http: mockHttp
});
```
