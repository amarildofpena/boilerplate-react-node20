// LoginPage.js
import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type="password" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
