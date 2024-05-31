
import './App.css';
import { NavDesktop } from './components/navbar.tsx';
import { NavMobile } from './components/nav-mobile.tsx';
import { CreateNew } from './components/CreateNew.tsx';
import { History } from './components/History.tsx';
import { Help } from './components/Help.tsx';
import MediaQuery from 'react-responsive';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
        <header className="App-header">
          <MediaQuery minWidth={720}>
            <NavDesktop />
          </MediaQuery>
          <MediaQuery maxWidth={720}>
            <NavMobile />
          </MediaQuery>
          <Router>
          <Routes>
          <Route path='/' element={<CreateNew />} />
          <Route path='/History' element={<History />} />
          <Route path='/Help' element={<Help />} />
          </Routes>
        </Router>
        </header>

    </div>
  );
}

export default App;