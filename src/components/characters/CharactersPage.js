import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import Filter from "../filter/Filter";
import {status, gender, species} from "../constants"
import Pagination from "../Pagination/Pagination";
import {FilterWrapper, ItemPageWrapper} from "./ItemsListStyled";
import CharactersList from "./CharactersList";

function CharactersPage() {

    const {
        fetchData,
        CHARACTERS,
        pageOfCharacters,
        selectedStatus,
        selectedSpecies,
        selectedGender,
        choiceStatusHandler,
        choiceSpeciesHandler,
        choiceGenderHandler,
        CharactersUrlBuilder,
        nextPageHandler,
        prevPageHandler,
        pageNumber
    } = useContext(Context)

    useEffect(() => {
        fetchData(CharactersUrlBuilder(CHARACTERS, pageOfCharacters))
    }, [pageOfCharacters, selectedStatus, selectedSpecies, selectedGender])

    return (
        <ItemPageWrapper>
            <FilterWrapper>
                <Filter select={selectedStatus} choice={choiceStatusHandler} filter={status}/>
                <Filter select={selectedSpecies} choice={choiceSpeciesHandler} filter={species}/>
                <Filter select={selectedGender} choice={choiceGenderHandler} filter={gender}/>
            </FilterWrapper>
            <CharactersList/>
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