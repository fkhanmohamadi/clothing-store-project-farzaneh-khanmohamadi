import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/home';
import Login from '../pages/login';
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
