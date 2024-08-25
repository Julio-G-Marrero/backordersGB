import React from "react";
import ElementTable from "./element_table"
import OrderPopupEdit from "./OrderPopupEdit"
import OrderPopupCreate from "./OrderPopupCreate"

function OrdersTable(props){
    const dataInitial = [
        {
            "id": 'N/A',
            "id_vendedor": 'N/A',
            "nombre_vendedor": 'N/A',
            "fecha_apertura": '2024-01-01',
            "numero_tkt": '0000',
            "productos": [
            {
                "nombre": "N/A",
                "precio": "0",
                "cantidad":"0"
            }
            ],
            "cliente": {
            "contact": {
                "email": "parraferretera@hotmail.com",
                "tel": "+528123877776"
            },
            "ubicacion": "Saltillo COA, México",
            "nombre": "Cristóbal Parra Valero"
            },
            "cantidad_productos": '0',
            "id_estatus": '0',
            "estatus_venta": 'N/A',
            "fecha_promesa": '2024-01-01',
            "precio_pactado": "0",
            "comentarios": "ninguno",
            "id_ordenCompra": "ninguno",
            "cantidad_entregada": "0",
            "fecha_entregado": "2024-01-01",
        }]

    const [orderSelected, setOrderSelected] = React.useState(dataInitial[0])

    const [isActivePopupOrder,setIsActivePopupOrder] = React.useState(false)
    const [isActivePopupOrderCreate,setIsActivePopupOrderCreate] = React.useState(false)
    const [overlay, setOverlay ] = React.useState(false);

    function handleOrderSelected(order){
        setOrderSelected(order)
        setIsActivePopupOrder(!isActivePopupOrder)
    }
    function closehandleOrder() {
        setIsActivePopupOrder(!isActivePopupOrder)
    }
    function handleCreateOrder() {
        setIsActivePopupOrderCreate(!isActivePopupOrderCreate)
        setOverlay(!overlay)

    }
    function closeAllPopups() {
        setIsActivePopupOrder(false)
        setIsActivePopupOrderCreate(false)
        setOverlay(!overlay)
    }
    return(
        <>
        <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
            <div className="flex justify-between mb-4 items-start w-full h-full">
                <div className="font-medium">Ordenes</div>
                <div className="add">
                        <button
                        className="middle none center mr-4 rounded-lg bg-green-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                        onClick={handleCreateOrder}
                        >
                            Crear
                        </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[460px]">
                    <thead>
                        <tr>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">Cliente</th>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-center">Productos</th>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-center">Monto</th>
                        <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md text-center">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        Object.values(props.orders).map(order =>  {
                            return <ElementTable overlay={overlay} setOverlay={setOverlay} closehandleOrder={closehandleOrder} handleOrderSelected={handleOrderSelected} order={order}/>
                        })
                    }      
                    </tbody>
                </table>
            </div>
        </div>
        <div className={isActivePopupOrder ? 'block' : 'hidden'}>
            <OrderPopupEdit order={orderSelected} isActivePopupOrder={isActivePopupOrder}/>
        </div>
        <div className={isActivePopupOrderCreate ? 'block' : 'hidden'}>
            <OrderPopupCreate isActivePopupOrderCreate={isActivePopupOrderCreate}/>
        </div>
        <div 
            className={overlay ? 'overlay' : 'overlay hidden'}
            onClick={closeAllPopups}
        ></div>
        </>
    )
}

export default OrdersTable