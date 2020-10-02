import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './views/home'
import Favorites from './views/favorites'
import Details from './views/details'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/favorites" component={Favorites} />
                <Route path="/details/:id?" component={Details} />
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}