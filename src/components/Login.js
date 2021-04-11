import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { TextField, Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E0E0E0',
    },
  },
});

class Login extends Component {
  state = { 
    loggedIn: false,
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  handleLogin = (e) => {
    e.preventDefault()
    const payload = this.state
    payload.loggedIn = true
    this.props.loginUser(payload)
    document.cookie = 'loggedIn=true;max-age=60x10000'
  }

  render() {
    return (
        <ThemeProvider theme={theme}>
            <form className='form' onSubmit={this.handleLogin}>
              <TextField required 
                  onChange={this.handleChange}
                  value={this.state.username}
                  name="username"
                  className="input" label="Username" type="text"/>
              <TextField required 
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.password}
                  className="input" label="Password" type="password"/>
              <Button type="submit" variant="contained" color="primary">
              Login            
                {this.state.loggedIn ? <Redirect to="/" /> : null}
              </Button>
          </form>
        </ThemeProvider>
    );
  }
}

export default Login;
