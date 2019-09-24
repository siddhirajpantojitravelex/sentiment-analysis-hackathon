
const htmlToJson=require('html-to-json');
var html = require('./sample.html');
//console.log("HTML: ", html);
htmlToJson.parse(html, function () {
  return this.map('.item', function ($item) {
    return $item.text();
  });
}).done(function (items) {
  // Items should be: ['1','2']
  console.log("Items: ", items);
}, function (err) {
  // Handle error
});