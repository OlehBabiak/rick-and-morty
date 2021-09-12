import React, {useContext, useEffect, useState} from 'react';
import Context from "../context/Context";
import Filter from "../filter/Filter";
import {status, gender, species} from "../constants"
import Pagination from "../Pagination/Pagination";
import {FilterWrapper, ItemPageWrapper} from "./ItemsListStyled";
import CharactersList from "./CharactersList";

function CharactersPage() {
    const {
        pageOfCharacters,
        nextPageHandler,
        prevPageHandler,
        pageNumber,
        setIsLoading,
        setError,
        setpageNumber,
        api
    } = useContext(Context)

    const [selectedStatus, setSelectedStatus] = useState(status[0]);
    const [selectedSpecies, setSelectedSpecies] = useState(species[0]);
    const [selectedGender, setSelectedGender] = useState(gender[0]);
    const [charactersArray, setCharactersArray] = useState(null);

    const choiceStatusHandler = (e) => {
        setSelectedStatus(e.target.value)
    }
    const choiceSpeciesHandler = (e) => {
        setSelectedSpecies(e.target.value)
    }
    const choiceGenderHandler = (e) => {
        setSelectedGender(e.target.value)
    }

    const fetchCharacters = async (urlbuilder) => {
        try {
            setIsLoading(false)
            setError(null)
            const resp = await fetch(urlbuilder)
            if (!resp.ok) {
                throw  Error('Unfortunately, could not fetch data...')
            } else {
                const json = await resp.json()
                const {results, info} = json
                setCharactersArray(results)
                setpageNumber(info.pages)
            }
        } catch (err) {
            setError(err.message)
            setCharactersArray(null)
        } finally {
            setIsLoading(false)
        }
    }

    const CharactersUrlBuilder = (page) => `${api}/character?page=${page}&species=${selectedSpecies}&status=${selectedStatus}&gender=${selectedGender}`

    useEffect(() => {
        fetchCharacters(CharactersUrlBuilder(pageOfCharacters))
    }, [pageOfCharacters, selectedStatus, selectedSpecies, selectedGender])

    return (
        <ItemPageWrapper>
            <FilterWrapper>
                <Filter select={selectedStatus} choice={choiceStatusHandler} filter={status}/>
                <Filter select={selectedSpecies} choice={choiceSpeciesHandler} filter={species}/>
                <Filter select={selectedGender} choice={choiceGenderHandler} filter={gender}/>
            </FilterWrapper>
            <CharactersList
                charactersArray={charactersArray}
            />
            <Pagination
                nextPageHandler={nextPageHandler}
                prevPageHandler={prevPageHandler}
                pageNumber={pageNumber}
                pageOfCharacters={pageOfCharacters}
            />
        </ItemPageWrapper>
    );
}

export default CharactersPage;