import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import Character from "./Character";
import CharactersFilter from "./filter/CharactersFilter";
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
            {pageOfCharacters > 1 && <Button style={{
                color: 'aliceblue',
                fontSize: 'small',
                background: '#0b3d91'
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