import { Route, Routes } from 'react-router-dom';
import { Map } from './pages/Map';
import { Monitoring } from './pages/Monitoring';
import { Main } from './pages/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Map />} path='/' />
        <Route element={<Main />} path='/home' />
        <Route element={<Monitoring />} path='/monitoring' />
      </Routes>
    </div>
  );
}

export default App;
