import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();


const AppRouter = () => {
    return (
        <div>
            {/* Container for all Routes */}
            <Router history={history}>
                <div>
                    {/* <Switch> is Responsible for 404 page showing alone and not with other pages */}
                    <Switch>
                        {/* For each Route use <Route> */}
                        <PublicRoute path="/" component={LoginPage} exact={true} />
                        <PrivateRoute path="/dashboard" component={DashboardPage}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};


export default AppRouter;