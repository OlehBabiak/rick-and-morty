import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import Character from "./Character";
import CharactersFilter from "./filter/CharactersFilter";
import {status, gender, species} from "../constants"

function Characters() {

    const {
        fetchData,
        CHARACTERS,
        charactersArray,
        nextPageHandler,
        prevPageHandler,
        pageOfCharacters,
        pageNumber,
        selectedStatus,
        selectedSpecies,
        selectedGender,
        choiceStatusHandler,
        choiceSpeciesHandler,
        choiceGenderHandler,
    } = useContext(Context)

    useEffect(() => {
        fetchData(CHARACTERS, pageOfCharacters)
    }, [pageOfCharacters, selectedStatus, selectedSpecies, selectedGender])

    return (
        <div>
            <CharactersFilter select={selectedStatus} choice={choiceStatusHandler} filter={status}/>
            <CharactersFilter select={selectedSpecies} choice={choiceSpeciesHandler} filter={species}/>
            <CharactersFilter select={selectedGender} choice={choiceGenderHandler} filter={gender}/>
            {charactersArray.map(character =>
                <Character character={character} key={character.id}/>
                )}
            {pageOfCharacters > 1 && <button onClick={() => prevPageHandler()}>Prew Page</button>}
            {pageOfCharacters < pageNumber && <button onClick={() => nextPageHandler()}>Next Page</button>}
        </div>
    );
}

export default Characters;