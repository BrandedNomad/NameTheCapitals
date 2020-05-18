import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Test from '../components/Test'
import NotFoundPage from "../components/NotFoundPage";
import Start from "../components/Start"
import Results from "../components/Results";


const AppRouter =()=>{
    return (
        <BrowserRouter>
            <div className="router__container">
                <Switch>
                    <Route path="/" component={Start} exact={true}/>
                    <Route path="/test" component={Test} exact={true}/>
                    <Route path="/results/:score" component={Results} />
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter

