const fs = require('fs');
let Utils = require('../utils/Utils');

function crawl() {
    let util = new Utils('https://www.glassdoor.co.in/Reviews/Travelex-Reviews-E23898.htm');
    util.process(results => {
        //console.log(results)
        fs.writeFileSync("data.json", JSON.stringify(results), "UTF-8");
    })
}
crawl()
module.exports = crawl;