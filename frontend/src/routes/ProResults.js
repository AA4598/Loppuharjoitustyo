import React, { useState, useEffect, useCallback } from 'react'
//import { Redirect } from "react-router-dom";

import ToastMsg from '../components/ToastMsg';

import Form from '../components/SummaryForm'

const ProResults = ({ callBack, user }) => {

  const [summaryData, setSummaryData] = useState([]);
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

  const getSummary = useCallback(async () => {

    const showError = () => {
      setMessage({
        header: 'Error',
        message: "Ei yhteyttä backendiin",
        autohide: true,
        delay: 2000,
        style: {

          backgroundcolor: '#00FF00',
          color: 'blue'

        },
      });
      setShowToast(true);
    }

    const data = await callBack("getSummaryData", "professionals/");

    if (data === null) {

      showError();

    } else {

      setSummaryData(data);
    }

  }, [callBack]);


  useEffect(() => {

    getSummary()

  }, [getSummary, user])

  return (
    <div className="container-fluid">
      <div className='row'>
        <h2 className='col'>Ammattilaisten suoritukset</h2>
      </div>
      <Form data={summaryData} header={['Pvm', 'Suoritukset yht.', 'Suorittaja lkm']} />

      <ToastMsg show={showToast} close={() => { setShowToast(false); }} params={message}></ToastMsg>
    </div>

  )
}
export default ProResults