require('dotenv').config();
const PORT = process.env.PORT;
const app = require('./app');

app.listen(PORT,(err)=>{
    if(err){
        console.log("Unable to start server ", err)
    }
    else{
        console.log("Server started on PORT ", PORT)
    }
})