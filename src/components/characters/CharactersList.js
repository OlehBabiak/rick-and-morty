import React, {useContext} from 'react';
import Character from "./Character";
import Context from "../context/Context";
import sorry from "../../images/artworks-pNwozNu8pdWpUcuw-In2zNQ-t500x500.jpg"
import {ErrorWrapper, ListWrapper, LoaderWrapper} from "./ItemsListStyled";
import Loader from "react-loader-spinner";
import NotFound from "../Not Found/NotFound";

function CharactersList() {

    const {
        charactersArray,
        error,
        isLoading
    } = useContext(Context)

    return (
        <ListWrapper>
            {error &&
                <ErrorWrapper>
                    <img src={sorry} alt="404"/>
                    <p>{error}</p>
                </ErrorWrapper>}
            {!isLoading &&
            <LoaderWrapper><Loader type="Circles" color="#C9C923E2" height={80} width={80}/></LoaderWrapper>}
            {!charactersArray.length &&
            <NotFound text={'ERROR 404'}/>}
            {charactersArray.map(character =>
                <Character character={character} key={character.id}/>
            )}
        </ListWrapper>
    );
}

export default CharactersList;