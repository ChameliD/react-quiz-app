import React, { useState } from 'react'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Question = ({
    currQues,
    setCurreQues,
    questions,
    options,
    correct,
    score,
    setScore,
    setQuestions
}) => {
    const[selected,setSelected]=useState();
    const[error,setError]=useState(false);
    const handleSelected=(i)=>{
      if(selected===i && selected===correct){
        return "select"
      }
      else if(i===correct){
        return "wrong"
      }
      else if(i==correct){
        return "select"
      }
    };
  return (
    <div>
      <h1>Question {currQues+1}</h1>
      <div className='singleQuestion'>
        <h2>{questions[currQues].question}</h2>
        <div className='option'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {
            options &&
            options.map((i)=>(
              <button
              onClick={()=>{}}
              className={`singleOption ${selected && handleSelected(i)}`}
              key={i}
              disabled={selected}>
                {i}
              </button>

            ))
          }
        </div>
      </div>  
    </div>
  )
}

export default Question