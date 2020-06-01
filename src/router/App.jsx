import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Layout from '../pages/Layout';

// Components
import Badges from '../pages/Badges';
import BadgeDetail from '../pages/BadgeDetail';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';


const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/:badgeId" component={BadgeDetail} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;