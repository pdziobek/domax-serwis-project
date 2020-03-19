import React from 'react'
import { getLocationDescription, getMachineDescription, getMeetingTime } from '../common/utils'

//wyciagamy handleDeleteOrder z propsow
// const Order = ( {order, handleDeleteOrder, showDeleteBtn } ) => {
const Order = (  props ) => {
    // 1.
    const {order, handleDeleteOrder, showDeleteBtn } = props;

    //2.
    // const order = props.order;
    // const handleDeleteOrder = props.order;
    // const showDeleteBtn = props.showDeleteBtn;

    //dodajemy guzik do usuniecia zamowienia

    //dodajemy onClick ktory przekaze ID pobrane z order.id
    return (
        <div>
            <div>Urządzenie do naprawy: <br/> {getMachineDescription( order.machine)}</div>
            <div>Miejscowość: <br/> {getLocationDescription( order.location)}</div>
            <div>Problem/y z urządzeniem:</div>
            <ul>
                { order.reason.issue1 && <li>Nie włącza się</li>}
                { order.reason.issue2 && <li>Hałasuje</li>}
                { order.reason.issue3 && <li>Włącza się ale nie reaguje</li>}
                { order.reason.issue4 && <li>Wyświetlacz nie włącza się</li>}
                { order.reason.otherReason && <li>{order.reason.otherReason}</li>}
            </ul>


            <div>Imię i nazwisko zgłaszającego: <br/> {order.inputName}</div>
            <div>Adres wizyty serwisowej: <br/> {order.inputAddress}</div>
            <div>Numer kontaktowy: <br/> {order.inputNumber}</div>
            <div>Preferowany czas wizyty serwisowej: <br/> {getMeetingTime(order.meetingTime)}</div>


            {  showDeleteBtn &&  <button onClick={() => handleDeleteOrder(order.id)}>DELETE</button> }
        </div>
    )
};

export default Order;