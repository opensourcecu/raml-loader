var raml = require('raml-parser');

module.exports = function(content) {

  var cb = this.async();
  var self = this;

  this.cacheable();

  // Patch into getPendingFile to add dependencies when visited by the parser.
  var getPendingFile = raml.RamlParser.prototype.getPendingFile;

  raml.RamlParser.prototype.getPendingFile = function(loader, fileInfo) {
    self.addDependency(fileInfo.targetFileUri);
    return getPendingFile.call(this, loader, fileInfo);
  };

  raml.load(content, this.resourcePath).then(function(data) {
    cb(null, "module.exports = " + JSON.stringify(data));
  }).fail(function (err) {
    cb(err);
  });

};
