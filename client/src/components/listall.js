import React, { useState, useEffect } from "react";


const ListAll = () => {

    const [queryList, setQueryList] = useState([]);


    async function getQuery () {
        const response = await fetch("http://localhost:3001/query");
        const data = await response.json();

        setQueryList(data)
    }


    useEffect(() => {getQuery();
    }, []);


    console.log(queryList)


    return (
        <div>
        <table className="paleBlueRows">
            <thead>
            <tr>
                <th className="tableHeader">Animal Nickname</th>
                <th>Species</th>
                <th>Location Seen</th>
                <th>Sighter's Email Address</th>
            </tr>
            </thead>
            <tbody>
            {queryList.map(query => (
                <tr>
                    <td>{query.nickname}</td>
                    <td>{query.species}</td>
                    <td>{query.location_seen}</td>
                    <td>{query.email_address}</td>
                </tr>
            ))}

            </tbody>
        </table>

        </div>
    )
}

export default ListAll;