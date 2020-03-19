
import React, { useEffect, useState } from 'react'
import Order from "../../components/Order/Order";


const Admin = () => {

    const [orders, setOrders] = useState([]);

    const fetchAllOrders = () => {
        fetch('http://localhost:4000/orders')
            .then((res) => res.json())
            .then(res => {setOrders(res)})
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



    if(!orders.length){
      return 'Loading...'
    }

    //przekazujemy do Order w props handleDeleteOrder ( funkcja do usuniecia order )

    return orders.map((order)=>  <Order key={order.id} order={order}  handleDeleteOrder={handleDeleteOrder}/> )




};



export default Admin;