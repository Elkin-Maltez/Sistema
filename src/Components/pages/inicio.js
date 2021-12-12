import React from 'react';
import './../styles/inicio.css';
import Card from './inicio/card';
import Footer from './inicio/footer';

const inicio = () => {
    return (
        <>
            <div className='hero-container'>
                <p className='fondo'> EMPRESA DE TELEVISIÓN POR CABLE <br/> TV Cable Acoyapa Apolo 11</p>
            </div>
            <Card/>
            <Footer/>
        </>
    );
        
}

export default inicio;