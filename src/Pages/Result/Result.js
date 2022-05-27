import { Button } from '@material-ui/core';
import './Result.css';
const Result=({score})=>{

// Here not allows to go to the result page with out name filed. Remove the name fied. hope to add user loging page
    /*useEffect(() => {
        if(){
            nevigation('/')
        }
      
    }, [nevigation])*/
    
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

            <Button 
            variant='contained'
            color='secondary'
            size='large'
            style={{alignSel:"center",marginTop:20}}
            href='/info'
            >
            For more infomations
            </Button>

        </div>
    )
}
export default Result