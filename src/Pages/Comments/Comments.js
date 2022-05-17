import { Button } from '@material-ui/core'
import React from 'react'

function Comments() {
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
            href='/commentCreater'
            >
            Add a Comments
            </Button>
            </div>

  )
}

export default Comments