import React from "react";
import InfoBoard from "../../component/InfoBoard";
import Navbar from "../../component/navbar/Navbar";
import SlideBar from "../../component/SlideBar";
import Transaction from "../../component/transaction/Transaction";
import api from "../../api/api";

const DashBoard = () => {
    const [data, setData]  = React.useState({})
  const getTransaction = async () => {
    try {
      const response = await api.transactionDashboard()
      setData(response.data)
    }
    catch (e) {
      alert(e.message)
    }
  }
  const { transactions = [], ...dataInfo } = data

  React.useEffect(() => {
    getTransaction()
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
                    <InfoBoard {...dataInfo} />
                    <Transaction transactions={transactions}/>
                </div>
            </div>
        </>
    )
}

export default DashBoard