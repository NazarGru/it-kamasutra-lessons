import React, { Component } from 'react'

import { AppBar, Container, Typography } from '@mui/material';
class Header extends Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                LOGO
              </Typography>
            </Typography>
          </Container>
        </AppBar>

      </>
    )
  }
}

export default Header;