import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faCircleDollarToSlot,
  faWallet

} from "@fortawesome/free-solid-svg-icons";


const InfoBoardItem = (props) => {
  const { title, number, icon: Icon } = props
  return (
    <>
      <div className="card" style={{ width: '18rem' }} >
        <div className="card-body">
          <p className="card-title">{title}</p>
          <h5 className="card-text">{number}</h5>
          <div className="text-end">
            <Icon />
          </div>
        </div>
      </div>
    </>
  );
};
const InfoBoard = (props) => {
  const { totalUser, totalOrder, totalEarnings, totalBalance } = props
  return (
    <div className="d-flex justify-content-around">
      <InfoBoardItem title='USERS' number={totalUser} icon={() =>
        <div className="d-inline-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '2px', backgroundColor: '#ffcccc' }}>
          <FontAwesomeIcon color={'#dc143c'} icon={faUser} />
        </div>} />
      <InfoBoardItem title='ORDERS' number={totalOrder} icon={() =>
        <div className="d-inline-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '2px', backgroundColor: '#f7ebcf' }}>
          <FontAwesomeIcon color={'#e0b246'} icon={faCartShopping} />
        </div>} />
      <InfoBoardItem title='EARNINGS' number={totalEarnings ? `$ ${totalEarnings}` : null} icon={() =>
        <div className="d-inline-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '2px', backgroundColor: '#cce6cc' }}>
          <FontAwesomeIcon color={'#1c871b'} icon={faCircleDollarToSlot} />
        </div>} />
      <InfoBoardItem title='BALANCE' number={totalBalance ? `$ ${totalBalance}` : null} icon={() =>
        <div className="d-inline-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '2px', backgroundColor: '#e6cce6' }}>
          <FontAwesomeIcon color={'#9c3a9c'} icon={faWallet} />
        </div>} />
    </div>
  )
}

export default InfoBoard;
