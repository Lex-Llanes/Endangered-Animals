const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 3001;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', async (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});






/*++++++++++++++++
------ROUTES------
*****************/

//Adding individual animals
app.post('/animal', async (req, res) => {
    try {
        const { animalName } = req.body;
        const { animalSpecies } = req.body;
        const { individualTime } = req.body;

        const newAnimal = await db.query(
            'INSERT INTO individual(nickname, species, individual_time) VALUES($1, $2, $3) RETURNING *', [animalName, animalSpecies, individualTime]
        )
        res.json(newAnimal.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})


//Adding Species
app.post('/species', async (req, res) => {
    try {
        const { commonName } = req.body;
        const { scientificName } = req.body;
        const { estimatedAlive } = req.body;
        const { conservationStatus } = req.body;
        const { speciesTimestamp } = req.body;

        const newSpecies = await db.query(
            'INSERT INTO species(common_name, scientific_name, estimated_alive, conservation_status, species_time) VALUES($1, $2, $3, $4, $5) RETURNING *',
            [commonName, scientificName, estimatedAlive, conservationStatus, speciesTimestamp]
        )
        res.json(newSpecies.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})


//Adding Sightings
app.post('/sightings', async (req, res) => {
    try {
        const { timeSighted } = req.body;
        const { animalSeen } = req.body;
        const { locationSeen } = req.body;
        const { animalHealth } = req.body;
        const { emailAddress } = req.body;
        const { sightingDate } = req.body;

        const newSighting = await db.query(
            'INSERT INTO sightings(date_time, animal_seen, location_seen, email_address, sighting_date, animal_health) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
            [timeSighted, animalSeen, locationSeen, emailAddress, sightingDate, animalHealth]
        )
        res.json(newSighting.rows[0])

    } catch (error) {
        console.error(error.message)
    }
})



//Querying 
app.get('/query', async (req, res) => {
    try {
        //Create a variable that calls the data we want from the database
        const allusers = await db.query("SELECT animal_seen, location_seen, email_address, species FROM individual FULL OUTER JOIN sightings ON animal_seen = nickname");
        //Then send as a response the data rows
        res.json(allusers.rows);
    } catch (error) {
        console.error(error.message)
    }
})



// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

































// //create the get request
// app.get('/api/students', cors(), async (req, res) => {
//     try{
//         const { rows: students } = await db.query('SELECT * FROM students');
//         res.send(students);
//     } catch (e){
//         return res.status(400).json({e});
//     }
// });

// //create the POST request
// app.post('/api/students', cors(), async (req, res) => {
//     const newUser = { firstname: req.body.firstname, lastname: req.body.lastname }
//     console.log([newUser.firstname, newUser.lastname]);
//     const result = await db.query(
//         'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//         [newUser.firstname, newUser.lastname]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
// });