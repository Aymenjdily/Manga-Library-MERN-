import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/library'
          element={<Home />}
        />
        <Route
          path='/'
          element={<LandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
