import React from "react";
import Navbar from "../component/navbar/Navbar";
import SlideBar from "../component/SlideBar"
import api from "../api/api";
import AllTransaction from "../component/alltrans/AllTransaction";

const TransactionsList = () => {
  const [data, setData]  = React.useState([])
  const getAllTransaction = async () => {
    try {
      const response = await api.allTrans()
      setData(response.data)
    }
    catch (e) {
      alert(e.message)
    }
  }

  React.useEffect(() => {
    getAllTransaction()
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
                    <AllTransaction transactions={data}/>
                </div>
            </div>
        </>
    )
}

export default TransactionsList