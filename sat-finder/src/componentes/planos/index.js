import * as React from 'react';
import './planos.css'
import logo from '../../assets/img/viasat.svg'

import SettingsInputAntennaOutlinedIcon from '@mui/icons-material/SettingsInputAntennaOutlined';

export default function Plano() {
    return (
        <div className='container-plano' >

            <div className='InfoMarca' >
               <img src={logo} ></img>
                <h5>NomeDaMarca</h5>
            </div>

            <div className='InfoPlano' >
                <h5>Velocidade</h5>
                <h5>Preço</h5>
                <SettingsInputAntennaOutlinedIcon/>
            </div>
        </div>
    );
}
