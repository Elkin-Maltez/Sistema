import React from 'react';
import './../../styles/contrato.css';

const Busqueda_Contrato = (props) => {

    const {Dato, setDato} = props;

    return (
        <div className='container-4'>
            <input type='search' value={Dato} onChange={(e) =>setDato(e.target.value)} id='search' placeholder='Busqueda'/>
            <button className='icon'><i className='fa fa-search'/></button>
        </div>
    )
}

export default Busqueda_Contrato;