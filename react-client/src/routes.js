// Dependencies
import React from 'react';
import { Route, Switch} from 'react-router-dom';

//Components
import App from './components/App';
import Inicio from './components/Inicio';
import Peliculas from './components/Peliculas';
import Series from './components/Series';
import Perfil from './components/Perfil';
import Page404 from './components/Page404';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/Peliculas" component={Peliculas} />
            <Route exact path="/Series" component={Series} />
            <Route exact path="/Perfil" component={Perfil} />
            <Route component={Page404} />
        </Switch>
    </App>;

    export default AppRoutes;
            