import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProjectList from "../Project/List";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <ProjectList/>
                    </Route>
                    <Route exact path="/hello">
                        <h1>Hello, world!</h1>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
