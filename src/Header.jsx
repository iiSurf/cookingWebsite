/* eslint-disable no-unused-vars */
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <Container  maxWidth="xl" >
      <Typography
            variant="h4"
            noWrap
            component="h1"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              // textAlign: 'center',
              justifyContent:'center',
              marginTop: '5rem',
            }}
          >
            Header
          </Typography>
      

    </Container>
  )
}

export default Header