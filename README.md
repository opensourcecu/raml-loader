# raml-loader

RAML loader for webpack.

Converts a [RAML](http://raml.org/) specification into a CommonJS module using [raml-js-parser](https://github.com/raml-org/raml-js-parser).

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## Example

``` javascript
import MyAPI from "./api/MyAPI.raml";

console.warn('the title of the API is', MyAPI.title);
```

## Recommended configuration

The recommended configuration for webpack is:

``` javascript
{
  module: {
    loaders: [
      { test: /\.raml$/, loader: "raml" }
    ]
  }
}
```

## Install

`npm install raml-loader`
