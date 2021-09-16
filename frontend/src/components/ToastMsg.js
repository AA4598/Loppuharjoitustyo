import React from 'react'
import { Toast } from 'react-bootstrap';

const ToastMsg = ({ show, close, params }) => {

  const style = {

    backgroundColor: params.style.backgroundcolor,
    color: params.style.color,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'

  }

  const headerStyle = {
    backgroundColor: 'black',
    color: 'white'
  }

  return (

    <div>
      { params.autohide &&
        <Toast style={style} onClose={() => close()} show={show} delay={params.delay} autohide>

          <Toast.Header style={headerStyle}>
            <strong className="mr-auto">{params.header}</strong>

          </Toast.Header>
          <Toast.Body>{params.message}</Toast.Body>
        </Toast>
      }
      {
        !params.autohide &&
        <Toast style={style} onClose={() => close()} show={show}>

          <Toast.Header>
            <strong className="mr-auto">{params.header}</strong>

          </Toast.Header>
          <Toast.Body>{params.message}</Toast.Body>
        </Toast>
      }
    </div >

  );

}
export default ToastMsg;