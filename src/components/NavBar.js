import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles';
// import cookie from 'cookie'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3BB371',
      contrastText: '#fff'
    }
  },
});

const NavBar = (props) => {
  console.log('NavBar Props: ', props.user)

 const handleLogout= () => {
  window.location.replace("/login")
  document.cookie = 'loggedIn=false'
 }

  console.log("COOKIE:",document.cookie)
    return (
      <ThemeProvider theme={theme}>
                  {document.cookie === 'loggedIn=true'? (
               <AppBar className="NavBar" position="relative">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        ATX Small Business
                    </Typography>
                    <ul className="nav-list">
                      <li className="nav-list-item">
                          <Link to="/">Listings</Link>
                      </li>
                      <li className="nav-list-item">
                          <Link to="/add">Add</Link>
                      </li> 
                      <li className="nav-list-item">
                        <Link to="/login" onClick={handleLogout}>Logout</Link>
                      </li> 
                    </ul>
                  </Toolbar>
                  <div className="welcomeBanner"><h6>Logged in as:{`${props.user.username}`}</h6></div>
                </AppBar>
                    ) : (
              <AppBar  className="NavBar" position="relative">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        ATX Small Business
                    </Typography>
                      <ul className="nav-list">
                      <li className="nav-list-item">
                          <Link to="/">Listings</Link>
                      </li>
                      <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                     </li>
                    </ul>
                  </Toolbar>
                 </AppBar>)}

      </ThemeProvider>
    )
}

export default NavBar