import {Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import React from 'react';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
    </Route>
);
export default routes;