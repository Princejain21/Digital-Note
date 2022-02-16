import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Accordian from './components/Accordian/Accordian';
import {
        BrowserRouter as Router,
        Switch,
        Route,
} from 'react-router-dom'
import Card from './components/todo/Card';
import Darkmode from './components/darkmode/Darkmode';
import Covid from './components/covid-tracker/Covid';
function App() {
        return (
                <>
                        
                        <Router>
                                <Navbar />
                                <Darkmode/>
                                <Switch>
                                        <Route exact path='/'>
                                                <Accordian />
                                        </Route>
                                        <Route exact
                                         path='/todo'>
                                                <Card />
                                        </Route>
                                        <Route exact
                                         path='/covid'>
                                                <Covid />
                                        </Route>
                                </Switch>

                        </Router>
                </>
        );
}
export default App;
