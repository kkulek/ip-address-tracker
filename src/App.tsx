import React, {useEffect, useState} from 'react';
import {SearchBar} from "./components/SearchBar";
import {Results} from "./components/Results";

function App() {
    const [input, setInput] = useState();
    const [data, setData] = useState();
    const [coordinates, setCoordinates] = useState();

    const ipCheck = () => {
        const url: string = "https://geo.ipify.org/api/v2/country,city?apiKey=at_34fpoNOyxJSnGPVZ2KLnACVqprCe7&ipAddress="
        fetch(url + input)
            .then((response) => response.json())
            .then(data => setData(data))
    }

    useEffect(() => {
        let dataCoordinates = [];

        if (data) {
            dataCoordinates.push(data.location.lat);
            dataCoordinates.push(data.location.lng);
            setCoordinates(dataCoordinates);
        }
    }, [data])

    return (
        <main>
            <SearchBar setInput={setInput} ipCheck={ipCheck} input={input}/>
            <Results data={data} coordinates={coordinates}/>
        </main>
    );
}

export default App;
