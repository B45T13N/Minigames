import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import MastermindComponent from './Pages/MastermindComponent/MastermindComponent';

function App() {
  return (
    <div className="App w-screen h-screen">
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Hello world</h1>} />
          <Route path='/mastermind' element={<MastermindComponent />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

export default App;
