import React, {useState, useEffect} from 'react';
import './../styles/pago.css';
import fs from './../../Firebase';
import {collection, addDoc, deleteDoc, doc, getDocs, updateDoc} from 'firebase/firestore';
import 'firebase/firestore';
import Busqueda_Pago from './pago/busqueda';
import TPago from './pago/tpago';

const Pago = () => {

    const [ListaPago,setListaPago] = useState([]);
    const [Dato, setDato] = useState("");
    const [Id, setId] = useState("");
    const [Numero, setNumero] = useState("");
    const [Nombres, setNombres] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Fecha, setFecha] = useState("");
    const [Observacion, setObservacion] = useState("");
    const [Mora, setMora] = useState("");
    const [SubTotal, setSubTotal] = useState("");
    const [Total, setTotal] = useState("");

    useEffect(() => {
        listardatos()
    }, [])

    const listardatos = async()=>{
        let obj;
        let lista = []
        const querySnapshot = await getDocs(collection (fs, "Pago"));
        querySnapshot.forEach((doc) =>{
            obj = doc.data()
            obj.id = doc.id
            lista.push(obj)
        });
        setListaPago(lista)
    }

    const addPago = async () =>{
        try{
            await addDoc(collection(fs, "Pago"),{
                Numero,
                Nombres,
                Apellidos,
                Fecha,
                Observacion,
                Mora,
                SubTotal,
                Total
            }).then(()=>{listardatos(); clearInput(); });
            console.log("Document written with ID: ");
        } catch(e){
            console.error("Error adding document: ", e)
        }
    }

    const updatePago = async () =>{
        try {
            await updateDoc(doc(fs, "Pago", Id), {
                Numero,
                Nombres,
                Apellidos,
                Fecha,
                Observacion,
                Mora,
                SubTotal,
                Total
            }).then(()=>{listardatos(); clearInput(); });
        } catch (e) {
            console.error("Error updating document: ", e)
        }
    }

    const deletePago = async (id) =>{
        await deleteDoc(doc(fs, "Pago", id)).then(()=>{
            listardatos();
        })
    }

    const clearInput=()=>{
        setId("")
        setNumero("")
        setNombres("")
        setApellidos("")
        setFecha("")
        setObservacion("")
        setMora("")
        setSubTotal("")
        setTotal("")
    }

    const handleUpdatePago = (item) =>{
        const{
            id, Numero, Nombres, Apellidos, Fecha,
            Mora, Observacion, SubTotal, Total
        } = item;

        setId(id);
        setNumero(Numero);
        setNombres(Nombres);
        setApellidos(Apellidos);
        setFecha(Fecha);
        setObservacion(Observacion);
        setMora(Mora);
        setSubTotal(SubTotal);
        setTotal(Total);
    }

    const handleFiltro = () => {
        return (x) =>{
            return (x.id.toLowerCase().includes(Dato.toLocaleLowerCase())) ||
            (x.Numero.toLocaleLowerCase().includes(Dato.toLocaleLowerCase())) || false;
        }
    }

    const handleAgregarPago = () =>{
        if(!Id) addPago(); else updatePago();
    }
    
    const Validar = e =>{
        e.preventDefault ();
    }

    return (
        <>
            <div className="entorno-pago">
                <form action="" className="formulario-pago" id="formulario-pago" onSubmit = {Validar}>
                    
                    <div className="formulario__grupo-pago" id="grupo__usuario-pago">
                        <label className="formulario__label-pago">NÚMERO DE CONTRATO</label>
                        <div className="formulario__grupo-input-pago">
                            <input type="text" className="formulario__input-pago" name="numero" id="numero" placeholder="XXXXXXXXXXXXXXX" required
                            value ={
                                Numero
                            }
                            onChange = {
                                (e) => setNumero(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-pago" id="grupo__nombre-pago">
                        <label className="formulario__label-pago">NOMBRES</label>
                        <div className="formulario__grupo-input-pago">
                            <input type="text" className="formulario__input-pago" name="nombre" id="nombre" placeholder="Digite el nombre" required
                            value = {
                                Nombres
                            }
                            onChange= {
                                (e) => setNombres(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-pago" id="grupo__apellido-pago">
                        <label className="formulario__label-pago">APELLIDO</label>
                        <div className="formulario__grupo-input-pago">
                            <input type="text" className="formulario__input-pago" name="apellido" id="apellido" placeholder="Digite el apellido" required
                            value = {
                                Apellidos
                            } 
                            onChange={
                                (e) => setApellidos(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-pago" id="grupo__retraso-pago">
                        <label className="formulario__label-pago">FECHA</label>
                        <div className="formulario__grupo-input-pago">
                            <input type="date" className="formulario__input-pago" name="fecha" id="fecha" placeholder="Digite la fecha" required
                            value = {
                                Fecha
                            }
                            onChange = {
                                (e) => setFecha(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-pago" id="grupo__retraso-pago">
                        <label className="formulario__label-pago">OBSERVACIÓN</label>
                        <div className="formulario__grupo-input-pago">
                            <input type="text" className="formulario__input-pago" name="telefono" id="telefono" placeholder="Digite los meses de retraso" required
                            value = {
                                Observacion
                            }
                            onChange = {
                                (e) => setObservacion(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-pago" id="grupo__descripcion-pago">
                        <label className="formulario__label-pago">MORA</label>
                        <div className="formulario__grupo-input-pago">
                            <input type="number" className="formulario__input-pago" name="mora" id="mora" placeholder="C$"
                            value = {
                                Mora
                            }
                            onChange = {
                                (e) => setMora(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-pago" id="grupo__descripcion-pago">
                        <label className="formulario__label-pago">SUBTOTAL</label>
                        <div className="formulario__grupo-input-pago">
                            <input type="number" className="formulario__input-pago" name="subtotal" id="subtotal" placeholder="C$" required
                            value = {
                                SubTotal
                            }
                            onChange = {
                                (e) => setSubTotal(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-pago" id="grupo__descripcion-pago">
                        <label className="formulario__label-pago">TOTAL</label>
                        <div className="formulario__grupo-input-pago">
                            <input type="number" className="formulario__input-pago" name="total" id="total" placeholder="C$" required
                            value = {
                                Total
                            }
                            onChange = {
                                (e) => setTotal(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-pago formulario__grupo-btn-enviar-pago">
                        <button type="submit" className="formulario__btn-pago" onClick={handleAgregarPago}>GUARDAR</button>
                    </div>
                </form>
            </div>
            <div className='busqueda-pago'>
            <br/>
            <Busqueda_Pago
            Dato={Dato} setDato={setDato}
            />
            </div>
            <div className='tabla-pago'>
            <br/>
            <TPago
            handleFiltro={handleFiltro}
            listaPago={ListaPago}
            deletePago={deletePago}
            handleUpdatePago={handleUpdatePago}
            />
            </div>
        </>
    )
}

export default Pago;