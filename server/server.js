const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connection = require('./DB');
const path = require('path');
connection.on('error', () => {
  console.log('');
});
const PORT = process.env.PORT;
const studentRouter = require('./rauting/rautingStudents');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(8000);

app.use('/api/students', studentRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(_dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

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

// app.get('/students',getAllStudents)
// app.post('/students',postStudent)
