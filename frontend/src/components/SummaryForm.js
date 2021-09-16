import React from 'react';
import Row from './SummaryRow';
import { Table } from 'react-bootstrap';
import './css/form.css';


const SummaryForm = ({ data, header }) => {

  const HeaderRow = ({ header, func }) => {

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

    <div className="overflow-auto form" style={{
      maxHeight: '600px'
    }}>

      <Table className="table table-sm table-primary" width='60%' responsive="sm">
        {data.length > 0 &&
          <HeaderRow header={header} />
        }
        {data.length > 0 && data.map((item, i) => {

          return <Row key={i} item={item} />
        }
        )}

      </Table>
    </div>
  )

}
export default SummaryForm