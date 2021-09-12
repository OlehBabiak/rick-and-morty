import React, {useContext, useEffect, useState} from 'react';
import Context from "../context/Context";
import Filter from "../filter/Filter";
import Pagination from "../Pagination/Pagination";
import EpisodeList from "./EpisodeList";
import {FilterWrapper, ItemPageWrapper} from "../characters/ItemsListStyled";

function EpisodesPage() {

    const {
        EPISODES,
        nextPageHandler,
        prevPageHandler,
        pageOfCharacters,
        pageNumber,
        onlyUnique,
        setIsLoading,
        setError,
        setpageNumber,
        api
    } = useContext(Context)

    const episodeNames = ['']
    const [selectedEpisodeName, setSelectedEpisodeName] = useState(episodeNames[0]);
    const [episodeArray, setEpisodeArray] = useState([]);

    episodeArray.forEach(value => episodeNames.push(value.name))

    const choiceEpisodeNameHandler = (e) => {
        setSelectedEpisodeName(e.target.value)
    }

    const EpisodeUrlBuilder = (page) => `${api}/episode?page=${page}&name=${selectedEpisodeName}`

    const fetchEpisodes = async (urlbuilder) => {
        try {
            setIsLoading(false)
            setError(null)
            const resp = await fetch(urlbuilder)
            if (!resp.ok) {
                throw  Error('Unfortunately, could not fetch data...')
            } else {
                const json = await resp.json()
                const {results, info} = json
                setEpisodeArray(results)
                setpageNumber(info.pages)
            }
        } catch (err) {
            setError(err.message)
            setEpisodeArray(null)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchEpisodes(EpisodeUrlBuilder(EPISODES, pageOfCharacters))
    }, [pageOfCharacters, selectedEpisodeName])

    return (
        <ItemPageWrapper>
            <FilterWrapper>
                <Filter select={selectedEpisodeName} choice={choiceEpisodeNameHandler} filter={episodeNames.filter(onlyUnique)}/>
            </FilterWrapper>
            <EpisodeList
            episodeArray = {episodeArray}
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

export default EpisodesPage;