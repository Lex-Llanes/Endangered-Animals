import React, { useState, useEffect } from "react";

//FOR ADDING ANIMAL SPECIES
const AddSpecies = () => {

    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientific] = useState("");
    const [estimatedAlive, setEstimation] = useState("");
    const [conservationStatus, setStatus] = useState("");
    const [speciesTimestamp, setSpeciesTimestamp] = useState("")




    const handleAddSpeciesSubmit = async (event) => {
        event.preventDefault();
        try {
            const body = { commonName, scientificName, estimatedAlive, conservationStatus, speciesTimestamp }
            const response = await fetch("http://localhost:3001/species",
                {method: "POST",
                 headers: {"Content-Type": "application/json"},
                 body: JSON.stringify(body)
                }
            );
            console.log(response)
        } catch (error) {
            console.error(error.message);
        }

    }

    return (
        <div>
            <form onSubmit={handleAddSpeciesSubmit}>
                <label id="formlabels">Common Species Name</label>
                <br/>
                <input
                    type="text"
                    placeholder="Enter Common Name"
                    value={commonName}
                    onChange={(event) => setCommonName(event.target.value)}
                />
                <br/>
                <br/>

                <label id="formlabels">Scientific Name</label>
                <br/>
                <input
                    type="text"
                    placeholder="Enter Scientific Name"
                    value={scientificName}
                    onChange={(event) => setScientific(event.target.value)}
                />
                <br/>
                <br/>

                <label id="formlabels">Estimated Alive</label>
                <br/>
                <input
                    type="text" 
                    placeholder="Enter Estimated Alive"
                    value={estimatedAlive}
                    onChange={(event) => setEstimation(event.target.value)}
                />
                <br/>
                <br/>

                <label id="formlabels">Conservation Status</label>
                <br/>

                <select value={conservationStatus} onChange={(event) => setStatus(event.target.value)} name="statusCode" id="statusCode" form="addStatusCode">
                    <option value="none">Is Animal Healthy?</option>
                    <option value="EX - Extinct">EX - Extinct</option>
                    <option value="EW - Extinct in Wild">EW - Extinct in Wild</option>
                    <option value="CR - Critically Endangered">CR - Critically Endangered</option>
                    <option value="EN - Endangered">EN - Endangered</option>
                    <option value="VU - Vulnerable">VU - Vulnerable</option>
                    <option value="NT - Near Threatened">NT - Near Threatened</option>
                    <option value="CD - Conservation Dependent">CD - Conservation Dependent</option>
                    <option value="LC - Least Concern">LC - Least Concern</option>
                    <option value="DD - Data Deficient">DD - Data Deficient</option>
                    <option value="NE - Not Evaluated">NE - Not Evaluated</option>

                </select>
                <br/>
                <br/>

                <label id="formlabels">Date Added</label>
                <br/>
                <input 
                    type="date"
                    placeholder="Date"
                    value={speciesTimestamp}
                    onChange={(event) => setSpeciesTimestamp(event.target.value)}
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

export default AddSpecies;