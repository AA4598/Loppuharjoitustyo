import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap';
import ToastMsg from './ToastMsg';

const RegisterForm = ({ show, close, func }) => {

    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pro, setPro] = useState(false)

    const [showToast, setShowToast] = useState(false)

    const [message, setMessage] = useState({
        header: '',
        message: '',
        autohide: true,
        delay: 0,
        style: {

            backgroundcolor: '#00FF00',
            color: 'blue'
        }
    });


    const handleRegin = async (p) => {

        if (p) {

            let regData = {
                "firstname": firstName,
                "lastname": surName,
                "email": email,
                "password": password,
                "pro": pro
            }

            const data = await func(2, regData);

            if (data.code !== 200) {


                setMessage({
                    header: 'Virhe',
                    message: data.message,
                    closeParent: false,
                    autohide: true,
                    style: {

                        backgroundcolor: '#00FF00',
                        color: 'blue'

                    },
                });

            } else if (data.code === 200) {

                setMessage({
                    header: 'Rekisteröinti onnistui',
                    message: data.message,
                    closeParent: true,
                    autohide: true,
                    style: {

                        backgroundcolor: '#00FF00',
                        color: 'blue'

                    },
                });

            }

            clearFields();
            setShowToast(true);

        }
    }

    const clearFields = () => {
        setFirstName('')
        setSurName('')
        setEmail('')
        setPassword('')
        setPro(false)
    }

    if (show) {

        return (
            <>
                <Form onSubmit={(event) => {
                    event.preventDefault();
                    handleRegin(true);
                }}>
                    <Modal.Body>

                        <Form.Group >
                            <Form.Label>Etunimi</Form.Label>
                            <Form.Control type="input" placeholder="Etunimi" value={firstName} onChange={({ target }) => setFirstName(target.value)} required />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Sukunimi</Form.Label>
                            <Form.Control type="input" placeholder="Sukunimi" value={surName} onChange={({ target }) => setSurName(target.value)} required />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="email" value={email} onChange={({ target }) => setEmail(target.value)} required />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Salasana</Form.Label>
                            <Form.Control type="password" placeholder="Salasana" value={password} onChange={({ target }) => setPassword(target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Ammattilainen" onChange={({ target }) => setFirstName(target.value)} />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { close(false) }}>
                            Sulje
                    </Button>
                        <Button type='Submit' variant="primary">
                            Valmis
                   </Button>
                    </Modal.Footer>
                </Form>

                <ToastMsg show={showToast} close={() => { setShowToast(false); if (message.closeParent) close(false) }} params={message}></ToastMsg>
            </>
        )
    } else {

        return null
    }
}

export default RegisterForm