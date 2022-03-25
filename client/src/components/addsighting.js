import React, { useState, useEffect } from "react";

//FOR ADDING SIGHTING LOCATION
const AddSighting = () => {
    //VARIABLES
    const [timeSighted, setTimeSighted] = useState("")
    const [animalSeen, setAnimalSeen] = useState("")
    const [locationSeen, setLocationSeen] = useState("")
    const [animalHealth, setHealth] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [sightingDate, setSightingDate] = useState("")


    const handleSightingSubmit = async (event) => {
        event.preventDefault();

        // if(animalHealth === 'true'){
        //     setHealth(true)
        // } else {
        //     setHealth(false)
        // }

        let today = new Date()
        let time = today.getHours().toString() + ":" + today.getMinutes().toString() + ":" + today.getSeconds().toString()
        setTimeSighted(time)

        try {
            const body = { timeSighted, animalSeen, locationSeen, animalHealth, emailAddress, sightingDate }
            const response = await fetch("http://localhost:3001/sightings",
                {method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
                }
            )
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }

    }


    return (
        <div>
            <form id="addSighting" onSubmit={handleSightingSubmit}>
                <label id="formlabels">Animal's Individual Name</label>
                <br/>
                <input 
                    type="text"
                    placeholder="Animal Name"
                    value={animalSeen}
                    onChange={(event) => setAnimalSeen(event.target.value)}
                />
                <br/>
                <br/>

                <label if="formlabels">Location of Sighting</label>
                <br/>
                <input 
                    type="text"
                    placeholder="Location of sighting"
                    value={locationSeen}
                    onChange={(event) => setLocationSeen(event.target.value)}
                />
                <br/>
                <br/>


                <label id="formlabels">Email Address</label>
                <br/>
                <input 
                    type="text"
                    placeholder="Email Address"
                    value={emailAddress}
                    onChange={(event) => setEmailAddress(event.target.value)}
                />
                <br/>
                <br/>


                <label id="formlabels">Animal's Health Check</label>
                <br/>
                <select value={animalHealth} onChange={(event) => setHealth(event.target.value)} name="healthCheck" id="health" form="addSighting">
                    <option value="none">Is Animal Healthy?</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <br/>
                <br/>


                <label id="formlabels">Date of Sighting</label>
                <br/>
                <input 
                    type="Date"
                    placeholder=""
                    value={sightingDate}
                    onChange={(event) => setSightingDate(event.target.value)}
                />
                <br/>
                <br/>


                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    )
}

export default AddSighting;