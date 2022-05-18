import { Button } from '@material-ui/core'
import React, { Component } from 'react'

class ViewComments extends Component {
  render() {
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
          
        </div>
    )
  }
}

export default ViewComments