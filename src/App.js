import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage:"url(./background2.png"}}>
        <Header/> 
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
