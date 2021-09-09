import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import Filter from "../filter/Filter";
import Pagination from "../Pagination/Pagination";
import LocationList from "./LocationList";
import {FilterWrapper, ItemPageWrapper} from "../characters/ItemsListStyled";

function LocationsPage() {

    const {
        fetchData,
        LOCATIONS,
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
        <ItemPageWrapper>
            <FilterWrapper>
                <Filter select={selectedLocationName} choice={choiceLocationNameHandler} filter={locationNames.filter(onlyUnique)}/>
                <Filter select={selectedLocationType} choice={choiceLocationTypeHandler} filter={locationTypes.filter(onlyUnique)}/>
                <Filter select={selectedLocationDimension} choice={choiceLocationDimensionHandler} filter={locationDimensions.filter(onlyUnique)}/>
            </FilterWrapper>
            <LocationList/>
            <Pagination
                nextPageHandler={nextPageHandler}
                prevPageHandler={prevPageHandler}
                pageNumber={pageNumber}
                pageOfCharacters={pageOfCharacters}
            />
        </ItemPageWrapper>
    );
}

export default LocationsPage;