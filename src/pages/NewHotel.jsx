import React from "react";
import Navbar from "../component/navbar/Navbar";
import SlideBar from "../component/SlideBar"
import api from '../api/api';
import { useNavigate } from 'react-router-dom'

const NewHotel = () => {
  const [name, setName] = React.useState('')
  const [city, setCity] = React.useState('')
  const [dis, setDis] = React.useState('')
  const [desc, setDesc] = React.useState('')
  const [img, setImg] = React.useState('')
  const [rooms, setRooms] = React.useState([])
  const [type, setType] = React.useState('')
  const [add, setAdd] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [featured, setFeatured] = React.useState(false)
  const navigate = useNavigate()
  

 const [allroom, setAllRoom]  = React.useState([])
  const getRoom = async () => {
    try {
      const response = await api.rooms()
      setAllRoom(response.data)
    }
    catch (e) {
      alert(e.message)
    }
  }

  React.useEffect(() => {
    getRoom()
  }, [])


  const onCreateHotel = async () => {
    if (!name) {
      return alert('Chua nhap du du lieu!')
    }
    if (!city) {
      return alert('Chua nhap du du lieu!')
    }
    if (!dis) {
      return alert('Chua nhap du du lieu!')
    }
    if (!desc) {
      return alert('Chua nhap du du lieu!')
    }
    if (!img) {
      return alert('Chua nhap du du lieu!')
    }
    if (!rooms.length) {
      return alert('Chua nhap du du lieu!')
    }
    if (!type) {
      return alert('Chua nhap du du lieu!')
    }
    if (!add) {
      return alert('Chua nhap du du lieu!')
    }
    if (!title) {
      return alert('Chua nhap du du lieu!')
    }
    if (!price) {
      return alert('Chua nhap du du lieu!')
    }

    try {
      const data = {
        name,
        city,
        distance: dis,
        desc,
        photos: img,
        rooms,
        title,
        cheapestPrice: price,
        address: add,
        type,
        featured
      }
      await api.addHotel(data)
      navigate('/hotels')
    
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  const onSelectRoom = (e) => {
    if (e.target.value) {
      const newRooms = rooms.filter(room => room !== e.target.value)
      if (rooms.length === newRooms.length) {
        newRooms.push(e.target.value)
      }
  
      setRooms(newRooms)
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
              <input type="text" className="form-control" placeholder="Add New Hotel" />
            </div>
            <div className='d-flex gap-5 mt-3'>
              <div className='d-flex flex-column gap-3' style={{ flex: '1' }}>
                <div>
                  <p>Name</p>
                  <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" className="form-control" placeholder="Hotel Name" />
                </div>
                <div>
                  <p>City</p>
                  <input value={city} onChange={(e) => {setCity(e.target.value)}} type="text" className="form-control" placeholder="City" />
                </div>
                <div>
                  <p>Distance from City Center</p>
                  <input value={dis} onChange={(e) => {setDis(e.target.value)}} type="number" className="form-control" placeholder="Distance from City Center" />
                </div>
                <div>
                  <p>Description</p>
                  <input value={desc} onChange={(e) => {setDesc(e.target.value)}} type="text" className="form-control" placeholder="Description" />
                </div>
                <div>
                  <p>Image</p>
                  <input value={img} onChange={(e) => {setImg(e.target.value)}} type="text" className="form-control" placeholder="Image" />
                </div>
              </div>
              <div className='d-flex flex-column gap-3' style={{ flex: '1' }}>
                <div>
                  <p>Type</p>
                  <input value={type} onChange={(e) => {setType(e.target.value)}} type="text" className="form-control" placeholder="Type" />
                </div>
                <div>
                  <p>Address</p>
                  <input value={add} onChange={(e) => {setAdd(e.target.value)}} type="text" className="form-control" placeholder="Address" />
                </div>
                <div>
                  <p>Title</p>
                  <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" className="form-control" placeholder="Title" />
                </div>
                <div>
                  <p>Price</p>
                  <input value={price} onChange={(e) => {setPrice(e.target.value)}} type="number" className="form-control" placeholder="Price" />
                </div>
                <div>
                  <p>Featured</p>
                  <select value={featured} onChange={(e) => {setFeatured(e.target.value)}} style={{ width: 'auto' }} className="form-select my-0">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="py-3">
              <p>Rooms</p>
              <select value={rooms} onChange={onSelectRoom} className="form-select" id="multiple-select-field" data-placeholder="Choose anything" multiple>
                {
                  allroom.map((item, index) => {
                    return (
                      <>
                        <option key={index} value={item._id}>{item.title}</option>
                      </>
                    )
                  })
                }
            </select>
            </div>
          </div>
          <div className="my-4 px-5 py-2 btn btn-success" onClick={onCreateHotel}>Send</div>
        </div>
      </div>
    </>
  )
}

export default NewHotel