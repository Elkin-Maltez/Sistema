import Reac, {useEffect, useState} from 'react';
import './../styles/averia.css';
import fs from './../../Firebase';
import {collection, addDoc, getDocs} from 'firebase/firestore';
import 'firebase/firestore';

const Averia = () => {
    const [ListaAveria,setListaAveria] = useState([]);
    const [Id, setId] = useState("");
    const [Numero, setNumero] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Problema, setProblema] = useState("");

    useEffect(() => {
        listardatos()
    }, [])

    const listardatos = async()=>{
        let obj;
        let lista = []
        const querySnapshot = await getDocs(collection (fs, "Averia"));
        querySnapshot.forEach((doc) =>{
            obj = doc.data()
            obj.id = doc.id
            lista.push(obj)
        });
        setListaAveria(lista)
    }

    const addAveria = async () =>{
        try{
            await addDoc(collection(fs, "Averia"),{
                Numero,
                Direccion,
                Problema
            }).then(()=>{listardatos(); clearInput(); });
            console.log("Document written with ID: ");
        } catch(e){
            console.error("Error adding document: ", e)
        }
    }

    const clearInput=()=>{
        setId("")
        setNumero("")
        setDireccion("")
        setProblema("")
    }

    const handleAgregarAveria = () =>{
        if(!Id) addAveria();
    }
    
    const Validar = e =>{
        e.preventDefault ();
    }

    return (
        <>
        <br/>
            <div className="entorno-averia">
                <form action="" className="formulario-averia" id="formulario-averia" onSubmit = {Validar}>
                    
                    <div className="formulario__grupo-averia" id="grupo__usuario-averia">
                        <label className="formulario__label-averia">NUMERO DE CONTRATO</label>
                        <div className="formulario__grupo-input-averia">
                            <input type="text" className="formulario__input-averia" name="numero" id="numero" placeholder="XXX-XXXXXXX-XXXXX" required 
                            value ={
                                Numero
                            }
                            onChange = {
                                (e) => setNumero(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-averia" id="grupo__direccion-averia">
                        <label className="formulario__label-averia">DIRECCIÓN</label>
                        <div className="formulario__grupo-input-averia">
                            <input type="text" className="formulario__input-averia" name="direccion" id="direccion" placeholder="Digite la dirección" required
                            value = {
                                Direccion
                            }
                            onChange= {
                                (e) => setDireccion(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-averia" id="grupo__descripcion-averia">
                        <label className="formulario__label-averia">DESCRIPCIÓN DEL PROBLEMA</label>
                        <div className="formulario__grupo-input-averia">
                            <input type="text" className="formulario__input-averia" name="problema" id="problema" placeholder="Describa el problema" required
                            value = {
                                Problema
                            } 
                            onChange={
                                (e) => setProblema(e.target.value)
                            }
                            />
                        </div>
                    </div>

                    <div className="formulario__grupo-averia formulario__grupo-btn-enviar-averia">
                        <button type="submit" className="formulario__btn-averia" onClick={handleAgregarAveria}>GUARDAR</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Averia;