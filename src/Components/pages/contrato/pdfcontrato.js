import React from 'react';
import {Document, Page, Text, View, StyleSheet, Image} from '@react-pdf/renderer';
import LogoP from './../../images/Apolo11.png';
const PdfContrato = (props) => {
    const {
        id, Cedula, Nombres, Apellidos, Direccion, Telefono, Descripcion, Costo
    }=props.item;
    let date = new Date().toLocaleDateString();

    const styles = StyleSheet.create({
        page: {
            backgroundColor: '#fff'
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 20,
            color: '#0000f7'
        },
        logo: {
            width: 70,
            height: 70
        },
        headerTitle: {
            width: '90%',
            textAlign: 'center',
        },
        headerText: {
            fontSize: 16,
            marginBottom: 10
        },
        body: {
            marginLeft: 20,
            marginRight: 20
        },
        Title: {
            backgroundColor: '#9abbe8',
            padding: 10,
            fontSize: 18,
            margin: 20,
        },
        subTitle: {
            backgroundColor: '#9abbe8',
            padding: 10,
            fontSize: 18,
            margin: 20,
        },
        number: {
            fontSize: 14,
            color: '#0000f7',
            textAlign: 'right',
            margin: 20
        },
        row: {
            display: 'flex',
            flexDirection: 'row',
            margin: 10
        },
        item: {
            fontSize: 16,
            width: '50%'
        },
        text: {
            fontSize: 16,
            color: 'black'
        },
        date: {
            fontStyle: 'italic',
            fontSize: 14,
            margin: 20,
            position: 'absolute',
            bottom: 0,
            right: 0,
            color: 'gray'
        }
    })


    return (
        <Document>
            <Page size='A4' style={styles.page}>
                <View style={styles.header}>
                    <Image style={styles.logo} src={{uri: LogoP}}/>
                    <View style={styles.headerTitle}>
                        <Text style={styles.headerText}>EMPRESA DE TELEVISIÓN POR CABLE</Text>
                        <Text style={styles.headerText}> TV Cable Acoyapa Apolo 11</Text>
                        <Text style={styles.headerText}>Acoyapa, Chontales</Text>
                    </View>
                </View>
                <Text style={styles.number}>{`Contrato No. ${id}`}</Text>
                <Text style={styles.Title}>Detalle del cliente</Text>
                <View style={styles.body}>
                    <View style={styles.row}>
                        <Text style={styles.item}>Cédula de identidad:</Text>
                        <Text style={styles.text}>{Cedula}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.item}>Nombres:</Text>
                        <Text style={styles.text}>{Nombres}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.item}>Apellidos:</Text>
                        <Text style={styles.text}>{Apellidos}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.item}>Dirección de domicilio:</Text>
                        <Text style={styles.text}>{Direccion}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.item}>Telefono:</Text>
                        <Text style={styles.text}>{Telefono}</Text>
                    </View>
                    <Text style={styles.subTitle}>Detalle del servicio</Text>
                    <View style={styles.row}>
                        <Text style={styles.item}>Servicio contratado:</Text>
                        <Text style={styles.text}>{Descripcion}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.item}>Costo del servicio:</Text>
                        <Text style={styles.text}>C$ {Costo}</Text>
                    </View>
                </View>
                <Text style={styles.date}>{date}</Text>
            </Page>
        </Document>
    )
}

export default PdfContrato;