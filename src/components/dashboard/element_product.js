import React from "react";

function ElementProduct(props){
    return(
        <>
        <tr class="border-b border-blue-gray-200">
            <td class="py-3 px-4">{props.producto.nombre}</td>
            <td class="py-3 px-4">${props.producto.precio}</td>
            <td class="py-3 px-4">{props.producto.cantidad}</td>
            <td class="py-3 px-4">$5025</td>
        </tr>
        </>
    )
}
export default ElementProduct;