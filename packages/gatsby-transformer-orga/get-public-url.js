"use strict";

var path = require("path");

module.exports = function (_ref) {
  var file = _ref.file,
      _ref$pathPrefix = _ref.pathPrefix,
      pathPrefix = _ref$pathPrefix === undefined ? "" : _ref$pathPrefix;

  var fileName = file.name + "-" + file.internal.contentDigest + file.ext;
  var publicPath = path.join(process.cwd(), "public", "static", fileName);
  return pathPrefix + "/static/" + fileName;
};