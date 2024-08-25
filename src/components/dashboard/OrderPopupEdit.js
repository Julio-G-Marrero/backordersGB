import React from "react";
import ElementProduct from "./element_product";

function OrderPopup(props) {
    const [nombreCliente, setNombreCliente] = React.useState(props.order.cliente.nombre)
    const [nombreVendedor, setNombreVendedor] = React.useState(props.order.nombre_vendedor)
    const [fechaPromesa, setFechaPromesa] = React.useState(props.order.fecha_promesa)
    React.useEffect(() => {
        setNombreCliente(props.order.cliente.nombre)
        setFechaPromesa(props.order.fecha_promesa)
        setNombreVendedor(props.order.nombre_vendedor)
    },[props.isActivePopupOrder]);
    function handleChange(e) {
        if(e.target.id == "nombre-cliente") {
            setNombreCliente(e.target.value)
        }else if(e.target.id == "date") {
            setFechaPromesa(e.target.value)
        }else if(e.target.id == "nombre-vendedor") {
            setNombreVendedor(e.target.value)
        }
    }
    return(
        <>
            <div className="absolute popup top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg m-20">
                <div className="fechas grid grid-cols-2 gap-4 items-center">
                    <h1 className="text-2xl font-semibold text-gray-500 mt-8 mb-6">Orden #{props.order.id}</h1>
                    <div className="estatus-venta">
                    <span class="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none uppercase ">surtido</span>
                    </div>
                </div>  
                <form className="text-left">
                    <div className="mb-4">
                        <label for="nombre-cliente" className="block  mb-2 text-sm text-gray-600">Nombre Cliente</label>
                        <input type="text" id="nombre-cliente" value={nombreCliente} onChange={handleChange}  name="nombre-cliente" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                    </div>
                    <div className="fechas grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label for="nombre-vendedor" className="block  mb-2 text-sm text-gray-600">Nombre Vendedor</label>
                            <input type="text" id="nombre-vendedor" value={nombreVendedor} onChange={handleChange}  name="nombre-vendedor" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                        </div>
                        <div className="mb-4">
                            <label for="numero-tkt" className="block  mb-2 text-sm text-gray-600">Numero Ticket</label>
                            <input type="text" id="numero-tkt" name="numero-tkt" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 hidden"/>
                        </div>
                    </div>
                    <div className="fechas grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label for="date" className="block mb-2 text-sm text-gray-600">Fecha Promesa</label>
                            <input type="date" value={fechaPromesa} onChange={handleChange} id="date" name="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                        </div>
                        <div className="mb-4">
                            <label for="date" className="block mb-2 text-sm text-gray-600">Fecha Entrega</label>
                            <input type="date" id="date" name="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 hidden"/>
                        </div>
                    </div>
                    <div className="product-list">
                        <div class="overflow-x-auto">
                            <table class="min-w-full bg-white shadow-md rounded-xl">
                            <thead>
                                <tr class="bg-blue-gray-100 text-gray-600">
                                <th class="py-3 px-4 text-left text-sm text-gray-600">Producto</th>
                                <th class="py-3 px-4 text-left text-sm text-gray-600">Precio</th>
                                <th class="py-3 px-4 text-left text-sm text-gray-600">Cantidad</th>
                                <th class="py-3 px-4 text-left text-sm text-gray-600">Total</th>
                                </tr>
                            </thead>
                            <tbody class="text-blue-gray-900">
                            {
                                Object.values(props.order.productos).map(producto =>  {
                                    return <ElementProduct producto={producto}/>
                                })
                            }  
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                        <label for="nombre" className="block text-sm text-gray-600">Monto Total</label>
                        {<h2>{props.order.precio_pactado}</h2>}
                    </div>
                    <button type="submit" className="w-32 background-globalcar text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">Registro</button>
                </form>
                </div>
            </div>
        </>
    )

}

export default OrderPopup;