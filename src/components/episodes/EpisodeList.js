import React, {useContext} from 'react';
import Context from "../context/Context";
import sorry from "../../images/artworks-pNwozNu8pdWpUcuw-In2zNQ-t500x500.jpg"
import {ErrorWrapper, ListWrapper, LoaderWrapper} from "../characters/ItemsListStyled";
import Loader from "react-loader-spinner";
import NotFound from "../Not Found/NotFound";
import EpisodCard from "./EpisodCard";

function EpisodeList({episodeArray}) {

    const {
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
            {isLoading &&
            <LoaderWrapper><Loader type="Circles" color="#C9C923E2" height={80} width={80}/></LoaderWrapper>}
            {episodeArray && episodeArray.length === 0 &&
            <NotFound text={'No Episods'}/>}
            {episodeArray.map(character =>
                <EpisodCard
                    key={character.id}
                    character={character}
                />
            )}
        </ListWrapper>
    );
}

export default EpisodeList;