import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";

function Episodes() {

    const {
        fetchData,
        EPISODES,
        charactersArray,
        nextPageHandler,
        prevPageHandler,
        pageOfCharacters,
        pageNumber
    } = useContext(Context)

    useEffect(() => {
        fetchData(EPISODES, pageOfCharacters)
    }, [pageOfCharacters])

    return (
        <div>
            {charactersArray.map(episode =>
                <tr>
                    <div>
                        <div>{episode.id}</div>
                        <div>{episode.name}</div>
                        <div>{episode.air_date}</div>
                    </div>
                </tr>
                )}
            {pageOfCharacters > 1 && <button onClick={() => prevPageHandler()}>Prew Page</button>}
            {pageOfCharacters < pageNumber && <button onClick={() => nextPageHandler()}>Next Page</button>}
        </div>
    );
}

export default Episodes;