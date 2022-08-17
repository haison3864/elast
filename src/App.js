
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Korzina from './components/Korzina';
import More from './components/More';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/more' element={<More/>}/>
          <Route path='/korzina' element={<Korzina/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
