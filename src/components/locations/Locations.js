import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";

function Locations() {

    const {
        fetchData,
        LOCATIONS,
        charactersArray,
        nextPageHandler,
        prevPageHandler,
        pageOfCharacters,
        pageNumber
    } = useContext(Context)

    useEffect(() => {
        fetchData(LOCATIONS, pageOfCharacters)
    }, [pageOfCharacters])

    return (
        <div>
            {charactersArray.map(character =>
                <div>
                    <div>{character.id}</div>
                    <div>{character.name}</div>
                    <div>{character.type}</div>
                    <div>{character.dimension}</div>
                </div>)}
            {pageOfCharacters > 1 && <button onClick={() => prevPageHandler()}>Prew Page</button>}
            {pageOfCharacters < pageNumber && <button onClick={() => nextPageHandler()}>Next Page</button>}
        </div>
    );
}

export default Locations;