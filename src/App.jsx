import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListComputerComponent from './components/ListComputerComponent';
import ListMainComponent from './components/ListMainComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllDataComponent from './components/AllDataComponent';
import ComputerComponent from './components/ComputerComponent';
import MainComponent from './components/MainComponent';
import DesktopComponent from './components/DesktopComponent';
import ListDesktopComponent from './components/ListDesktopComponent';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <HeaderComponent />
        <main className='content'>
          <Routes>
            <Route path='/' element={<AllDataComponent />} />
            <Route path='/desktops' element={<ListDesktopComponent />} />
            <Route path='/add-desktop' element={<DesktopComponent />} />
            <Route path='/edit-desktop/:id' element={<DesktopComponent />} />
            <Route path='/componentsInComputer' element={<ListComputerComponent />} />
            <Route path='/add-computer' element={<ComputerComponent />} />
            <Route path='/edit-computer/:id' element={<ComputerComponent />} />
            <Route path='/components' element={<ListMainComponent />} />
            <Route path='/add-component' element={<MainComponent />} />
            <Route path='/edit-component/:id' element={<MainComponent />} />
          </Routes>
        </main>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
