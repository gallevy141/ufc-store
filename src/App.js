import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

//Import components
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './pages/MainPage'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                
                <Switch>
                    <Route path="/" exact component={MainPage} />
                </Switch>

                <Footer />
            </div>
        </Router>
    )
}

export default App