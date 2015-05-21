var raml = require('raml-parser');

module.exports = function(content) {

  var cb = this.async();

  this.cacheable();

  raml.load(content, this.resourcePath).then(function(data) {
    cb(null, "module.exports = " + JSON.stringify(data));
  }).fail(function (err) {
    cb(err);
  });

};
