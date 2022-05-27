import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import QuizHome from './Pages/QuizHome/QuizHome';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';
import ViewComments from './Pages/ViewComments/ViewComments'
import Comments from './Pages/Comments/Comments';
import Infopage from './Pages/Infopage/Infopage';
import Home from './Pages/Result/Home/Home';
import ListEployeeComponents from './components/Employee/ListEployeeComponents';


function App() {
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
          
        <Route exact path='/' element={<Home />}/>
          <Route exact path="/quiz-home" element={<QuizHome  fetchQuestions={fetchQuestions}/>}/>
          <Route exact path='/employeeList' element={<ListEployeeComponents />}/>
          <Route exact path="/quiz" element={<Quiz
    
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
          />}/>
          <Route exact path="/result" element={<Result score={score}/>}/>
         <Route exact path='/viewcomments' element={<ViewComments />}/>
         <Route exact path='/comments' element={<Comments />}/>
         <Route exact path='/info' element={<Infopage />}/>
          
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
