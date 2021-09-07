import React, {useContext} from 'react';
import {Link, useParams, useRouteMatch} from "react-router-dom";
import Context from "../context/Context";
import Character from "./Character";
import {Button} from "@material-ui/core";

function CharacterDetail() {

    const {
        charactersArray,
    } = useContext(Context)

    const {id} = useParams()

    return (
        <div>
            {charactersArray
                .filter(list => list.id.toString() === id.slice(1))
                .map(character =>
                    <>
                        <div><img src={character.image} alt='This is character photo'/></div>
                        <div>Name: {character.name ?? 'not defined'}</div>
                        <div>Species: {character.species ?? 'not defined'}</div>
                        <div>Gender: {character.gender ?? 'not defined'}</div>
                        <div>Status: {character.status ?? 'not defined'}</div>
                    </>
            )}
            <Link to='/character'>
                <Button style={{
                    color: 'aliceblue',
                    fontSize: 'large',
                    background: '#0b3d91'
                }}>
                    GO BACK
                </Button>
            </Link>
        </div>
    );
}

export default CharacterDetail;