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

    const episodeNames = ['']
    const locationNames = ['']
    const locationTypes = ['']
    const locationDimensions = ['']

    charactersArray.forEach(value => episodeNames.push(value.name))
    charactersArray.forEach(value => locationNames.push(value.name))
    charactersArray.forEach(value => locationTypes.push(value.type))
    charactersArray.forEach(value => locationDimensions.push(value.dimension))

    const [selectedEpisodeName, setSelectedEpisodeName] = useState(episodeNames[0]);
    const [selectedLocationName, setSelectedLocationName] = useState(locationNames[0]);
    const [selectedLocationType, setSelectedLocationType] = useState(locationTypes[0]);
    const [selectedLocationDimension, setSelectedLocationDimension] = useState(locationDimensions[0]);

    const CharactersUrlBuilder = (endpoint, page) => `${api}/${endpoint}?page=${page}&species=${selectedSpecies}&status=${selectedStatus}&gender=${selectedGender}`
    const EpisodeUrlBuilder = (endpoint, page) => `${api}/${endpoint}?page=${page}&name=${selectedEpisodeName}`
    const LocationUrlBuilder = (endpoint, page) => `${api}/${endpoint}?page=${page}name=${selectedLocationName}&type=${selectedLocationType}&dimension=${selectedLocationDimension}`
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
    const choiceEpisodeNameHandler = (e) => {
        setSelectedEpisodeName(e.target.value)
    }
    const choiceLocationNameHandler = (e) => {
        setSelectedLocationName(e.target.value)
    }
    const choiceLocationTypeHandler = (e) => {
        setSelectedLocationType(e.target.value)
    }
    const choiceLocationDimensionHandler = (e) => {
        setSelectedLocationDimension(e.target.value)
    }

    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    }


    const fetchData = async (urlbuilder) => {
        setIsLoading(false)
        try {
            const resp = await fetch(urlbuilder)
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
            choiceStatusHandler,
            choiceSpeciesHandler,
            choiceGenderHandler,
            choiceEpisodeNameHandler,
            choiceLocationNameHandler,
            choiceLocationTypeHandler,
            choiceLocationDimensionHandler,
            pageOfCharacters,
            pageNumber,
            selectedStatus,
            selectedSpecies,
            selectedGender,
            selectedEpisodeName,
            selectedLocationName,
            selectedLocationType,
            selectedLocationDimension,
            episodeNames,
            locationNames,
            locationTypes,
            locationDimensions,
            CharactersUrlBuilder,
            EpisodeUrlBuilder,
            LocationUrlBuilder,
            onlyUnique

        }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;