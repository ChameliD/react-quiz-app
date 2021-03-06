import "./Quiz.css";
import React, { useEffect, useState } from 'react'
import {CircularProgress} from "@material-ui/core" 
import Question from "../../components/Question/Question";

const Quiz=({score,questions,setQuestions,setScore})=>{
    const[options,setOptions]=useState();
    const[currQues,setCurreQues]=useState(0);

    useEffect(()=>{
        console.log(questions);

        setOptions(
            questions && handleshuffle([
                questions[currQues]?.correct_answer,
               ...questions[currQues]?.incorrect_answers,
            ])
        )
    },[questions, currQues]);
    console.log(options)
    const handleshuffle=(options)=>{
        return options.sort(()=>Math.random() - 0.5);
    }
    return(
        <div className="quiz">
            <span className='subtitle'>Welcome</span>
            {
                questions?(
                    <> 
                    <div className="quizInfo">
                        <span>{questions[currQues].category}</span>
                        <span>Score: {score}</span>
                    </div>    
                    <Question

                        currQues={currQues}
                        setCurreQues={setCurreQues}
                        questions={questions}
                        options={options}
                        correct={questions[currQues]?.correct_answer}
                        score={score}
                        setScore={setScore}
                        

                    />   </>            

                ):(
                    <CircularProgress
                    style={{margin:100}}
                    color="inherit"
                    size={150}
                    thickness={1}/>
                )
            }
        </div>
    )
}
export default Quiz