import React from 'react'
import { getLocationDescription, getMachineDescription, getMeetingTime } from '../common/utils'



const Order = ({order}) => {
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
        </div>
    )
};

export default Order;