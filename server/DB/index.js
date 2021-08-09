const mongoose = require('mongoose')
const urlMongo = process.env.CONNECTION_URL
mongoose.connect(urlMongo,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log('mongoDB connected')})
    .catch(()=>{console.error('connection,error',err.massage)})
    module.exports = mongoose.connection;