import React from 'react';
import './../styles/nosotros.css';
import icono1 from './../images/image-1.png';
import icono2 from './../images/image-2.jpg';
import icono3 from './../images/image-3.png';
import Footer from './inicio/footer';

const Nosotros = () => {
    return (
        <>
            <h1 className='Nosotros'>Nosotros</h1>
            <div className='Principal'>
                <div className='Secundario'>
                    <img className='imagen1'  src= {icono1} alt="" /><br/>
                    <div>
                        <p className='Texto'>
                            Entregar a nuestro clientes soluciones integrales, confiables e innovadores en telecomunicaciones,
                            tecnología y entretenimiento, comprometidos con brindarles un servicio superior en cada experiencia.
                        </p>
                    </div>
                </div>
                <div className='Secundario'>
                    <img className='imagen2' src= {icono2} alt="" /><br/>
                    <div>
                        <p className= 'Texto'>
                            Ser la compañia lider de servicios de televisión por cable,
                            preferida por su confiabilidad e innovación.
                        </p>
                    </div>
                </div>
                <div className='Secundario'>
                    <img className='imagen3' src= {icono3} alt="" />
                    <div>
                        <h4 className= 'Puntos'>1. Integridad</h4>
                        <h4 className= 'Puntos'>2. Compromiso</h4>
                        <h4 className= 'Puntos'>3. Respeto</h4>
                        <h4 className= 'Puntos'>4. Excelencia</h4>
                        <h4 className= 'Puntos'>5. Trabajo en equipo</h4>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Nosotros;