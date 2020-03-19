
import React, { useEffect, useState } from 'react'


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


    if(!orders.length){
      return 'Loading...'
    }

    return orders.map((order)=> <p>{order.machine}</p> )

};



export default Admin;