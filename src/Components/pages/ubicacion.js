import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './../styles/ubicacion.css';
import Footer from './inicio/footer';

import iconretinaurl from 'leaflet/dist/images/marker-icon-2x.png';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Ubicacion = () => {

    let DefaultIcon = L.icon({
        iconRetinaUrl: iconretinaurl,
        iconUrl: icon,
        shadowUrl: iconShadow
    })

    L.Marker.prototype.options.icon = DefaultIcon;

    const position = [11.972535,-85.1729578]

    return (
        <div className='Ubicacion'>
            <h2>UBICANOS</h2><br/>
            <MapContainer center={position} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} >
                    <Popup>
                        TV Cable Acoyapa Apolo 11
                    </Popup>
                </Marker>
            </MapContainer><br/>
            <Footer/>
        </div>
        
    )
}

export default Ubicacion;