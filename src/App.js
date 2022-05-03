import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage:"url(./background2.png"}}>
        <Header/> 

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/quiz" element={<Quiz/>}/>
          <Route exact path="/result" element={<Result/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
