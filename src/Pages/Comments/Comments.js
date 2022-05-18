import { Button } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

class Comments extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userId:'',
       title:'',
       body:''
    }
  }
  chanheHandler=(e)=>{
      this.setState({[e.target.name]:e.target.value})
  }
  submitHandler=(e)=>{
      e.preventDefault() //prevent page refresh
      console.log(this.state)
      axios
      .post('https://jsonplaceholder.typicode.com/posts',this.state)
      .then(response=>{
          console.log(response)
      })
      .catch(error=>{
          console.log(error)
      })
  }
  render() {
    const{userId,title,body}=this.state
    return (
      <div>
          <form onSubmit={this.submitHandler}>

              <div>
                  Name 
                  <input 
                    
                    type="text" 
                    name="userId"
                    value={userId}
                    onChange={this.chanheHandler}
                    />
              </div>

              <div>
                  Tipic
                  <input 
                    type="text" 
                    name="title"
                    value={title}
                    onChange={this.chanheHandler}
                    />
                </div>

              <div>
                  Comment
                  <input 
                    type="text" 
                    name="body"
                    value={body}
                    onChange={this.chanheHandler}
                    />
                </div>
                <Button 
                  type="submit"
                  variant='contained'
                  color='primary'
                  size='large'
                  style={{alignSel:"center",marginTop:20}}>
                   
                    Submit
                    
                </Button>

          </form>
      
      <Button
            variant='contained'
            color='secondary'
            size='large'
            style={{alignSel:"center",marginTop:20}}
            href='/'
            >
                Go To Homepag
            </Button>
            </div>
    )
  }
}

export default Comments