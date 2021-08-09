const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors')
const mongoDB = require('mongodb').MongoClient
const express = require('express')
const app = express()
const mongoes = require('./DB')
mongoes.on('error',()=>{console.log("")})
const PORT = process.env.PORT
app.listen(PORT||8080)
const {getAllStudents,postStudent} = require('./controlers/studentControlers')
const urlMongo = process.env.CONNECTION_URL
const studentRouter = require('./rauting/rautingStudents')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/dbStudent',studentRouter)

// function stam(req,res){
    
//     return mongoDB.connect(urlMongo,(err,result)=>{
//         if(err)throw err;
//         const collections = result.db('dbSchool').collection('students')
//         const document = {"FirstName":"roy","lastName":"yakov"}
//         collections.insertOne(document,(err,results)=>{
//             if(err)console.log(err);
//             res.send(results)
//         })
//     })
// }
app.use(express.json())

// app.get('/students',getAllStudents)
// app.post('/students',postStudent)
