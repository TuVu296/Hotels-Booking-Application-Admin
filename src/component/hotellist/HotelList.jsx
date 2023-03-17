import React from "react"
import './hotelList.css'
import {Link} from 'react-router-dom'

const Hotel = props => {
  const { _id: id, name, type, title, city, onDelete} = props
  return (
    <tr>
      <th scope="row">
        <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
      </th>
      <td>{id}</td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{title}</td>
      <td>{city}</td>
      <td><div onClick={onDelete} className="delete-btn">Delete</div></td>
    </tr>
  )
}

const HotelList = (props) => {
  const { lists, onDeleteHandle } = props
  const onDelete = (hotelId) => {
    onDeleteHandle(hotelId)
  }
  return (
    <div className="mt-5">
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <h4>Hotels List</h4>
        <Link to='/newhotel' className="addnew-btn text-decoration-none">Add New</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input disabled className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
            </th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Title</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            lists.map((item, index) => (
              <Hotel onDelete={() => onDelete(item._id)} key={index} {...item} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default HotelList