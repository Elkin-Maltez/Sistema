import React from 'react';
import './../../styles/empleado.css';

const Busqueda_Empleado = (props) => {

    const {Dato, setDato} = props;

    return (
        <div className='container-4-empleado'>
            <input type='search' value={Dato} onChange={(e) =>setDato(e.target.value)} id='search-empleado' placeholder='Busqueda'/>
            <button className='icon-empleado'><i className='fa fa-search'/></button>
        </div>
    )
}

export default Busqueda_Empleado;