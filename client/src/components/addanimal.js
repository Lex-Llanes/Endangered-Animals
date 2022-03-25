import React, { useState, useEffect } from "react";

//FOR ADDING INDIVIDUAL ANIMALS
const AddAnimal = () => {
    //VARIABLES
    const [animalName, setAnimalName] = useState("");
    const [animalSpecies, setAnimalSpecies] = useState("");
    const [individualTime, setIndivTime] = useState("")

    //FUNCTIONALITIES
    const handleAddUser = async (event) => {
        event.preventDefault();

        try {
            const body = { animalName, animalSpecies, individualTime }
            const response = await fetch("http://localhost:3001/animal",
                {method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
                }
            );
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    };



    return (
        <div>
            <form id="addAnimal" onSubmit={handleAddUser}>
            <label id="formlabels">Animal Name</label>
                <br/>
                <input
                    type="text"
                    placeholder="Animal Name"
                    value={animalName}
                    onChange={(event) => setAnimalName(event.target.value)} 
                />
                <br/>
                <br/>

                <label id="formlabels">Animal Species</label>
                <br/>
                <input
                    type="text"
                    placeholder="Animal Species"
                    value={animalSpecies}
                    onChange={(event) => setAnimalSpecies(event.target.value)} 
                />
                <br/>
                <br/>

                <label id="formlabels">Date Added</label>
                <br/>
                <input 
                    type="date"
                    placeholder="Date"
                    value={individualTime}
                    onChange={(event) => setIndivTime(event.target.value)}
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

export default AddAnimal;