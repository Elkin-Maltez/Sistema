import React from 'react'
import { TableContainer, Paper, Table, TableRow, styled, TableHead, tableCellClasses, TableCell, TableBody } from '@mui/material';
import {ButtonGroup, Button} from '@material-ui/core';
import {CreateOutlined, DeleteOutlined} from '@mui/icons-material';

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

const TEmpleado = (props) => {
    const {listaEmpleado, handleUpdateEmpleado, deleteEmpleado, handleFiltro} = props;

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 200}} aria-label="Empleado">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Número</StyledTableCell>
                            <StyledTableCell align="center">Cédula</StyledTableCell>
                            <StyledTableCell align="center">Nombres</StyledTableCell>
                            <StyledTableCell align="center">Apellidos</StyledTableCell>
                            <StyledTableCell align="center">Dirección</StyledTableCell>
                            <StyledTableCell align="center">Telefono</StyledTableCell>
                            <StyledTableCell align="center">Localidad</StyledTableCell>
                            <StyledTableCell align='center'>Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { listaEmpleado ? <>
                            {listaEmpleado.filter(handleFiltro()).map((item) =>
                                <StyledTableRow key={item.Cedula}>
                                    <StyledTableCell align='justify'>{item.id}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Cedula}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Nombres}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Apellidos}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Direccion}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Telefono}</StyledTableCell>
                                    <StyledTableCell align='justify'>{item.Localidad}</StyledTableCell>
                                    <ButtonGroup>
                                        <Button onClick={() =>{handleUpdateEmpleado(item)}} color='primary' align='center'><CreateOutlined/></Button>
                                        <Button onClick={() =>{deleteEmpleado(item.id)}} color='secondary' align='center'><DeleteOutlined/></Button>
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

export default TEmpleado;