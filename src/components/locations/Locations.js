import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import Filter from "../filter/Filter";

function Locations() {

    const {
        fetchData,
        LOCATIONS,
        charactersArray,
        nextPageHandler,
        prevPageHandler,
        pageOfCharacters,
        pageNumber,
        choiceLocationNameHandler,
        choiceLocationTypeHandler,
        choiceLocationDimensionHandler,
        LocationUrlBuilder,
        locationNames,
        locationTypes,
        locationDimensions,
        selectedLocationName,
        selectedLocationType,
        selectedLocationDimension,
        onlyUnique
    } = useContext(Context)

    useEffect(() => {
        fetchData(LocationUrlBuilder(LOCATIONS, pageOfCharacters))
    }, [pageOfCharacters, selectedLocationName, selectedLocationType,
        selectedLocationDimension])


    return (
        <div>
            <Filter select={selectedLocationName} choice={choiceLocationNameHandler} filter={locationNames.filter(onlyUnique)}/>
            <Filter select={selectedLocationType} choice={choiceLocationTypeHandler} filter={locationTypes.filter(onlyUnique)}/>
            <Filter select={selectedLocationDimension} choice={choiceLocationDimensionHandler} filter={locationDimensions.filter(onlyUnique)}/>
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