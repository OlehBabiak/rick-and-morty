import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import Context from "../context/Context";
import {Button} from "@material-ui/core";
import {buttonStyle} from "../constants"
import {DetailContentWrapper, DetailPageWrapper} from "./CharacterDetailStyled";

function CharacterDetail() {

    const {
        charactersArray,
    } = useContext(Context)

    const {id} = useParams()

    return (
        <DetailPageWrapper>
            {charactersArray
                .filter(list => list.id.toString() === id.slice(1))
                .map(character =>
                    <DetailContentWrapper key={character.name}>
                        <img
                            style={{
                                width: '100%',
                                margin: '5px'
                            }}
                            src={character.image}
                            alt='This is character'/>
                        <div>
                            <div>Name: {character.name ?? 'not defined'}</div>
                            <div>Species: {character.species ?? 'not defined'}</div>
                            <div>Gender: {character.gender ?? 'not defined'}</div>
                            <div>Status: {character.status ?? 'not defined'}</div>
                            <Link to='/character'>
                                <Button style={buttonStyle}>
                                    GO BACK
                                </Button>
                            </Link>
                        </div>
                    </DetailContentWrapper>
                )}
        </DetailPageWrapper>
    );
}

export default CharacterDetail;