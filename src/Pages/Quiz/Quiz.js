import "./Quiz.css";
import React, { useEffect, useState } from 'react'
import {CircularProgress} from "@material-ui/core" 

const Quiz=({name,score,questions,setQuestions,setScore})=>{
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
    },[questions]);
    console.log(options)
    const handleshuffle=(options)=>{
        return options.sort(()=>Math.random() - 0.5);
    }
    return(
        <div>
            <span className='subtitle'>Welcome, {name}</span>
            {
                questions?(
                    <> Questions</>

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