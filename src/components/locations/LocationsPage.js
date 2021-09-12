import React, {useContext, useEffect, useState} from 'react';
import Context from "../context/Context";
import Filter from "../filter/Filter";
import Pagination from "../Pagination/Pagination";
import LocationList from "./LocationList";
import {FilterWrapper, ItemPageWrapper} from "../characters/ItemsListStyled";

function LocationsPage() {

    const {
        LOCATIONS,
        nextPageHandler,
        prevPageHandler,
        pageOfCharacters,
        pageNumber,
        onlyUnique,
        api,
        setIsLoading,
        setError,
        setpageNumber,
    } = useContext(Context)

    const [locationArray, setLocationArray] = useState([]);

    const locationNames = ['']
    const locationTypes = ['']
    const locationDimensions = ['']
    locationArray.forEach(value => locationNames.push(value.name))
    locationArray.forEach(value => locationTypes.push(value.type))
    locationArray.forEach(value => locationDimensions.push(value.dimension))

    const [selectedLocationName, setSelectedLocationName] = useState(locationNames[0]);
    const [selectedLocationType, setSelectedLocationType] = useState(locationTypes[0]);
    const [selectedLocationDimension, setSelectedLocationDimension] = useState(locationDimensions[0]);
    const LocationUrlBuilder = (page) => `${api}/location?page=${page}&name=${selectedLocationName}&type=${selectedLocationType}&dimension=${selectedLocationDimension}`

    const choiceLocationNameHandler = (e) => {
        setSelectedLocationName(e.target.value)
    }
    const choiceLocationTypeHandler = (e) => {
        setSelectedLocationType(e.target.value)
    }
    const choiceLocationDimensionHandler = (e) => {
        setSelectedLocationDimension(e.target.value)
    }

    const fetchLocations = async (urlbuilder) => {
        try {
            setIsLoading(false)
            setError(null)
            const resp = await fetch(urlbuilder)
            if (!resp.ok) {
                throw  Error('Unfortunately, could not fetch data...')
            } else {
                const json = await resp.json()
                const {results, info} = json
                setLocationArray(results)
                setpageNumber(info.pages)
            }
        } catch (err) {
            setError(err.message)
            setLocationArray(null)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchLocations(LocationUrlBuilder(LOCATIONS, pageOfCharacters))
    }, [pageOfCharacters, selectedLocationName, selectedLocationType,
        selectedLocationDimension])


    return (
        <ItemPageWrapper>
            <FilterWrapper>
                <Filter select={selectedLocationName} choice={choiceLocationNameHandler} filter={locationNames.filter(onlyUnique)}/>
                <Filter select={selectedLocationType} choice={choiceLocationTypeHandler} filter={locationTypes.filter(onlyUnique)}/>
                <Filter select={selectedLocationDimension} choice={choiceLocationDimensionHandler} filter={locationDimensions.filter(onlyUnique)}/>
            </FilterWrapper>
            <LocationList
                locationArray={locationArray}
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

export default LocationsPage;