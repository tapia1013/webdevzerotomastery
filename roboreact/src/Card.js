import React from 'react';



const Card = () => {
  return (
    <div style={{
      backgroundColor: 'aqua',
      width: '450px',
      height: '650px',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '25px'
    }}>
      <img src='https://robohash.org/testtest?200x200' alt="robot" />
      <div>
        <h2>John Doe</h2>
        <p>jogndoe@gmail.com</p>
      </div>
    </div>
  )
}

export default Card;
