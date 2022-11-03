import React from 'react';
import './App.css';
import FormPublicKeyHash from "./components/FormPublicKeyHash";
import ListOfPkhBalance from "./components/ListOfPkhBalance";

function App() {
    return (
        <div className="App">
            <FormPublicKeyHash/>
            <ListOfPkhBalance/>
        </div>
    );
}

export default App;
