import React from 'react';
import './App.css';
import ColorComponent from './Components/ColorComponent/ColorComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main>
        <h3>Hello world</h3>
        <ul>Voici la liste :</ul>
        <ColorComponent id={1} color="blue" />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
