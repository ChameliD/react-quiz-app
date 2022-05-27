import { Button, MenuItem, TextField } from "@material-ui/core"
import { useState } from "react"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import Categories from "../../Data/Categories"
import "./QuizHome.css"
import {useNavigate} from "react-router-dom"


const Home=({name,setName,fetchQuestions})=>{

    const[error,setError]=useState(false);
    const[difficulty,setDifficulty]=useState("");


    const[category,setCategory]=useState("")
    
    const nevigation= useNavigate();

    const handleSubmit=()=>{
        if(!category||!difficulty){
            setError(true);
            return;
        }
        else{
            setError(false)
            fetchQuestions(category,difficulty)
            /*nevigation.pushState('/quiz');*/
            nevigation('/quiz', { replace: true })
        }
    }

    return(
        <div className="content">
                <div className="setting">
                
                    <span style={{fontSize:30}}>Quiz Setting</span>

                    <div className="setting_selects">
                    {error && <ErrorMessage>Plaece Fill all the feild</ErrorMessage>}
                    

                    <TextField select 
                        label="Select Category" 
                        variant="outlined" 
                        style={{marginBottom:30}}
                        onChange={(e)=>setCategory(e.target.value)}
                        value={category}>
                            {
                                Categories.map((cat)=>(
                                    
                                    <MenuItem key={cat.category} value={cat.value}>
                                        {cat.category}
                                    </MenuItem>

                                ))
                            }
                    </TextField>

                    <TextField select
                        label="Select Deficulty" 
                        variant="outlined" 
                        style={{marginBottom:30}}
                        onChange={(e)=>setDifficulty(e.target.value)}
                        value={difficulty}>
                            <MenuItem key="Easy" value="easy">Easy</MenuItem>
                            <MenuItem key="Medium" value="medium">Medium</MenuItem>
                            <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>

                    <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                        Start Quiz
                    </Button>


                    </div>
                </div>
                <img src='/teacher_2.png' className="banner" alt="Teacher"/>
        </div>
    )
}
export default Home