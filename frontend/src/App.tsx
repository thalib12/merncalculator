import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import History from './components/History';
import Calculator from './components/Calculator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculator />} />
        <Route path='history' element={<History />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
