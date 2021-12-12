import React, {useState, useEffect} from 'react';
import './../styles/empleado.css';
import fs from './../../Firebase';
import {collection, addDoc, deleteDoc, doc, getDocs, updateDoc} from 'firebase/firestore';
import 'firebase/firestore';
import Busqueda_Empleado from './contrato/busqueda';
import TEmpleado from './empleado/templeado';

const Empleado = (props) => {

    const [ListaEmpleado,setListaEmpleado] = useState([]);
    const [Dato, setDato] = useState("");
    const [Id, setId] = useState("");
    const [Cedula, setCedula] = useState("");
    const [Nombres, setNombres] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Telefono, setTelefono] = useState("");
    const [Localidad, setLocalidad] = useState("");

    useEffect(() => {
        listardatos()
    }, [])

    const listardatos = async()=>{
        let obj;
        let lista = []
        const querySnapshot = await getDocs(collection (fs, "Empleado"));
        querySnapshot.forEach((doc) =>{
            obj = doc.data()
            obj.id = doc.id
            lista.push(obj)
        });
        setListaEmpleado(lista)
    }

    const addEmpleado = async () =>{
        try{
            await addDoc(collection(fs, "Empleado"),{
                Cedula,
                Nombres,
                Apellidos,
                Direccion,
                Telefono,
                Localidad
            }).then(()=>{listardatos(); clearInput(); });
            console.log("Document written with ID: ");
        } catch(e){
            console.error("Error adding document: ", e)
        }
    }

    const updateEmpleado = async () =>{
        try {
            await updateDoc(doc(fs, "Empleado", Id), {
                Cedula,
                Nombres,
                Apellidos,
                Direccion,
                Telefono,
                Localidad
            }).then(()=>{listardatos(); clearInput(); });
        } catch (e) {
            console.error("Error updating document: ", e)
        }
    }

    const deleteEmpleado = async (id) =>{
        await deleteDoc(doc(fs, "Empleado", id)).then(()=>{
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
        setLocalidad("")
    }

    const handleUpdateEmpleado = (item) =>{
        const{
            id, Cedula, Nombres, Apellidos, Direccion, 
            Telefono, Localidad
        } = item;

        setId(id);
        setCedula(Cedula);
        setNombres(Nombres);
        setApellidos(Apellidos);
        setDireccion(Direccion);
        setTelefono(Telefono);
        setLocalidad(Localidad);
    }

    const handleFiltro = () => {
        return (x) =>{
            return (x.id.toLowerCase().includes(Dato.toLocaleLowerCase())) ||
            (x.Cedula.toLocaleLowerCase().includes(Dato.toLocaleLowerCase())) || false;
        }
    }

    const handleAgregarEmpleado = () =>{
        if(!Id) addEmpleado(); else updateEmpleado();
    }
    
    const Validar = e =>{
        e.preventDefault ();
    }

    return (
        <>
            <div className="entorno-empleado">
                <form action="" className="formulario-empleado" id="formulario-empleado" onSubmit = {Validar}>
                    
                    <div className="formulario__grupo-empleado" id="grupo__usuario-empleado">
                        <label className="formulario__label-empleado">CÉDULA</label>
                        <div className="formulario__grupo-input-empleado">
                            <input type="text" className="formulario__input-empleado" name="cedula" id="cedula" placeholder="XXX-XXXXXXX-XXXXX" required
                            value ={
                                Cedula
                            }
                            onChange = {
                                (e) => setCedula(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-empleado" id="grupo__nombre-empleado">
                        <label className="formulario__label-empleado">NOMBRES</label>
                        <div className="formulario__grupo-input-empleado">
                            <input type="text" className="formulario__input-empleado" name="nombre" id="nombre" placeholder="Digite el nombre" required
                            value = {
                                Nombres
                            }
                            onChange= {
                                (e) => setNombres(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-empleado" id="grupo__apellido-empleado">
                        <label className="formulario__label-empleado">APELLIDOS</label>
                        <div className="formulario__grupo-input-empleado">
                            <input type="text" className="formulario__input-empleado" name="apellido" id="apellido" placeholder="Digite el apellido" required
                            value = {
                                Apellidos
                            } 
                            onChange={
                                (e) => setApellidos(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-empleado" id="grupo__direccion-empleado">
                        <label className="formulario__label-empleado">DIRECCIÓN</label>
                        <div className="formulario__grupo-input-empleado">
                            <input type="text" className="formulario__input-empleado" name="direccion" id="direccion" placeholder="Digite la dirección" required
                            value = {
                                Direccion
                            }
                            onChange = {
                                (e) => setDireccion(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-empleado" id="grupo__telefono-empleado">
                        <label className="formulario__label-empleado">TELÉFONO</label>
                        <div className="formulario__grupo-input-empleado">
                            <input type="text" className="formulario__input-empleado" name="telefono" id="telefono" placeholder="XXXXXXXX" required
                            value = {
                                Telefono
                            }
                            onChange = {
                                (e) => setTelefono(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-empleado" id="grupo__localidad-empleado">
                        <label className="formulario__label-empleado">LOCALIDAD</label>
                        <div className="formulario__grupo-input-empleado">
                            <input type="text" className="formulario__input-empleado" name="localidad" id="localidad" placeholder="Digite la localidad" required
                            value = {
                                Localidad
                            }
                            onChange = {
                                (e) => setLocalidad(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-empleado formulario__grupo-btn-enviar-empleado">
                        <button type="submit" className="formulario__btn-empleado" onClick={handleAgregarEmpleado}>GUARDAR</button>
                    </div>
                </form>
            </div>
            <div className='busqueda-empleado'>
            <br/>
            <Busqueda_Empleado
            Dato={Dato} setDato={setDato}
            />
            </div>
            <div className='tabla-empleado'>
            <br/>
            <TEmpleado
            handleFiltro={handleFiltro}
            listaEmpleado={ListaEmpleado}
            deleteEmpleado={deleteEmpleado}
            handleUpdateEmpleado={handleUpdateEmpleado}
            />
            </div>
        </>
    )
}

export default Empleado;