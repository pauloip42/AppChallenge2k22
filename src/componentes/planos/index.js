import * as React from 'react';
import { Link } from 'react-router-dom';
import './planos.css'
import logo from '../../assets/img/viasat.svg';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

import SettingsInputAntennaOutlinedIcon from '@mui/icons-material/SettingsInputAntennaOutlined';

export default function Plano(props) {
    return (
        <div className='container-plano' >

            <div className='InfoMarca' >
               <img src={logo} ></img>
                <h5>{props.item.isp}</h5>
            </div>

            <div className='InfoPlano' key={props.item.id}>
                <h5>{props.item.download_speed} Mbps </h5>
                <SettingsInputAntennaOutlinedIcon className='tipo' />
                <h5>R$ {props.item.price_per_month}/mês </h5>

                <Link to={`/descricao/${props.item.id}`} state={props.item}>Ver Mais</Link>
                <BookmarkAddOutlinedIcon/>
                
            </div>
        </div>
    );
}
