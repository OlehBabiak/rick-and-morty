import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import Filter from "../filter/Filter";
import Pagination from "../Pagination/Pagination";
import EpisodeList from "./EpisodeList";
import {FilterWrapper, ItemPageWrapper} from "../characters/ItemsListStyled";

function EpisodesPage() {

    const {
        fetchData,
        EPISODES,
        nextPageHandler,
        prevPageHandler,
        pageOfCharacters,
        pageNumber,
        selectedEpisodeName,
        choiceEpisodeNameHandler,
        episodeNames,
        EpisodeUrlBuilder,
        onlyUnique
    } = useContext(Context)

    useEffect(() => {
        fetchData(EpisodeUrlBuilder(EPISODES, pageOfCharacters))
    }, [pageOfCharacters, selectedEpisodeName])

    return (
        <ItemPageWrapper>
            <FilterWrapper>
                <Filter select={selectedEpisodeName} choice={choiceEpisodeNameHandler} filter={episodeNames.filter(onlyUnique)}/>
            </FilterWrapper>
            <EpisodeList/>
            <Pagination
                nextPageHandler={nextPageHandler}
                prevPageHandler={prevPageHandler}
                pageNumber={pageNumber}
                pageOfCharacters={pageOfCharacters}
            />
        </ItemPageWrapper>
    );
}

export default EpisodesPage;