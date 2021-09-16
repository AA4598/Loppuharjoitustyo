import React from 'react'

const SummaryRow = ({ item }) => {

  const date = new Date(item.date);
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

  let values = [formattedDate, item.repeats, item.users];

  return (

    <tbody>

      <tr>

        {values.map((item, ind) => {

          return <td key={ind}> {item} </td>
        }
        )}

      </tr>
    </tbody>
  )

}

export default SummaryRow;