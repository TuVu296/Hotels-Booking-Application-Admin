import React from "react"
import dayjs from 'dayjs'
import classNames from "classnames"
import './alltransaction.css'

const TransactionItem = props => {
  const { _id: id, user, hotel, room, dateStart, dateEnd, price, payment, status } = props
  return (
    <tr>
      <th scope="row">
        <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
      </th>
      <td>{id}</td>
      <td>{user.username}</td>
      <td>{hotel?.name}</td>
      <td>{room.join(',')}</td>
      <td>{`${dayjs(dateStart).format('DD/MM/YYYY')} - ${dayjs(dateEnd).format('DD/MM/YYYY')}`}</td>
      <td>$ {price}</td>
      <td className='text-capitalize'>{payment.split('_').join(' ')}</td>
      <td><div className={classNames('text-color px-2 py-2 d-inline-block', { [`${status.toLowerCase()}-color`]: status })}>{status}</div></td>
    </tr>
  )
}

const AllTransaction = (props) => {
  const { transactions } = props
  return (
    <div className="mt-5">
      <h4>Lastest Transaction</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input disabled className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
            </th>
            <th scope="col">ID</th>
            <th scope="col">User</th>
            <th scope="col">Hotel</th>
            <th scope="col">Room</th>
            <th scope="col">Date</th>
            <th scope="col">Price</th>
            <th scope="col">Payment Menthod</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map((item, index) => (
              <TransactionItem key={index} {...item} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllTransaction