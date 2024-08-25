import React from "react";
import Stats from "./dashboard/Stats"
import OrderTable from "./dashboard/orders_table"
import { OrdersContext } from '../contexts/OrdersContext';


function Dashboard() {
    const ordersContext = React.useContext(OrdersContext)
    return(
        <>
        <div className="stats">
            <Stats/>
        </div>
        <div className="ordenes-table">
            <OrderTable orders={ordersContext}/>
        </div>
        </>
    )
}

export default Dashboard;