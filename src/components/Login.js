import React, { Component } from 'react'
// import { Redirect } from 'react-router'
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


const Login = (props) => {

  const handleChange = (e) => {
    console.log("User:", props.user)
    props.user[e.target.name] = e.target.value

  }

  const handleLogin = (e) => {
    e.preventDefault()
    document.cookie = 'loggedIn=true;max-age=60x1000x5'
    window.location.replace("/")
  }
  return (
    <ThemeProvider theme={theme}>
        <form className='login' onSubmit={handleLogin}>
          <TextField required 
              onChange={handleChange}
              // value={props.user.username}
              name="username"
              className="input" label="Username" type="text"/>
          <TextField required 
              onChange={handleChange}
              name='password'
              className="input" label="Password" type="password"/>
          <Button type="submit" variant="contained" color="primary">
          Login
          </Button>
      </form>
    </ThemeProvider>
  )
}

export default Login


// class Login extends Component {
//   state = {
//     username: '',
//     password: ''
//   }

//   handleChange = (e) => {
//     // console.log("User:", this.state)
//     const state = { ...this.state }
//     state[e.target.name] = e.target.value
//     this.setState(state)
//   }

//   handleLogin = (e) => {
//     e.preventDefault()
//     document.cookie = 'loggedIn=true;max-age=60x1000x5'
//     window.location.replace("/")
//   }
//   render() {
//     return (
//         <ThemeProvider theme={theme}>
//             <form className='login' onSubmit={this.handleLogin}>
//               <TextField required 
//                   onChange={this.handleChange}
//                   // value={props.user.username}
//                   name="username"
//                   className="input" label="Username" type="text"/>
//               <TextField required 
//                   onChange={this.handleChange}
//                   // value={props.user.password}
//                   className="input" label="Password" type="password"/>
//               <Button type="submit" variant="contained" color="primary">
//               Login
//               </Button>
//           </form>
//         </ThemeProvider>
//     );
//   }
// }

// export default Login;
