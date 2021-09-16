import React from 'react';
import Row from './Row';
import { Table, Form } from 'react-bootstrap';
import './css/form.css';


const DataForm = ({ mode, data, header, func }) => {


  const HeaderRow = ({ header }) => {

    return (
      <tbody>

        <tr>
          {header.map((item, ind) => {

            return <th key={ind}>{item}</th>
          }
          )}
        </tr>

      </tbody>
    )
  }

  return (

    <Form className="overflow-auto form" style={{
      maxHeight: '587px'
    }} autoComplete="off">

      <Table className="table table-sm table-primary" responsive="sm">
        {data.length > 0 &&
          <HeaderRow header={header} />
        }
        {data.length > 0 && data.map((item) => {

          return <Row key={item._id} mode={mode} item={item} func={func} />
        }
        )}

      </Table>
    </Form>
  )

}
export default DataForm