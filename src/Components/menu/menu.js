import React, {useState, useEffect, useContext} from 'react';
import {Link, Navigate} from 'react-router-dom';
import './../styles/menu.css';
import Dropdown from './submenu/dropdown';
import Logo from './../images/Apolo11.png';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import {AuthContext} from './../../Auth/Contexts/auth.context';

const Navbar = () => {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () =>{
        if (window.innerWidth < 960) {
            setDropdown (false);
        } else {
            setDropdown(true);
        }
    }
    const onMouseLeave = () =>{
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    const auth = getAuth();
    const [UserData, setUserData] = useState();
    const [User, setUser] = useState(false);

    const {user} = useContext(AuthContext);
    if (user) return(
        <Navigate to='/'/>
    );
    console.log(User)
    useEffect(() => {
        onAuthStateChanged(auth, (User)=>{
            if(User){
                console.log("Iniciado")
                const email = User.email;
                setUserData(email);
                const uid = User.uid;
                console.log(uid)
                setUser(true)
               
            }else{
                console.log ("No iniciado sesion")
            }
        })
    }, [])

    const CerrarSesion=()=> {

        signOut(auth).then(() => {
        setUser(false)
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    
    }
    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={Logo}/>
                </Link>  
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            INICIO
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Ubicacion' className='nav-links' onClick={closeMobileMenu}>
                            UBICACIÓN
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Nosotros' className='nav-links' onClick={closeMobileMenu}>
                            NOSOTROS
                        </Link>
                    </li>
                    { 
                        User ? <> 
                        {
                            UserData==="tvcableapolo11@gmail.com" ?  <> 
                            
                            <li className='nav-item'>
                                <Link to='/Contrato' className='nav-links' onClick={closeMobileMenu}>
                                    CONTRATO
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Empleado' className='nav-links' onClick={closeMobileMenu}>
                                    EMPLEADO
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Pago' className='nav-links' onClick={closeMobileMenu}>
                                    PAGO
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/LAverias' className='nav-links' onClick={closeMobileMenu}>
                                    AVERÍAS
                                </Link>
                            </li>
                            <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    REPORTE <i className='fas fa-chevron-down'/>
                                </Link>
                                {dropdown && <Dropdown/>}
                            </li>
                            </>: UserData !== "tvcableapolo11@gmail.com" ? <>

                            <li className='nav-item'>
                                <Link to='/LPago' className='nav-links' onClick={closeMobileMenu}>
                                    ESTADO
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Averia' className='nav-links' onClick={closeMobileMenu}>
                                    REPORTE
                                </Link>
                            </li>
                            </>:null
                        }
                        </>:null
                    }
                    { User ?
                        <Link to='/'>
                            <button onClick={CerrarSesion} className='btn'><i className= 'fa fa-sign-out-alt fa-2x'/></button>
                        </Link>
                        :
                        <Link to='/Login'>
                            <button className='btn'><i className= 'fa fa-sign-in-alt fa-2x'/></button>
                        </Link>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;