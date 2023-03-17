import React from "react";
import Navbar from "../component/navbar/Navbar";
import SlideBar from "../component/SlideBar";
import HotelList from "../component/hotellist/HotelList";
import api from "../api/api";

const Hotels = () => {
  const [data, setData]  = React.useState([])
  const getHotels = async () => {
    try {
      const response = await api.hotels()
      setData(response.data)
    }
    catch (e) {
      alert(e.message)
    }
  }

  const onDeleteHandle = async (hotelId) => {
    if (window.confirm(`Ban co muon xoa ${hotelId} nay khong?`)) {
      try {
        await api.deleteHotelById(hotelId)
        const updateData = data.filter(hotel => hotel._id !== hotelId)
        setData(updateData) 
      } catch (e) { 
        alert(e.response.data.message)
      }
    }
  }

  React.useEffect(() => {
    getHotels()
  }, [])
    return (
        <>
        <Navbar />
            <div className='d-flex p-2'>
                <div className="d-flex flex-column"> 
                    <h3 style={{color: '#8162F9'}}>Admin Page</h3>
                    <SlideBar />
                </div>
                <div className='px-2 py-5' style={{ flex: '1'}}>
                    <HotelList onDeleteHandle={onDeleteHandle} lists={data}/>
                </div>
            </div>
        </>
    )
}

export default Hotels