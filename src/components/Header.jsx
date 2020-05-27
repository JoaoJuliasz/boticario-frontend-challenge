import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onDelete, cart }) => (

    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '15px', background: 'rgb(249, 245, 245)', padding: '25px 0', borderBottom: '1px solid rgb(234, 233, 233)' }}>
        <Link to='/'>
        <h2 style={{ margin: 0, borderRight: '1px solid rgb(183, 180, 180)', paddingRight: '25px', color: '#000',}}>MINHA LOJA</h2>
        </Link>
        <div style={{ display: 'flex' }}>
            <h3 style={{ margin: 0, paddingLeft: '25px', cursor: 'pointer', fontWeight: 100, color: '#4e4d4d' }}>PERFURMARIA</h3>
            <h3 style={{ margin: 0, paddingLeft: '20px', cursor: 'pointer', fontWeight: 100, color: '#4e4d4d' }}>MAQUIAGEM</h3>
            <h3 style={{ margin: 0, paddingLeft: '20px', cursor: 'pointer', fontWeight: 100, color: '#4e4d4d' }}>CABELOS</h3>
            <h3 style={{ margin: 0, paddingLeft: '20px', cursor: 'pointer', fontWeight: 100, color: '#4e4d4d' }}>INFANTIL</h3>
        </div>
        <div style={{ paddingLeft: '32px' }}>
        <Link to='/cart'>
            <span style={{ border: '1px solid #908e8e', borderWidth: '2px', padding: '8px 25px', borderRadius: '22px', cursor: 'pointer', color: '#908e8e' }}><i className="fas fa-shopping-cart"></i>{cart > 0 ? ` R$${cart.toFixed(2).replace('.', ',')}` : ''}</span>
            </Link>
        </div>
    </div>
);

export default Header;