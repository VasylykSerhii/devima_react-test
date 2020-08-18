import React from 'react';
import '../../reset.css'
import '../../assets/fonts/BrandonText/BrandonText.css'
import './App.scss'

import Menu from '../menu/'
import Landing from '../../pages/landing/'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Landing></Landing>
    </div>
  );
}

export default App;
