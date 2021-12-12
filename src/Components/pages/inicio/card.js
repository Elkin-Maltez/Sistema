import React from 'react'
import CardItems from './carditems';
import './../../styles/inicio.css'

const Card = () => {
    return (
        <div className='cards'>
            <h1>Programación en CANAL 71</h1><br/>
            <div className='cards__container'> 
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItems 
                        src='https://scontent.fmga3-1.fna.fbcdn.net/v/t31.18172-8/26850290_1028019497338143_1727097771065277216_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=3TV_bDTivGYAX8QLqsA&tn=9QY8W8ohH94E5eNn&_nc_ht=scontent.fmga3-1.fna&oh=0f0a012d6402c8e375733bff5f9098f5&oe=61CD9D44'
                        text='Fiesta patronales de la ciudad de Acoyapa'
                        label='Alegría'
                        path='/'
                        />
                        <CardItems
                        src='https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-9/40877338_1194427544030670_6784298283125702656_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=HF-no-4xpnAAX8pZJQU&tn=K5_Yfr50MgD0dwXi&_nc_ht=scontent.fmga3-1.fna&oh=d1f047240c346cc65906d1dcbc6b3be3&oe=61AB8FEF'
                        text='Fiesta patrias de la ciudad de Acoyapa'
                        label='Simbolos Patrios'
                        path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;