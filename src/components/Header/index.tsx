import React from 'react'
import './style.scss'
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';

const Header:React.FC = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" className="logo">
            Ideco
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header