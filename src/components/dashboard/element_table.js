import React from "react";

function ElementTable(props){
    const order = props.order;
    function handleOpenOrder(){
        props.handleOrderSelected(order)
        props.setOverlay(!props.overlay)
    }
    function closeAllPopups() {
        props.handleOrderSelected(order)
    }
    return(
        <>
        <tr onClick={handleOpenOrder} className=" rounded-lg transition-all focus:opacity-[0.85] active:opacity-[0.85]  disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 hover:cursor-pointer ">
            <td className="py-2 px-4 border-b border-b-gray-50">
            <div className="flex items-center">
                <a href="#" className="text-gray-600 text-sm font-medium ml-2 truncate">{order.cliente.nombre}</a>
                </div>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-emerald-500">{order.cantidad_productos}</span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-emerald-500">${order.precio_pactado}</span>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none uppercase mb-3 ">{order.estatus_venta}</span>
            </td>
        </tr>
        <div 
            className={props.overlay ? 'overlay' : 'overlay hidden'}
            onClick={closeAllPopups}
        ></div>
        </>
    )
}
export default ElementTable;