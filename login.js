import React, { useState } from 'react';
import Footer from '../../components/footer';
import g_long from '../../assets/logo/g_long.png';
import logincss from './login.css'; 

function Login(){

    return (
        <div className ={logincss}>
            <h1 className ={logincss.container}><img src={g_long} name='logo' /></h1>
            아이디<br></br>
            <span className={logincss.box} name='id'><input></input></span>
            <br></br>
            패스워드<br></br>
            <span className={logincss.box} name='pw'><input></input></span>
            <Footer />
        </div>
    )
}

export default Login;