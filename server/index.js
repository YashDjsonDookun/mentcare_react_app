const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const PORT = 5000 || process.env.PORT;
const db = require('monk')(process.env.DB_URL)

const Doctors = db.get("Doctors")

app.use(morgan('dev'));
app.use(cors())

app.get('/', function(req, res){
    res.send("Mentcare");
});

app.get('/fetchDocs/:doctorID', function(req, res){
    const docID = req.params.doctorID;
    doctors = Doctors.findOne({"doctorID" : docID}).then((doc) => {
        if (!doc){
            res.status(500).send('Doc not found in database!')
        }
        else{
            res.send(doc);
        }
    })
});

app.get('/fetchDocs', function(req, res){
    doctors = Doctors.find({}).then((docs) => {
        if (!docs){
            res.status(500).send('Oops, Somthing Happened!')
        }
        else{
            res.send(docs);
        }
    })
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`);
});