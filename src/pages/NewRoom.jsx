import React from "react";
import Navbar from "../component/navbar/Navbar";
import SlideBar from "../component/SlideBar"
import api from '../api/api';
import { useNavigate } from 'react-router-dom'



const NewRoom = () => {
  const [title, setTitle] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [desc, setDesc] = React.useState('')
  const [maxPeople, setMaxPeople] = React.useState('')
  const [roomNumbers, setroomNumbers] = React.useState('')
  const navigate = useNavigate()


  const onCreateRoom = async () => {
    if (!title) {
      return alert('Chua nhap du du lieu')
    }
    if (!price) {
      return alert('Chua nhap du du lieu')
    }
    if (!desc) {
      return alert('Chua nhap du du lieu')
    }
    if (!maxPeople) {
      return alert('Chua nhap du du lieu')
    }
    if (!roomNumbers) {
      return alert('Chua nhap du du lieu')
    }
    try {
      const data = {
        title,
        desc,
        maxPeople,
        price,
        roomNumbers: roomNumbers.split(',')
      }
      await api.addRoom(data)
      navigate('/rooms')
    
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className='d-flex p-2'>
        <div className="d-flex flex-column">
          <h3 style={{ color: '#8162F9' }}>Admin Page</h3>
          <SlideBar />
        </div>
        <div className='px-2 py-5 m-3' style={{ flex: '1' }}>
          <div>
            <div>
              <input type="text" className="form-control" placeholder="Add New Room" />
            </div>
            <div className='d-flex gap-5 mt-3'>
              <div className='d-flex flex-column gap-3' style={{ flex: '1' }}>
                <div>
                  <p>Title</p>
                  <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" className="form-control" placeholder="Title" />
                </div>
                <div>
                  <p>Price</p>
                  <input value={price} onChange={(e) => {setPrice(e.target.value)}} type="text" className="form-control" placeholder="Price" />
                </div>
              </div>
              <div className='d-flex flex-column gap-3' style={{ flex: '1' }}>
                <div>
                  <p>Description</p>
                  <input value={desc} onChange={(e) => {setDesc(e.target.value)}} type="text" className="form-control" placeholder="Type" />
                </div>
                <div>
                  <p>Max People</p>
                  <input value={maxPeople} onChange={(e) => {setMaxPeople(e.target.value)}} type="number" className="form-control" placeholder="Max People" />
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center py-3'>
              <div>
                <p>Rooms</p>
                <input value={roomNumbers} onChange={(e) => {setroomNumbers(e.target.value)}}type="text" className="form-control" placeholder="give comma between room numbers" />
              </div>
              <div onClick={onCreateRoom} className="my-4 px-5 py-4 btn btn-success">Send</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewRoom