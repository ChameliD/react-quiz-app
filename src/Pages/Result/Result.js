import { Button } from '@material-ui/core';
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Result.css';
const Result=({name,score})=>{
    const nevigation = useNavigate();

    useEffect(() => {
        if(!name){
            nevigation('/')
        }
      
    }, [name,nevigation])
    
    return(
        <div className='result'>
            <span className='title'>Final Score : {score}</span>
            
            <Button 
            variant='contained'
            color='secondary'
            size='large'
            style={{alignSel:"center",marginTop:20}}
            href='/'
            >
                Go To Homepag
            </Button>

            <Button 
            variant='contained'
            color='secondary'
            size='large'
            style={{alignSel:"center",marginTop:20}}
            href='/viewcomments'
            >
            Comments and Reviews
            </Button>

        </div>
    )
}
export default Result