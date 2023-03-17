import React from "react";
import Navbar from "../component/navbar/Navbar";
import SlideBar from "../component/SlideBar";
import RoomList from "../component/roomlist/RoomList";
import api from "../api/api";

const Rooms = () => {
  const [data, setData]  = React.useState([])
  const getRoom = async () => {
    try {
      const response = await api.rooms()
      setData(response.data)
    }
    catch (e) {
      alert(e.message)
    }
  }

  const onDeleteHandle = async (roomId) => {
    if (window.confirm(`Ban co muon xoa ${roomId} nay khong?`)) {
      try {
        await api.deleteRoomById(roomId)
        const updateData = data.filter(room => room._id !== roomId)
        setData(updateData) 
      } catch (e) { 
        alert(e.response.data.message)
      }
    }
  }

  React.useEffect(() => {
    getRoom()
  }, [])
    return (
        <>
        <Navbar />
            <div className='d-flex p-2'>
                <div className="d-flex flex-column"> 
                    <h3 style={{color: '#8162F9'}}>Admin Page</h3>
                    <SlideBar />
                </div>
                <div className='px-2 py-5'>
                    <RoomList onDeleteHandle={onDeleteHandle} lists={data}/>
                </div>
            </div>
        </>
    )
}

export default Rooms