import React, { useState, useEffect } from 'react'
import {
  Button, Modal, Form
} from 'react-bootstrap';
import ToastMsg from './ToastMsg';
import RegisterForm from './RegisterForm';


const LoginDialog = ({ _show, showDialog, func }) => {

  let _labels = {
    title: 'Kirjautuminen',
    btnClose: 'Sulje'
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [labels, setLabels] = useState(_labels);

  const [showToast, setShowToast] = useState(false)

  const handleClose = () => { };

  const [message, setMessage] = useState({
    header: '',
    message: '',
    autohide: false,
    delay: 0,
    style: {

      backgroundcolor: '#00FF00',
      color: 'blue'
    }
  });


  useEffect(() => {

    setLabels(labels);
    setShow(_show);
    if (!_show) {
      setShowRegister(false);
    }
  }, [_show, labels])


  const showRegisterForm = (p) => {

    regLabels();
    setShowRegister(p);

  }

  const regLabels = () => {

    let _labels = {
      title: 'Rekisteröinti',
      btnClose: 'Sulje'
    }
    setLabels(_labels);
  }

  const logLabels = () => {

    let _labels = {
      title: 'Kirjautuminen',
      btnClose: 'Sulje'
    }
    setLabels(_labels);
  }


  const handleLogin = async (p) => {

    if (p) {

      let auth = {
        "email": email,
        "password": password
      }

      let data = await func(1, auth);

      if (data === null || data.code === 404 || data.code === 401) {

        let message = null;
        let closeParent = false;

        if (data === null) {

          closeParent = true;
          message = "Ei yhteyttä backendiin";
        } else {

          message = data.message;

        }

        setMessage({
          header: 'Error',
          message: message,
          autohide: true,
          delay: 2000,
          closeParent: closeParent,
          style: {

            backgroundcolor: '#00FF00',
            color: 'blue'

          },
        });

        setShowToast(true);
      } else if (data.code === 200) {

        setMessage({
          header: 'Kirjautuminen onnistui',
          message: 'Tervetuloa ;)',
          autohide: true,
          delay: 2000,
          closeParent: true,
          style: {

            backgroundcolor: '#00FF00',
            color: 'blue'

          },
        });

        setShowToast(true);

      }

    } else {

      showDialog(false);

    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={() => { handleLogin(false) }}>
          <Modal.Title>{labels.title}</Modal.Title>
        </Modal.Header>

        {!showRegister &&
          <>
            <Form onSubmit={(event) => {
              event.preventDefault()
              handleLogin(true)
            }}>

              <Modal.Body>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>

                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={({ target }) => setEmail(target.value)} required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Salasana</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} required />
                </Form.Group>

              </Modal.Body>

              <Modal.Footer>
                <>
                  <Button variant="warning" className='mr-auto' onClick={() => { showRegisterForm(true) }}>
                    Uusi käyttäjä
                  </Button>
                  <Button variant="secondary" onClick={() => { handleLogin(false) }}>
                    {labels.btnClose}
                  </Button>
                  <Button type='submit' variant="primary">
                    Kirjaudu
                  </Button>
                </>
              </Modal.Footer>
            </Form>
          </>

        }
        <RegisterForm show={showRegister} close={() => {
          logLabels(); setShowRegister(false);
        }} func={func} />
        <ToastMsg show={showToast} close={() => { setShowToast(false); if (message.closeParent) showDialog(false) }} params={message}></ToastMsg>

      </Modal>
    </>
  )
}
export default LoginDialog
