import React, {useState, useEffect} from 'react'
import { TableContainer, Paper, Table, TableRow, styled, TableHead, tableCellClasses, TableCell, TableBody} from '@mui/material';
import { Button} from '@material-ui/core';
import {DeleteOutlined} from '@mui/icons-material';
import fs from './../../../Firebase';
import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore';
import 'firebase/firestore';
import './../../styles/averia.css';

const StyledTableCell = styled (TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]:{
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]:{
        fontSize: 14,
    }
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const TAveria = () => {

    const [ListaAveria,setListaAveria] = useState([]);

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

    const deleteAveria = async (id) =>{
        await deleteDoc(doc(fs, "Averia", id)).then(()=>{
            listardatos();
        })
    }

    return (
        <div className='tabla-averia'>
            <br/>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 400}} aria-label="Averia">
                    <TableHead>
                        <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">Número de contrato</StyledTableCell>
                            <StyledTableCell align="center">Dirección</StyledTableCell>
                            <StyledTableCell align="center">Problema</StyledTableCell>
                            <StyledTableCell align='center'>Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { ListaAveria ? <>
                            {ListaAveria.map((item) =>
                                <StyledTableRow key={item.Numero}>
                                    <StyledTableCell align='center'>{item.id}</StyledTableCell>
                                    <StyledTableCell align="center">{item.Numero}</StyledTableCell>
                                    <StyledTableCell align='center'>{item.Direccion}</StyledTableCell>
                                    <StyledTableCell align='center'>{item.Problema}</StyledTableCell>
                                    <Button color='secondary' variant='outlined' ><DeleteOutlined/></Button>
                                </StyledTableRow>
                            )}
                        </>: 'no hay datos'}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TAveria;