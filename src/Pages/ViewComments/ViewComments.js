import { Button } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'
import './ViewComments.css'
class ViewComments extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[],
       errorMsg:""
    }
  }
  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts') //Need try to replace this link with my own back end Later
      .then(response=>{
          console.log(response)
          this.setState({posts:response.data})
      })
      .catch(error=>{
          console.log(error)
          this.setState({errorMsg: 'Error retreiving data'})
      })
  }
  render() {
    const {posts, errorMsg}=this.state
    return (
      <div>
          
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
            href='/comments'
            >
            Add a Comment
            </Button>
            <div className='container'>
         <h1>List of Posts</h1> 
          {
              posts.length ?
              posts.map(post=><div key={post.id}>{post.title}</div>) :
              null
          }
          {errorMsg?<div>{errorMsg}</div>:null}
         </div>
        </div>
    )
  }
}

export default ViewComments