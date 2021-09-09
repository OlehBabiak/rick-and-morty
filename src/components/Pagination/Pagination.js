import React from 'react';
import {Button} from "@material-ui/core";
import {buttonStyle} from "../constants"
import {PaginationWrapper} from "./PaginationStyled";

const Pagination = ({pageOfCharacters, nextPageHandler, prevPageHandler, pageNumber}) => {

    return (
        <PaginationWrapper>
            {pageOfCharacters > 1 &&
            <Button
                style={buttonStyle}
                onClick={() => prevPageHandler()}
            >
                Prew Page
            </Button>}
            {pageOfCharacters < pageNumber &&
            <Button
                style={buttonStyle}
                onClick={() => nextPageHandler()}
            >
                Next Page
            </Button>}
        </PaginationWrapper>
    );
}

export default Pagination;