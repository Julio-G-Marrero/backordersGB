import React from "react";

function OrderPopupCreate() {
    const initialProductos = [
        {
            "nombre": "Abrazadera F 120x300 mm",
            "precio": "359.83",
            "cantidad":"5"
        },
        {
            "nombre": "Aspirador de iones de litio",
            "precio": "1,696.50",
            "cantidad":"7"
        },
        {
            "nombre": "Alicate de boca recta 10",
            "precio": "138.97",
            "cantidad":"3"
        }
    ]
    const [productosPedido, setProductosPedidos] = React.useState()
    return(
        <>
            <div className="popup absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg m-20">
                <h1 className="items-center text-2xl font-semibold text-gray-500 mt-1 mb-2">Crear Orden</h1>
                <form className="text-left">
                    <div className="mb-4">
                        <label for="nombre-cliente" className="block  mb-2 text-sm text-gray-600">Nombre Cliente</label>
                        <input type="text" id="nombre-cliente" name="nombre-cliente" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                    </div>
                    <div className="clienteInfo grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label for="numeroTel" className="block mb-2 text-sm text-gray-600">Tel Cliente</label>
                            <input type="text" id="numeroTel" name="numeroTel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                        </div>
                        <div className="mb-4">
                            <label for="emialCliente" className="block mb-2 text-sm text-gray-600">Email Cliente</label>
                            <input type="email" id="emialCliente" name="emialCliente" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 "/>
                        </div>
                    </div>
                    <div className="fechas grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label for="date" className="block mb-2 text-sm text-gray-600">Fecha Promesa</label>
                            <input type="date" id="date" name="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
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
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                        <label for="nombre" className="block text-sm text-gray-600">Monto Total</label>
                        {<h2></h2>}
                    </div>
                    <div className="mb-4">
                        <label for="nombre-cliente" className="block  mb-2 text-sm text-gray-600">Comentarios</label>
                        <textarea type="text" id="nombre-cliente" name="nombre-cliente" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                    </div>
                    <button type="submit" className="w-32 background-globalcar text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">Registro</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default OrderPopupCreate