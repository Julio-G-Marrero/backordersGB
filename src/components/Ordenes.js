import React from "react";
import OrderTable from "./dashboard/orders_table"

function Ordenes(props) {
    return(
        <div className="ordenes-table mt-20">
            <OrderTable orders={props.orders} setOrders={props.setOrders}/>
        </div>
    )
}

export default Ordenes