import React from "react"
import './roomList.css'
import {Link} from 'react-router-dom'


const Room = props => {
  const { _id: id, title, desc, price, maxPeople, onDelete} = props
  return (
    <tr>
      <th scope="row">
        <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
      </th>
      <td>{id}</td>
      <td>{title}</td>
      <td>{desc}</td>
      <td>{price}</td>
      <td>{maxPeople}</td>
      <td><div onClick={onDelete} className="delete-btn">Delete</div></td>
    </tr>
  )
}

const RoomList = (props) => {
  const { lists, onDeleteHandle } = props
  const onDelete = (roomId) => {
    onDeleteHandle(roomId)
  }
  return (
    <div className="mt-5">
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <h4>Rooms List</h4>
        <Link to='/newroom' className="addnew-btn text-decoration-none">Add New</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input disabled className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
            </th>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Max People</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            lists.map((item, index) => (
              <Room onDelete={() => onDelete(item._id)} key={index} {...item} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default RoomList