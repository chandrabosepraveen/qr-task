import logo from './logo.svg';
import './App.css';
import QrCode from './Components/QrCode';
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gpay from './Components/Gpay';
import PhonePe from './Components/PhonePe';

function App() {
  return (
    <div>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<QrCode />} />
        <Route path="/QrCode" element={<QrCode />} />
        <Route path="/Gpay" element={<Gpay />} />
        <Route path="/PhonePe" element={<PhonePe />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
