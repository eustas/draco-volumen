const KNN = require("ml-knn");

window.magic = function(data, train, labels) {
  var knn = new KNN(train, labels);
  return knn.predict(data);
}
