--ENDANGERED ANIMALS DATABASE--



--TABLES--

-------------------------------------
--SPECIES
---Species_id (Serialize, Primary Key)
---Common_name (Varchar(255))
---Scientific_name (Varchar(255))
---Estimated_alive (Integer)
---Conversation Status (Varchar(255))
---Record Timestamp
CREATE TABLE species(
    species_id SERIAL PRIMARY KEY, 
    common_name VARCHAR(255), 
    scientific_name VARCHAR(255), 
    estimated_alive VARCHAR(255),
    conservation_status VARCHAR(255),
    species_time TIMESTAMP
    );



-------------------------------------
--INDIVIDUAL ANIMALS
---Indiv_id (Serialize, Primary Key)
---Nick Names
---Species
---Record Timestamp
CREATE TABLE individual(
    individual_id SERIAL PRIMARY KEY,
    nickname VARCHAR(255),
    species VARCHAR(255),
    individual_time TIMESTAMP
);



-------------------------------------
--SIGHTINGS
---Sighting_id (Serialize, Primary Key)
---Date and Time (Varchar(255))
---Individual_seen (Varchar(255))
---Location_Sighted (Varchar(255))
---Appear_healthy (Boolean)
---Email_Address (Varchar(255))
---Record_timestamp
CREATE TABLE sightings(
    sighting_id SERIAL PRIMARY KEY,
    date_time VARCHAR(255),
    animal_seen VARCHAR(255),
    location_seen VARCHAR(255),
    animal_health BOOLEAN,
    email_address VARCHAR(255),
    sighting_time TIMESTAMP
);