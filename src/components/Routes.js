import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import CharactersPage from './characters/CharactersPage'
import LocationsPage from './locations/LocationsPage'
import EpisodesPage from './episodes/EpisodesPage'
import WatchList from '../components/myWatchList/WatchList'
import CharacterDetail from '../components/characters/CharacterDetail'
import Home from '../components/Home/Home'

function Routes() {

    return (
        <>
            <Switch>
                <Route path="/character" component={CharactersPage}/>
                <Route path="/episode" component={EpisodesPage}/>
                <Route path="/location" component={LocationsPage}/>
                <Route path="/watch_list" component={WatchList}/>
                <Route path="/details/:id" component={CharacterDetail}/>
                <Route path="/" component={Home} />
                <Route>
                    <Redirect to='/character'/>
                </Route>
            </Switch>
        </>
    );
}

export default Routes;