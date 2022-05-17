import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';
import Comments from './Pages/Comments/Comments';
import CommentCreater from './Pages/CommentCreater/CommentCreater'

function App() {
  const [name,setName]=useState("");
  const[questions, setQuestions]=useState("");
  const[score,setScore]=useState(0);

  const fetchQuestions=async(category='',difficulty='')=>{
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);

  };

  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage:"url(./background2.png"}}>
        <Header/> 

        <Routes>
          <Route exact path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
          <Route exact path="/quiz" element={<Quiz
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
          />}/>
          <Route exact path="/result" element={<Result  name ={name} score={score}/>}/>
          <Route exact path='/comments' element={<Comments/>}/>
          <Route exact path='/commentCreater' element={<CommentCreater/>}/>
          
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
