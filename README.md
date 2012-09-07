# Mockit

Mockit is a simple library for mocking module dependencies during testing.

## Installation

``` bash
$ npm install mockit
```

## Usage

To mock the http module in a required file:

``` javascript
var mockHttp = {
  // Mocked methods here...
};

var Downloader = mockit('../lib/downloader', {
  http: mockHttp
});
```
