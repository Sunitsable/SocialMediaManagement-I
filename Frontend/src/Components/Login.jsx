import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const paperStyle = {
        padding: 20,
        width: 350,
        margin: '20px auto',
        borderRadius: 15
    };

    const avatarStyle = {
        backgroundColor: '#1bbd7e',
        marginBottom: 10
    };

    const btnStyle = {
        margin: '20px 0'
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                if (response.status === 400) {
                    document.getElementById("registernowtext").style.display="block";
                    throw new Error("Register Now!");

                } else {
                    throw new Error('Failed to log in');
                }
            }

            // Redirect user or perform any other action upon successful login
            console.log('Login successful');
            navigate("/homepage")
            // history.push("/homepage")
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleLogin}>
                    <TextField
                        label='Username'
                        placeholder='Enter username'
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label='Password'
                        placeholder='Enter password'
                        type='password'
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type='submit'
                        color='primary'
                        variant="contained"
                        style={btnStyle}
                        fullWidth
                    >
                        Sign in
                    </Button>
                </form>
                <Typography align="center">
                    <Link href="#" >
                        Forgot password?
                    </Link>
                </Typography>
                <Typography align="center">
                    Do not have an account?&nbsp;
                    <Link href="/signup" >
                        Sign Up
                    </Link>
                </Typography>
                <Typography id="registernowtext" align="center" style={{ display: 'none', color:"red" }}>
                    Account Doesn't Exists :( 
                        <br></br>
                    Sign Up Now!
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;
