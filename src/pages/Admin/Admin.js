
import React, { useEffect, useState } from 'react'
import Order from "../../components/Order/Order";

const Admin = () => {

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const fetchAllOrders = () => {
        setIsLoading(true)
        fetch('http://localhost:4000/orders')
            .then((res) => res.json())
            .then(res => {setOrders(res); setIsLoading(false) })
    }

    useEffect(() => {
        fetchAllOrders()
    }, []);


    //metoda do usuniecia jednego zamowienia o wskazanym id
    const handleDeleteOrder = (id) => { //handleDeleteOrder
        fetch(`http://localhost:4000/orders/${id}`, { //korzysta z fetch
            method: 'DELETE'  // usuwa w json server
        }).then(()=> {fetchAllOrders() }); // wczyta liste elementow po usunieciu
    };



    if(isLoading){
      return 'Loading...'
    }

    if(!orders.length ){
        return 'Brak zgłoszeń'
    }

    //przekazujemy do Order w props handleDeleteOrder ( funkcja do usuniecia order )

    return orders.map((order)=>  <Order name="Paula" key={order.id} showDeleteBtn order={order}  handleDeleteOrder={handleDeleteOrder}/> )




};



export default Admin;