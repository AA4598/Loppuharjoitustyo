import React from 'react';
import Logo from '../img/logo.svg';


const Homepage = () => {
  return (
    <div>

      <div style={{ paddingLeft: '10px', paddingTop: '10px' }}>
        <h1>
          TREENIPÄIVÄKIRJA
        </h1>

        <h6>
          ©AA4598
        </h6>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <img src={Logo} width='30%' style={{ fill: 'blue' }} alt=''></img>
      </div>

    </div >
  )
}
export default Homepage