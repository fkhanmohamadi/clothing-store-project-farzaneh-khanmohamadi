import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/home';
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
