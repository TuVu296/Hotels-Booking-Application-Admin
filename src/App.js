import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";
import Login from "./pages/login/Login"
import TransactionsList from "./pages/TransactionsList";
import Hotels from "./pages/Hotels";
import Rooms from "./pages/Rooms";
import NewHotel from "./pages/NewHotel";
import NewRoom from "./pages/NewRoom";

const ProtectRoute = (props) => {
  const userCurrentLogin = JSON.parse(window.localStorage.getItem('userLogin'))
  if (!userCurrentLogin) {
    return <Navigate to='/login' replace />
  }
  return props.children
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={
          <ProtectRoute>
            <DashBoard />
          </ProtectRoute>
        } />
        <Route path='/list-transactions' element={
          <ProtectRoute>
            <TransactionsList />
          </ProtectRoute>
        } />
        <Route path='/hotels' element={
          <ProtectRoute>
            <Hotels />
          </ProtectRoute>
        } />
        <Route path='/rooms' element={
          <ProtectRoute>
            <Rooms />
          </ProtectRoute>
        } />
        <Route path='/newhotel' element={
          <ProtectRoute>
            <NewHotel />
          </ProtectRoute>
        } />
        <Route path='/newroom' element={
          <ProtectRoute>
            <NewRoom />
          </ProtectRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
