import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';




ReactDOM.render(
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr 1fr',
    gridGap: '25px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
    <Card />
    <Card />
    <Card />
  </div>,
  document.getElementById('root')
);

