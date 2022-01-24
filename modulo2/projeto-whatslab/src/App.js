import React from 'react';
import './App.css';
import {Body} from './Components/Props'
import { Head } from './Components/Header';
import { Footer } from './Components/Footer'

function App() {
  return (
    <div className="App">
            <Head></Head>
            <Body></Body>
            <Footer></Footer>
    </div>
  );
}

export default App;
