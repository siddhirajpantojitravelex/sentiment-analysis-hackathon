let Utils = require('../utils/Utils');

function crawl(url) {
    let util = new Utils('https://www.glassdoor.co.in/Reviews/Travelex-Reviews-E23898_P3.htm');
    util.process(results => {
        console.log( "results length  = ",results.length )
    })
    let util2 = new Utils('https://www.glassdoor.co.in/Reviews/Travelex-Reviews-E23898_P4.htm');
    util2.process(results => {
        console.log( "results 2 = ", resultslength )
    })
    let util3 = new Utils('https://www.glassdoor.co.in/Reviews/Travelex-Reviews-E23898_P5.htm');
    util3.process(results => {
        console.log( "results 3 = ", results.length )
    })
    let util4 = new Utils('https://www.glassdoor.co.in/Reviews/Travelex-Reviews-E23898_P6.htm');
    util4.process(results => {
        console.log( "results 4 = ", results.length )
    })
    // util = new Utils('https://www.glassdoor.co.in/Reviews/Travelex-Reviews-E23898_P4.htm');
    // util.process(results => {
    //     console.log( "results length 2 = ",results.length )
    // })
}
crawl()
module.exports = crawl;