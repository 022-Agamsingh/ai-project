import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './assets/pages/home';
import Singin from './assets/pages/singin';
// import SingUp from './assets/pages/SingUp';
import SingUp from './assets/pages/SingUp';
import About from './assets/pages/about';
import Profile from './Profile';

export default function App() {
  return <BrowserRouter>
  <Route>
  <Route path="/" element={<Home/>} />
  <Route path="/sign-in" element={<Singin/>} />
  <Route path="/sign-up" element={<SingUp/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/profile" element={<Profile/>} />
  </Route>
  </BrowserRouter>
}
