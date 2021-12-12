import React, {useEffect, useState} from 'react';
import './../styles/contrato.css';
import fs from './../../Firebase';
import {collection, addDoc, deleteDoc, doc, getDocs, updateDoc} from 'firebase/firestore';
import 'firebase/firestore';
import Busqueda_Contrato from './contrato/busqueda';
import TContrato from './contrato/tcontrato';
import {useForm} from 'react-hook-form';

const Contrato = (props) => {

    const [ListaContrato,setListaContrato] = useState([]);
    const [Dato, setDato] = useState("");
    const [Id, setId] = useState("");
    const [Cedula, setCedula] = useState("");
    const [Nombres, setNombres] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Telefono, setTelefono] = useState("");
    const [Descripcion, setDescripcion] = useState("");
    const [Costo, setCosto] = useState("");

    useEffect(() => {
        listardatos()
    }, [])

    const listardatos = async()=>{
        let obj;
        let lista = []
        const querySnapshot = await getDocs(collection (fs, "Contrato"));
        querySnapshot.forEach((doc) =>{
            obj = doc.data()
            obj.id = doc.id
            lista.push(obj)
        });
        setListaContrato(lista)
    }

    const addContrato = async () =>{
        try{
            await addDoc(collection(fs, "Contrato"),{
                Cedula,
                Nombres,
                Apellidos,
                Direccion,
                Telefono,
                Descripcion,
                Costo
            }).then(()=>{listardatos(); clearInput(); });
            console.log("Document written with ID: ");
        } catch(e){
            console.error("Error adding document: ", e)
        }
    }

    const updateContrato = async () =>{
        try {
            await updateDoc(doc(fs, "Contrato", Id), {
                Cedula,
                Nombres,
                Apellidos,
                Direccion,
                Telefono,
                Descripcion,
                Costo
            }).then(()=>{listardatos(); clearInput(); });
        } catch (e) {
            console.error("Error updating document: ", e)
        }
    }

    const deleteContrato = async (id) =>{
        await deleteDoc(doc(fs, "Contrato", id)).then(()=>{
            listardatos();
        })
    }

    const clearInput=()=>{
        setId("")
        setCedula("")
        setNombres("")
        setApellidos("")
        setDireccion("")
        setTelefono("")
        setDescripcion("")
        setCosto("")
    }

    const handleUpdateContratos = (item) =>{
        const{
            id, Cedula, Nombres, Apellidos, Direccion, 
            Telefono, Descripcion, Costo
        } = item;

        setId(id);
        setCedula(Cedula);
        setNombres(Nombres);
        setApellidos(Apellidos);
        setDireccion(Direccion);
        setTelefono(Telefono);
        setDescripcion(Descripcion);
        setCosto(Costo);
    }

    const handleFiltro = () => {
        return (x) =>{
            return (x.id.toLowerCase().includes(Dato.toLocaleLowerCase())) ||
            (x.Cedula.toLowerCase().includes(Dato.toLocaleLowerCase())) ||
            (x.Nombres.toLocaleLowerCase().includes(Dato.toLocaleLowerCase())) || false;
        }
    }

    const handleAgregar = () =>{
        if(!Id) addContrato(); else updateContrato();
    }
    
    const Validar = e =>{
        e.preventDefault ();
    }

    const {register, handleSubmit, errors} = useForm();

    const onsubmit = (data) =>{
        console.log("data", data)
    }

    return (
        <>
            <div className="entorno" >
                <form onSubmit={handleSubmit(onsubmit)} action="" className="formulario" id="formulario" onSubmit={Validar}>
                    
                    <div className="formulario__grupo" id="grupo__usuario">
                        <label className="formulario__label">CÉDULA</label>
                        <div className="formulario__grupo-input">
                            <input type="text" className="formulario__input" name='cedula' placeholder="XXX-XXXXXX-XXXX" required
                            
                            value ={
                                Cedula
                            }
                            onChange = {
                                (e) => setCedula(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo" id="grupo__nombre">
                        <label className="formulario__label">NOMBRES</label>
                        <div className="formulario__grupo-input">
                            <input type='text' className="formulario__input" name='nombre' placeholder="Digite el nombre" required
                            value = {
                                Nombres
                            }
                            onChange= {
                                (e) => setNombres(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo" id="grupo__apellido">
                        <label className="formulario__label">APELLIDO</label>
                        <div className="formulario__grupo-input">
                            <input type='text' className="formulario__input" name='apellido' placeholder="Digite el apellido" required
                            value = {
                                Apellidos
                            } 
                            onChange={
                                (e) => setApellidos(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo" id="grupo__direccion">
                        <label className="formulario__label">DIRECCIÓN</label>
                        <div className="formulario__grupo-input">
                            <input type='text' className="formulario__input" name='direccion' placeholder="Digite la dirección" required                         
                            value = {
                                Direccion
                            }
                            onChange = {
                                (e) => setDireccion(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo" id="grupo__telefono">
                        <label className="formulario__label">TELÉFONO</label>
                        <div className="formulario__grupo-input">
                            <input type="text" className="formulario__input" name="telefono" placeholder="XXXXXXXX" required
                            value = {
                                Telefono
                            }
                            onChange = {
                                (e) => setTelefono(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo" id="grupo__descripcion">
                        <label className="formulario__label">DESCRIPCIÓN DEL SERVICIO</label>
                        <div className="formulario__grupo-input">
                            <input type="text" className="formulario__input" name="descripcion" placeholder="Digite la descripción del servicio" required
                            value = {
                                Descripcion
                            }
                            onChange = {
                                (e) => setDescripcion(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo" id="grupo__costo">
                        <label className="formulario__label">COSTO DEL SERVICIO</label>
                        <div className="formulario__grupo-input">
                            <input type="number" className="formulario__input" name="costo" placeholder="C$" required
                            value ={
                                Costo
                            }
                            onChange={
                                (e) => setCosto(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo formulario__grupo-btn-enviar">
                        <button type="submit" className="formulario__btn" onClick={handleAgregar}>GUARDAR</button>
                    </div>
                </form>
            </div>
            <div className='busqueda'>
            <br/>
            <Busqueda_Contrato
            Dato={Dato} setDato={setDato}
            />
            </div>
            <div className='tabla'>
            <br/>
            <TContrato
            handleFiltro={handleFiltro}
            listaContrato={ListaContrato}
            deleteContrato={deleteContrato}
            handleUpdateContratos={handleUpdateContratos}
            />
            </div>
        </>
        
    )
}

export default Contrato;