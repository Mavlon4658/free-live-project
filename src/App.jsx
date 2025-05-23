import { Route, Routes } from 'react-router-dom';
import { Main, Map, Monitoring, MonitoringReport } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Map />} path='/' />
        <Route element={<Main />} path='/home' />
        <Route element={<Monitoring />} path='/monitoring' />
        <Route element={<MonitoringReport />} path='/monitoring-report' />
      </Routes>
    </div>
  );
}

export default App;
