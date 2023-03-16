import {BrowserRouter, Routes, Route, Navigate }from 'react-router-dom'
import { Footer, Navbar } from './components';
import { useAuth } from './hooks/useAuth';
import { Dashboard, Login, MangaDetails, Signup } from './pages';

//test

function App() {
  const {user} = useAuth()

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={user ? <Dashboard /> : <Navigate to='/login' />}
          />
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to='/' />}
          />
          <Route
            path='/signup'
            element={!user ? <Signup /> : <Navigate to='/' />}
          />
          <Route
            path='/detail/:id'
            element={user ? <MangaDetails /> : <Navigate to ='/login' />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
