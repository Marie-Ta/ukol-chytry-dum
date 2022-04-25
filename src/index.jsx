import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import smartHomeData from './smartHomeData.js';
import Lights from './components/Lights';

const App = () => (
  <>
    <div className="container">
      <Header title="Chytrý dům"></Header>
      <Dashboard data={smartHomeData}>
       <Lights> 
        
       </Lights>
      </Dashboard>
    </div>
  </>
);



render(<App />, document.querySelector('#app'));
