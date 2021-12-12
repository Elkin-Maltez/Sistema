import React, { useState, useContext } from 'react';
import {Grid, Container, makeStyles, Paper, Avatar, Typography, TextField, Button, CssBaseline} from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import {AuthContext} from './../../Auth/Contexts/auth.context';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {Route, Navigate} from 'react-router-dom';
const Login = () => {

    const {user} = useContext(AuthContext);
    
    const [email, setEmail] = useState('');
    const handleChangeEmail = (e) => setEmail(e.target.value);

    const [password, setPassword] = useState('');
    const handleChangePassword = (e) => setPassword(e.target.value);

    if(user) return (
        <Navigate replace to='/'/>
    )

    const handleClickLogin = () =>{
        console.log ("Iniciando....");
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            console.log("Ya inicie sesión", userCredential);
        })
        .catch((error) =>{
            console.log("Error al iniciar sesión", error)
        })
    }

    const useStyles = makeStyles(theme=>({
        principal: {
            backgroundColor: '#99d6ff',
            height: '100vh',
            alignItems: 'center'
        },
        
        container: {
            opacity: '5',
            height: '60%',
            marginTop: theme.spacing(10),
            [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
                marginTop: 0,
                width: '100%',
                height: '100%'
            },
            
        },
        div: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: 'red',
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(2)
        },
        button: {
            margin: theme.spacing(3, 0, 2),
            color:'black',
            fontFamily: "Garamond",
            fontWeight: "bold",
            fontSize: 20,
            background: "#3b9be6e0"
        }

    }))

    
    const classes = useStyles();

    return (
        <>
            <div className={classes.principal}>
                <Grid container component='main' className={classes.main}>
                    <CssBaseline/>
                    <Container component={Paper} elevation={10} maxWidth='xs' className={classes.container}>
                        <div className={classes.div}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component='h1' variant='h5'>INICIO SESIÓN</Typography>
                            <form className={classes.form}>
                                <TextField
                                    fullWidth required
                                    type='email'
                                    color='primary'
                                    margin='normal'
                                    variant='outlined'
                                    label='Digite correo electrónico'
                                    name='CORREO ELECTRÓNICO'
                                    onChange={handleChangeEmail}
                                />
                                <TextField
                                    fullWidth required
                                    type='password'
                                    color='primary'
                                    margin='normal'
                                    variant='outlined'
                                    label='Digite su contraseña'
                                    name='CONTRASEÑA'
                                    onChange={handleChangePassword}
                                />
                                <Button
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                    className={classes.button}
                                    onClick={handleClickLogin}
                                >
                                    ENTRAR
                                </Button>
                            </form>
                        </div>
                    </Container>
                </Grid>
            </div>
        </>
    );
}

export default Login;