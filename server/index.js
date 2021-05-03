require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const PORT = 5000 || process.env.PORT;
const db = require('monk')(process.env.DB_URL)
const Doctors = db.get("Doctors")
const Patients = db.get("Patients")

app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', function(req, res){
    res.send("Mentcare API");
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

app.get('/fetchPatients/:_id', function(req, res){
	const patientId = req.params._id;
    patients = Patients.findOne({"_id" : patientId}).then((patient) => {
        if (!patient){
            res.status(500).send('Patient not found in database!')
        }
        else{
            res.send(patient);
        }
    })
});

app.post('/createPatient', function(req, res){
	res.send(req.body)
	//Patients.insert(req.body)
});

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`);
});