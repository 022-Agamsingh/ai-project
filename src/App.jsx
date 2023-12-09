import { BrowserRouter ,Router, Route,Routes} from 'react-router-dom';
import Home from './assets/pages/home';
import SingUp from './assets/pages/SignUp';
import Singin from './assets/pages/SignIn';
import About from './assets/pages/about';
import Profile from './Profile';
import Header from './components/Header';
// import React from 'react';


export default function App() {
  return (
  <BrowserRouter>
 
  <Header />
  <Routes>
  <Route>
  <Route path="/" element={<Home />} />
  <Route path="/sign-in" element={<singIn/>} />
  <Route path="/sign-up" element={<SingUp/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/Profile" element={<Profile/>} />
 
  </Route>
  </Routes> 

  </BrowserRouter>
  );
  
}
