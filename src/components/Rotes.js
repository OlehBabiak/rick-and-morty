import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Characters from '../components/characters/Characters'
import Locations from '../components/locations/Locations'
import Episodes from '../components/episodes/Episodes'
import WatchList from '../components/myWatchList/WatchList'
import CharacterDetail from '../components/characters/CharacterDetail'
import Home from '../components/Home/Home'
import Context from "./context/Context";

function Rotes() {

    const {
        pageOfCharacters
    } = useContext(Context)

    return (
        <div>
            <Switch>
                <Route path="/character" component={Characters}/>
                <Route path="/episode" component={Episodes}/>
                <Route path="/location" component={Locations}/>
                <Route path="/watch_list" component={WatchList}/>
                <Route path="/details/:id" component={CharacterDetail}/>
                <Route path="/" component={Home} />
                <Route>
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </div>
    );
}

export default Rotes;