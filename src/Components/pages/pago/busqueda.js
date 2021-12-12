import React from 'react';
import './../../styles/pago.css';

const Busqueda_Pago = (props) => {

    const {Dato, setDato} = props;

    return (
        <div className='container-4-pago'>
            <input type='search' value={Dato} onChange={(e) =>setDato(e.target.value)} id='search-pago' placeholder='Busqueda'/>
            <button className='icon-pago'><i className='fa fa-search'/></button>
        </div>
    )
}

export default Busqueda_Pago;