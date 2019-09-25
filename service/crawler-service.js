let Utils = require('../utils/Utils');

function crawl(url) {
    let util = new Utils('https://www.glassdoor.co.in/Reviews/Travelex-Reviews-E23898_P3.htm');
    util.process(results => {
        console.log(results)
    })
}

module.exports = crawl;