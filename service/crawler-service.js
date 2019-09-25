const fs = require('fs');
let Utils = require('../utils/Utils');

function crawl(url) {
    console.log(url);
    let util = new Utils(url);
    util.process(url,(results) => {
        //console.log(results)
        fs.appendFileSync("data.json", JSON.stringify(results), "UTF-8");
        //fs.appendFile("data.json", JSON.stringify(results),(err)=>console.log(err));
    })
}
//for(let i=5;i<10;i++){
    let u=`https://www.glassdoor.co.in/Reviews/Travelex-Reviews-E23898_P21.htm`
    crawl(u)
   async()=> await sleep(1000);
//}
function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

module.exports = crawl;