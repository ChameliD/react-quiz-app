import { Button, MenuItem, TextField } from "@material-ui/core"
import { useState } from "react"
import Categories from "../../Data/Categories"
import "./Home.css"

const Home=({name,setName})=>{
    const[category,setCategory]=useState("");
    const{difficulty,setDifficulty}=useState("");
    return(
        <div className="content">
                <div className="setting">
                <img src='/teacher_2.png' className="banner" alt="Teacher"/>
                    <span style={{fontSize:30}}>Quiz Setting</span>

                    <div className="setting_selects">
                    
                    <TextField 
                    style={{marginBottom:25}} 
                    label="Ener Your Name" 
                    variant="outlined" 
                    onChange={(e)=>setName(e.target.value)}
                    />

                    <TextField select 
                        label="Select Category" 
                        variant="outlined" 
                        style={{marginBottom:30}}
                        onChange={(e)=>setCategory(e.target.value)}
                        value={category}
                        >
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

                    <Button variant="contained" color="primary" size="large">
                        Start Quiz
                    </Button>


                    </div>
                </div>
        </div>
    )
}
export default Home