import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import Filter from "../filter/Filter";

function Episodes() {

    const {
        fetchData,
        EPISODES,
        charactersArray,
        nextPageHandler,
        prevPageHandler,
        pageOfCharacters,
        pageNumber,
        selectedEpisodeName,
        choiceEpisodeNameHandler,
        episodeNames,
        EpisodeUrlBuilder
    } = useContext(Context)

    useEffect(() => {
        fetchData(EpisodeUrlBuilder(EPISODES, pageOfCharacters))
    }, [pageOfCharacters, selectedEpisodeName])

    return (
        <div>
            <Filter select={selectedEpisodeName} choice={choiceEpisodeNameHandler} filter={episodeNames}/>
            {charactersArray.map(episode =>
                    <div key={episode.id}>
                        <div>{episode.id}</div>
                        <div>{episode.name}</div>
                        <div>{episode.air_date}</div>
                    </div>
                )}
            {pageOfCharacters > 1 && <button onClick={() => prevPageHandler()}>Prew Page</button>}
            {pageOfCharacters < pageNumber && <button onClick={() => nextPageHandler()}>Next Page</button>}
        </div>
    );
}

export default Episodes;