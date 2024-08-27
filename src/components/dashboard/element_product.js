import React from "react";

function ElementProduct(props){
    const montoTotal = props.producto.precio * props.producto.cantidad;
    function handleDeleteButton(){
        props.handleDeleteProducto(props.producto)
    }
    if(props.producto.nombre == undefined){
        return("")
    }else {
        return(
            <>
            <tr class="border-b border-blue-gray-200">
                <td class="py-3 px-4">{props.producto.sku}</td>
                <td class="py-3 px-4">{props.producto.nombre}</td>
                <td class="py-3 px-4">${props.producto.precio}</td>
                <td class="py-3 px-4 text-center">{props.producto.cantidad}</td>
                <td class="py-3 px-4">${montoTotal}</td>
                <td className={props.isCreatePopup ? 'flex h-10 items-center' : 'hidden'}
                onClick={handleDeleteButton}>
                    <svg class="w-3 h-3 text-red-900 hover:cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"
                    />
                    </svg>
                </td>
                <td className={props.isEditPopup ? 'flex h-10 items-center' : 'hidden'}>
                <svg class="w-6 h-6 text-green-800  hover:cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                </svg>

                </td>
            </tr>
            </>
        )
    }
}
export default ElementProduct;