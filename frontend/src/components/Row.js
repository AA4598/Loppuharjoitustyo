import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Pencil, Trash, XCircleFill, SaveFill } from 'react-bootstrap-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Row = ({ mode, item, func }) => {

  const [typeOptions] = useState(['Hauis', 'Olkapäät', 'Ojentajat', 'Penkki'])
  const [id, setId] = useState("")
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState(typeOptions[0])
  const [repeat, setRepeat] = useState(0)
  const [weight, setWeight] = useState(0)


  useEffect(() => {

    if (mode !== 0) {
      setId(item._id);
      setDate(new Date(item.date));
      setType(item.type);
      setRepeat(item.repeat);
      setWeight(item.weight);
    } else {


      setId(null);
      setDate(new Date());
      setType(typeOptions[0]);
      setRepeat('');
      setWeight('');

    }

  }, [mode, item._id, item.date, item.type, item.repeat, item.weight, typeOptions]);


  const handleRow = (mode, id) => {

    func(mode, id);
  }

  if (mode === 2) {

    const getFormmatedDate = () => {
      let month = (date.getMonth() + 1).toString();
      let day = date.getDate().toString();
      let year = date.getFullYear().toString();
      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;

      return (month + "/" + day + "/" + year);
    }

    let formattedDate = getFormmatedDate(date);

    let values = [formattedDate, type, repeat, weight];

    return (

      <tbody>

        <tr>

          {values.map((item, ind) => {

            return <td key={ind}> {item} </td>
          }
          )}

          <td style={{ textAlign: 'right' }}>

            <Button className="btn btn-success btn-sm" id={item._id} onClick={(e) => { handleRow(3, e.target.id) }} >
              <Pencil id={item._id}></Pencil>
            </Button>
            <Button className="btn btn-secondary btn-sm" style={{ marginLeft: '5px' }} id={item._id} onClick={(e) => { handleRow(1, e.target.id) }} >
              <Trash id={item._id}></Trash>
            </Button>

          </td>
        </tr>
      </tbody >

    )

  } else {

    // parametri turha kun/jos köytetään tilamuuttujaa
    const handleSave = (event, _id) => {

      if (date === '' || type === '' || repeat === '' || weight === '') {

        return;

      } else {

        event.preventDefault()

        const data = {
          _id: id,
          date: date,
          type: type,
          repeat: repeat,
          weight: weight
        }

        if (mode === 0) {
          func(5, data);
        } else {
          func(6, data);
        }
      }
    }

    return (

      <tbody>

        <tr>

          <td>
            <DatePicker type='date' className="form-control" id='dp' onChangeRaw={(e) => { e.preventDefault() }} required selected={date} onChange={date => setDate(date)} />
          </td>

          <td>
            <Form.Control as="select" id='type' custom value={type} onChange={({ target }) => {
              setType(target.value)
            }}>

              {typeOptions.map((item, ind) => {

                return <option key={ind} value={item}> {item}</option>
              }
              )}

            </Form.Control>
          </td>

          <td><input className="form-control" id='repeat'
            type='Number'
            required
            value={repeat}
            onChange={({ target }) => setRepeat(target.value)}
          /></td>
          <td><input className="form-control" id='weight'
            type='Number'
            required
            value={weight}
            onChange={({ target }) => setWeight(target.value)}
          /></td>

          <td>
            <Button type="submit" className="btn btn-primary" id={id} onClick={(e) => { handleSave(e, e.target.id) }}>
              <SaveFill id={id}></SaveFill>
            </Button>
          </td>
          <td>
            <Button className="btn btn-secondary" id={item._id} onClick={(e) => { handleRow(2, e.target.id) }}>
              <XCircleFill id={item._id}></XCircleFill>
            </Button>
          </td>

        </tr>
      </tbody>

    )
  }
}
export default Row;