import React, {useState, useEffect} from 'react'
import { TableContainer, Paper, Table, TableRow, styled, TableHead, tableCellClasses, TableCell, TableBody } from '@mui/material';
import fs from './../../Firebase';
import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore';
import 'firebase/firestore';
import './../styles/pago.css';
import {ButtonGroup, Button} from '@material-ui/core';
import {PictureAsPdfOutlined} from '@mui/icons-material';
import {PDFDownloadLink} from '@react-pdf/renderer';
import PdfPago from './pago/pdfpago';

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

const ReportePago = () => {

    const [ListaPago,setListaPago] = useState([]);

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

    return (
        <div className='tabla-pago'>
            <br/>
            <h2 style={{textAlign: 'center', fontFamily: 'Garamond', fontSize: 40}}>REPORTE DE PAGO</h2>
            <br/>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 400}} aria-label="Pago">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">Fecha</StyledTableCell>
                            <StyledTableCell align="center">Número de contrato</StyledTableCell>
                            <StyledTableCell align='center'>Nombres</StyledTableCell>
                            <StyledTableCell align='center'>Apellidos</StyledTableCell>
                            <StyledTableCell align="center">Observación</StyledTableCell>
                            <StyledTableCell align="center">Mora</StyledTableCell>
                            <StyledTableCell align="center">Subtotal</StyledTableCell>
                            <StyledTableCell align="center">Total</StyledTableCell>
                            <StyledTableCell align='center'>Recibo</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { ListaPago ? <>
                            {ListaPago.map((item) =>
                                <StyledTableRow key={item.Cedula}>
                                    <StyledTableCell align='justify'>{item.id}</StyledTableCell>
                                    <StyledTableCell align="center">{item.Fecha}</StyledTableCell>
                                    <StyledTableCell align="center">{item.Numero}</StyledTableCell>
                                    <StyledTableCell align="center">{item.Nombres}</StyledTableCell>
                                    <StyledTableCell align="center">{item.Apellidos}</StyledTableCell>
                                    <StyledTableCell align='center'>{item.Observacion}</StyledTableCell>
                                    <StyledTableCell align='center'>{item.Mora}</StyledTableCell>
                                    <StyledTableCell align='center'>{item.SubTotal}</StyledTableCell>
                                    <StyledTableCell align='center'>{item.Total}</StyledTableCell>
                                    <Button color='primary' align='center' variant='outlined'>
                                        <PDFDownloadLink document={<PdfPago item={item}/>} fileName={`Recibo_${item.id}.pdf`}>
                                            <PictureAsPdfOutlined/> 
                                        </PDFDownloadLink>   
                                    </Button>
                                </StyledTableRow>
                            )}
                        </>: 'no hay datos'}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ReportePago;