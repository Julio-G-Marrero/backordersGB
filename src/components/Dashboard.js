import React from "react";
import Stats from "./dashboard/Stats"
import OrderTable from "./dashboard/orders_table"


function Dashboard(props) {
    return(
        <>
        <div className="stats">
            <Stats/>
        </div>
        <div className="ordenes-table">
            <OrderTable orders={props.orders} setOrders={props.setOrders}/>
        </div>
        </>
    )
}

export default Dashboard;