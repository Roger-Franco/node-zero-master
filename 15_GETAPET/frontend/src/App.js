import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom'

/* components */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Message from './components/layout/Message';
import Profile from './components/pages/User/Profile';

/* pages */
import Home from './components/pages/Home';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';

/* context */
import {UserProvider} from './context/UserContext'
import MyPets from './components/pages/Pet/MyPets';
import AddPet from './components/pages/Pet/AddPet';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
          <Container>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user/profile" element={<Profile />} />
              <Route path="/pet/mypets" element={<MyPets />} />
              <Route path="/pet/add" element={<AddPet />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        <Footer />
      </UserProvider>
    </Router>
    
  );
}

export default App;
