import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import ShowDetails from './pages/show-details/ShowDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/show/:id' element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
