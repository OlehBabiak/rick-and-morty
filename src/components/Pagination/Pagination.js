import React from 'react';
import {Button} from "@material-ui/core";
import {buttonStyle} from "../constants"

const Pagination = ({pageOfCharacters, nextPageHandler, prevPageHandler, pageNumber}) => {

    return (
        <div>
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
        </div>
    );
}

export default Pagination;