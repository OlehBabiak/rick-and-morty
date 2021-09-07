import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import Character from "./Character";
import Filter from "../filter/Filter";
import {status, gender, species} from "../constants"
import {Button} from "@material-ui/core";

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
        CharactersUrlBuilder
    } = useContext(Context)

    useEffect(() => {
        fetchData(CharactersUrlBuilder(CHARACTERS, pageOfCharacters))
    }, [pageOfCharacters, selectedStatus, selectedSpecies, selectedGender])

    return (
        <div>
            <Filter select={selectedStatus} choice={choiceStatusHandler} filter={status}/>
            <Filter select={selectedSpecies} choice={choiceSpeciesHandler} filter={species}/>
            <Filter select={selectedGender} choice={choiceGenderHandler} filter={gender}/>
            {charactersArray.map(character =>
                <Character character={character} key={character.id}/>
                )}
            {pageOfCharacters > 1 && <Button style={{
                color: 'rgb(28,28,26)',
                fontSize: 'small',
                background: 'rgba(201,201,35,0.89)'
            }} onClick={() => prevPageHandler()}>Prew Page</Button>}
            {pageOfCharacters < pageNumber && <Button style={{
                color: 'rgb(28,28,26)',
                fontSize: 'small',
                background: 'rgba(201,201,35,0.89)'
            }} onClick={() => nextPageHandler()}>Next Page</Button>}
        </div>
    );
}

export default Characters;