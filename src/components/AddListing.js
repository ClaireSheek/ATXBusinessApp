import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E0E0E0',
    }
  },
});

const AddListing = () => {

const handleSubmit = () => {
  console.log('submit')
}

  return (
    <ThemeProvider theme={theme}>
    <form className='login' onSubmit={handleSubmit}>
      <TextField required 
          // onChange={this.handleChange}
          // value={props.user.username}
          name="username"
          className="input" label="Name" type="text"/>
      <TextField required 
          // onChange={this.handleChange}
          // value={props.user.password}
          className="input" label="Address" type="password"/>
        <TextField required 
          // onChange={this.handleChange}
          // value={props.user.username}
          name="username"
          className="input" label="Hours (example: 8AM - 5PM)" type="text"/>
        <TextField required 
          // onChange={this.handleChange}
          // value={props.user.username}
          name="username"
          className="input" label="Description" type="text"/>
      <Button type="submit" variant="contained" color="primary">
      Save
      </Button>
  </form>
</ThemeProvider>
  )
}

export default AddListing
