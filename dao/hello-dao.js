const queries = require('./queries').QUERIES;
const db  = require('./db');

async function healthCheck(){
    return new Promise((resolve,reject)=>{
        db.query(queries.HEALTH_CHECK.GET_DATE,(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data.rows);
            }
        })
    })
}

module.exports = {
    healthCheck
}