import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Question.css"

const Question = ({
    currQues,
    setCurreQues,
    questions,
    options,
    correct,
    score,
    setScore,
    
}) => {
    const[selected,setSelected]=useState();
    const[error,setError]=useState(false);
    const nevigation = useNavigate();

    const handleSelected=(i)=>{
      if(selected===i && selected===correct){
        return "select"
      }
      else if(i===correct){
        return "wrong"
      }
      else if(i===correct){
        return "select"
      }
    };

    const handeleCheack=(i)=>{
      setSelected(i);
      if(i===correct)setScore(score+1);
      setError(false);
    };

    const handleNext=()=>
    {
      if(currQues>8){
        nevigation('/result')
      }
      else if(selected){
        setCurreQues(currQues+1);
        setSelected();
      }
      else{
        setError("Please select an option first");
      }
    }

    const handleQuit=()=>{};
    

  return (
    <div className='question'>
      <h1>Question {currQues+1}</h1>
      <div className='singleQuestion'>
        <h2>{questions[currQues].question}</h2>
        <div className='option'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {
            options &&
            options.map((i)=>(
              <button
              onClick={()=>handeleCheack(i)}
              className={`singleOption ${selected && handleSelected(i)}`}
              key={i}
              disabled={selected}>
                {i}
              </button>
            ))
          }
        </div>
        <div className='controls'>
          <Button
          variant='contained'
          color='secondary'
          size='large'
          style={{width:185}}
          href='/'
          onClick={handleQuit}>
            Quite
          </Button>
          
          <Button
          variant='contained'
          color='primary'
          size='large'
          style={{width:185}}
          onClick={handleNext}>
            Next Question
          </Button>
        </div>

      </div>  
    </div>
  )
}

export default Question