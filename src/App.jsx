import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainNavbar from './components/Navbar';
import Footer from './components/Footer';
import Start from './pages/start/start';
import Register from './pages/register/register';
import Worker from './pages/worker/worker';
import { WorkerProvider } from './context/workersContext';

function App() {
  return (
    <WorkerProvider>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route exact path='/' Component={Start}/>
          <Route path='/register' Component={Register}/>
          <Route path='/worker/:id' Component={Worker}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </WorkerProvider>
  );
}

export default App;
