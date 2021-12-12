import React from 'react'
import { TableContainer, Paper, Table, TableRow, styled, TableHead, tableCellClasses, TableCell, TableBody} from '@mui/material';
import {ButtonGroup, Button, Box, makeStyles} from '@material-ui/core';
import {CreateOutlined, DeleteOutlined, PictureAsPdfOutlined} from '@mui/icons-material';
import {PDFDownloadLink} from '@react-pdf/renderer';
import PdfPago from './pdfpago';

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

const TPago = (props) => {
    const {listaPago, handleUpdatePago, deletePago, handleFiltro} = props;

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 400}} aria-label="Pago">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell align="center">Nombres</StyledTableCell>
                            <StyledTableCell align="center">Apellidos</StyledTableCell>
                            <StyledTableCell align="center">Observacion</StyledTableCell>
                            <StyledTableCell align="center">Mora</StyledTableCell>
                            <StyledTableCell align="center">Subtotal</StyledTableCell>
                            <StyledTableCell align="center">Total</StyledTableCell>
                            <StyledTableCell align='center'>Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { listaPago ? <>
                            {listaPago.filter(handleFiltro()).map((item) =>
                                <StyledTableRow key={item.Cedula}>
                                    <StyledTableCell align='justify'>{item.id}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Nombres}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Apellidos}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Observacion}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Mora}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.SubTotal}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Total}</StyledTableCell>
                                    <ButtonGroup>
                                        <Button onClick={() =>{deletePago(item.id)}} color='secondary' variant='outlined'><DeleteOutlined/></Button>
                                    </ButtonGroup>
                                </StyledTableRow>
                            )}
                        </>: 'no hay datos'}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TPago;