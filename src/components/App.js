import React from "react";
import history from "../history";
import { Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import "../styles.css";

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Route path="/" exact render={() => (<Home />)} />
            </Router>
        </div >
    )
};


export default App;