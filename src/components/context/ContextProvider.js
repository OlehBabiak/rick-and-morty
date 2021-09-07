import React, {useState} from 'react';
import Context from "./Context";
import {url, endPoints, status, gender, species} from "../constants"

function ContextProvider({children}) {

    const {api} = url
    const {CHARACTERS, LOCATIONS, EPISODES} = endPoints

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [charactersArray, setCharactersArray] = useState([]);
    const [pageOfCharacters, setPageOfCharacters] = useState(1);
    const [pageNumber, setpageNumber] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState(status[0]);
    const [selectedSpecies, setSelectedSpecies] = useState(species[0]);
    const [selectedGender, setSelectedGender] = useState(gender[0]);


    const urlBuilder = (endpoint, page) => `${api}/${endpoint}?page=${page}species=${selectedSpecies}&status=${selectedStatus}&gender=${selectedGender}`
    const nextPageHandler = () => {
        setPageOfCharacters(pageOfCharacters+1)
    }

    const prevPageHandler = () => {
        setPageOfCharacters(pageOfCharacters-1)
    }
    const choiceStatusHandler = (e) => {
        setSelectedStatus(e.target.value)
    }
    const choiceSpeciesHandler = (e) => {
        setSelectedSpecies(e.target.value)
    }
    const choiceGenderHandler = (e) => {
        setSelectedGender(e.target.value)
    }

const fetchData = async (endpoint, page) => {
        setIsLoading(false)
        try {
            const resp = await fetch(urlBuilder(endpoint, page))
            if (!resp.ok) {
                throw  Error('Unfortunately, could not fetch data...')
            } else {
                const json = await resp.json()
                const {results, info} = json
                setCharactersArray(results)
                setpageNumber(info.pages)
        }
        }catch (err) {
            setError(err.message)
        }
        setIsLoading(true)
    }
    


    return (
        <Context.Provider value={{
            fetchData,
            CHARACTERS,
            LOCATIONS,
            EPISODES,
            error,
            charactersArray,
            nextPageHandler,
            prevPageHandler,
            pageOfCharacters,
            pageNumber,
            choiceStatusHandler,
            choiceSpeciesHandler,
            choiceGenderHandler,
            selectedStatus,
            selectedSpecies,
            selectedGender,
        }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;