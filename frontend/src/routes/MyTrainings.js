import React, { useState, useEffect, useCallback } from 'react'

import DataForm from '../components/DataForm'
import { Button, Container, Row, Col } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';

import ToastMsg from '../components/ToastMsg';

const MyTrainings = ({ callBack, user }) => {

  const [mode, setMode] = useState(2); // oletus että kaikki nöytetään
  const [myData, setMyData] = useState([]);
  const [myDataToShow, setMyDataToShow] = useState([]);

  const [showToast, setShowToast] = useState(false)

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


  const getAll = useCallback(async () => {

    const data = await callBack("getMyData");

    setMyData(data);
    setMyDataToShow(data);
    setMode(2);


  }, [callBack]);

  useEffect(() => {

    getAll()

  }, [getAll])


  const showTheToast = (header, message, delay, backgroundcolor, color) => {

    setMessage({
      header: header,
      message: message,
      autohide: true,
      delay: delay,
      closeParent: false,
      style: {
        backgroundcolor: backgroundcolor,
        color: color
      },
    });

    setShowToast(true);
  }


  const handleForm = async (_mode, id) => {

    console.log("############ mode= " + mode);

    if (_mode === 0) {

      let data = [];
      data[0] = {
        id: null,
        date: new Date(),
        type: "Hauis",
        repeat: 0,
        weight: 0
      };

      setMyDataToShow([data]);
      setMode(_mode);

    } else if (_mode === 1) {

      await callBack("deleteItem", id);
      showTheToast("Poistaminen", "Tiedon poistaminen onnistui", 3000, "#79BEA8", "#000000");
      getAll();
      //setMode(2);

    } else if (_mode === 3) {

      let data = myData.find((item) => {

        return (item._id === id)
      }
      )

      setMyDataToShow([data]);
      setMode(_mode);

    } else if (_mode === 2) { // editointimodessa cancel

      setMyDataToShow(myData);
      setMode(_mode);

    } else if (_mode === 5) {

      let data = id;

      try {

        const response = await callBack("addItem", data)

        if (response.code === 503) {

          showTheToast("Virhetilanne", response.message, 3000, "#FF9999", "#000000");

        } else {

          showTheToast("Lisääminen", "Tiedon lisääminen onnistui", 3000, "#79BEA8", "#000000");
          getAll();
        }

      } catch (exception) {

        showTheToast("Virhetilanne", exception.message, 3000, "#FF9999", "#000000");

      }


    } else if (_mode === 6) {

      let data = id;

      // virhetarkastwlu try-catch puuttuuu LISÄÄ
      await callBack("updateItem", data);

      showTheToast("Päivitys", "Tiedon päivittäminen onnistui", 3000, "#79BEA8", "#000000");

      getAll();
      //setMode(2);
    }
  };

  const action = () => {

    //getAll();
  }

  const header = ['Pvm', 'Laji', 'Suorituskerrat', 'Paino'];

  return (

    <Container>
      <Row>
        <Col><h2>Omat suoritukset</h2></Col>
        {mode === 2 &&
          <Col >
            <Button className="float-right mt-1 btn btn-primary btn-sm>" onClick={() => { handleForm(0, null) }}>
              <PlusCircleFill width='20' height='20' ></PlusCircleFill>
            </Button>
          </Col>
        }
      </Row>

      <DataForm mode={mode} data={myDataToShow} header={header} func={handleForm} />

      <ToastMsg show={showToast} close={() => { setShowToast(false); action() }} params={message}></ToastMsg>
    </Container>
  )
}

export default MyTrainings