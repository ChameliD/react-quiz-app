import Header from './components/Header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage:"url(./background2.png"}}>
        <Header/> 
      </div>
    </BrowserRouter>
  );
}

export default App;
