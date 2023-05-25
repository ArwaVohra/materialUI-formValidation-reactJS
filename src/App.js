import React, { Fragment, useState } from 'react';


import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import { useState,formState } from 'react';


import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
  shadows
} from '@mui/material'; // use this instead of  @material-ui/core







function App() {

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    middlename: Yup.string().required('Middlename is required'),
    lastname: Yup.string().required('Lastname is required'),
    mobile: Yup.string().required('Mobile Number is required')
      .min(10, '10 digit number required')
      .max(10, '10 digit number required'),

    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  })


  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });


  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };


  return (

    <Fragment>
      <Typography variant="h4" align="center" sx={{ m: '2rem',fontWeight: 'bold' }} >
        Register your Account
      </Typography>
      <Container maxWidth="lg" sx={{ boxShadow: 12, borderRadius: '10px' }}>
        <Paper>
          <Box px={3} py={2}>


            <Grid container spacing={1}>

              <Typography variant="h5" align="left" sx={{ m: '1rem',fontWeight: 'bold' }}>
                Personal Information
              </Typography>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="fullname"
                  name="fullname"
                  label="Full Name"
                  fullWidth
                  margin="dense"
                  {...register('fullname')}
                  error={errors.fullname ? true : false}
                />
                <Typography variant="inherit" color="error">
                  {errors.fullname?.message}
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="middlename"
                  name="middlename"
                  label="Middle Name"
                  fullWidth
                  margin="dense"
                  {...register('middlename')}
                  error={errors.middlename ? true : false}
                />
                <Typography variant="inherit" color="error">
                  {errors.middlename?.message}
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  fullWidth
                  margin="dense"
                  {...register('lastname')}
                  error={errors.lastname ? true : false}
                />
                <Typography variant="inherit" color="error">
                  {errors.lastname?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  id="mobile"
                  name="mobile"
                  label="Mobile"
                  fullWidth
                  margin="dense"
                // {...register('mobile')}
                // error={errors.mobile ? true : false}
                />
                {/* <Typography variant="inherit" color="error">
                  {errors.mobile?.message}
                </Typography> */}
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  id="hephone"
                  name="hephone"
                  label="Home Phone / Emergency Phone"
                  fullWidth
                  margin="dense"

                />

              </Grid>

              <Typography variant="h5" align="left"  sx={{ m: '1rem',fontWeight: 'bold' }}>
                Login Information
              </Typography>


              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  fullWidth
                  margin="dense"
                  {...register('username')}
                  error={errors.username ? true : false}
                />
                <Typography variant="inherit" color="error">
                  {errors.username?.message}
                </Typography>
              </Grid>




              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  margin="dense"
                  {...register('password')}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="error">
                  {errors.password?.message}
                </Typography>
              </Grid>
          
            </Grid>

            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default App;
