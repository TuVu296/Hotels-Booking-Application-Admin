import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import {
  faGripHorizontal,
  faUser,
  faHouseChimney,
  faCreditCard,
  faTruckMoving,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const SlideBar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    window.localStorage.removeItem('userLogin')
    navigate('/login')
  }
  return (
    <>
      <nav className="nav flex-column p-2">
        <div>
          <p className="mb-0">MAIN</p>
          <div className="d-flex align-items-center px-4">
            <FontAwesomeIcon color={'#8162F9'} icon={faGripHorizontal} />
            <Link className="nav-link active" aria-current="page" to="/">
              Dashboard
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-0">LISTS</p>
          <div>
            <div className="d-flex align-items-center px-4">
              <FontAwesomeIcon color={'#8162F9'} icon={faUser} />
              <a className="nav-link" href="#">
                Users
              </a>
            </div>
            <div onClick={() => navigate('/hotels')}  className="d-flex align-items-center px-4">
              <FontAwesomeIcon color={'#8162F9'} icon={faHouseChimney} />
              <a className="nav-link" href="#">
                Hotels
              </a>
            </div>
            <div onClick={() => navigate('/rooms')} className="d-flex align-items-center px-4">
              <FontAwesomeIcon color={'#8162F9'} icon={faCreditCard} />
              <a className="nav-link" href="#">
                Rooms
              </a>
            </div>
            <div onClick={() => navigate('/list-transactions')} className="d-flex align-items-center px-4">
              <FontAwesomeIcon color={'#8162F9'} icon={faTruckMoving} />
              <a className="nav-link" href="#">
                Transactions
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-0">NEW</p>
          <div onClick={() => navigate('/newhotel')} className="d-flex align-items-center px-4">
            <FontAwesomeIcon color={'#8162F9'} icon={faHouseChimney} />
            <a className="nav-link" href="#">
              New Hotel
            </a>
          </div>
          <div onClick={() => navigate('/newroom')} className="d-flex align-items-center px-4">
            <FontAwesomeIcon color={'#8162F9'} icon={faCreditCard} />
            <a className="nav-link" href="#">
              New Room
            </a>
          </div>
        </div>
        <div>
          <p className="mb-0">USER</p>
          <div className="d-flex align-items-center px-4">
            <FontAwesomeIcon color={'#8162F9'} icon={faRightFromBracket} />
            <a onClick={onLogout} className="nav-link disable">
              Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SlideBar;
