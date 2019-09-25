const fs = require('fs');
let Utils = require('../utils/Utils');

function crawl(url) {
    console.log(url);
    let util = new Utils(url);
    util.process(url,(results) => {
        //console.log(results)
        fs.appendFileSync("data3.json", JSON.stringify(results), "UTF-8");
        //fs.appendFile("data.json", JSON.stringify(results),(err)=>console.log(err));
    })
}
//for(let i=5;i<10;i++){
    let u=`https://www.glassdoor.co.in/Reviews/Travelex-Reviews-E23898_P52.htm`
    crawl(u)
   async()=> await sleep(1000);
//}
function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
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