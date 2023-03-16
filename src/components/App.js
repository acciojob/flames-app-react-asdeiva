import React, {Component, useState} from "react";
import '../styles/App.css';
import FlamesApp from "./FlamesApp"

class App extends Component {
    render() {

        return(
            <div id="main">
                <FlamesApp/>
               {/* Do not remove the main div */}
            </div>
        )
    }
}


export default App;
