import React, { useEffect, useState } from 'react'


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
            Quiz Page
        </div>
    )
}
export default Quiz