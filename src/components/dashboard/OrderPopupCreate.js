import React from "react";
import ElementProduct from "./element_product";

function OrderPopupCreate() {
    const initialProductos = [
        {
            "nombre": "Abrazadera F 120x300 mm",
            "precio": "359.83",
            "cantidad":"5"
        }
    ]
    const [productosPedido, setProductosPedidos] = React.useState(initialProductos)
    const [nombreProducto, setNombreProducto] = React.useState()
    const [precioProducto, setPrecioProducto] = React.useState()
    const [cantidadProducto, setCantidadProducto] = React.useState()
  

    function handleAddProduct(e) {
        e.preventDefault()
        if(nombreProducto !== "" && precioProducto !== "" && cantidadProducto !== "") {
            setProductosPedidos([{
                "nombre": nombreProducto,
                "precio": precioProducto,
                "cantidad":cantidadProducto
                }, ...productosPedido]);
        }else{
            alert('Hace falta un campo')
        }
    }
    function handleOnChange(e) {
        if(e.target.id === "nombreProducto") {
            setNombreProducto(e.target.value)
        }else if(e.target.id === "precioProducto"){
            setPrecioProducto(e.target.value)
        }else if(e.target.id === "cantidadProducto"){
            setCantidadProducto(e.target.value)
        }
    }
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
                        <div className="overflow-y-scroll h-52">
          
                            <table className="min-w-full bg-white shadow-md rounded-xl">
                            <thead>
                                <tr className="bg-blue-gray-100 text-gray-600">
                                <th className="py-3 px-4 text-left text-sm text-gray-600">Producto</th>
                                <th className="py-3 px-4 text-left text-sm text-gray-600">Precio</th>
                                <th className="py-3 px-4 text-left text-sm text-gray-600">Cantidad</th>
                                <th className="py-3 px-4 text-left text-sm text-gray-600">Total</th>
                                </tr>
                            </thead>
                            <tbody className="text-blue-gray-900">
                            {
                                Object.values(productosPedido).map(producto =>  {
                                    return <ElementProduct producto={producto}/>
                                })
                            }  
                            </tbody>
                            </table>
                        </div>
                            <tr className="border-b border-blue-gray-200" id="new-product">
                                <td>
                                    <input value={nombreProducto} onChange={handleOnChange} type="text" id="nombreProducto" name="nombreProducto" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"/>
                                </td>
                                <td>
                                    <input value={precioProducto} onChange={handleOnChange} type="email" id="precioProducto" name="precioProducto" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 "/>
                                </td>
                                <td>
                                    <input type="number" alue={cantidadProducto} onChange={handleOnChange} id="cantidadProducto" name="cantidadProducto" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 "/>
                                </td>
                                <td className="py-3 px-4">
                                    Total
                                </td>
                            </tr>
                    </div>
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <div className="add">
                            <button
                            className="middle none center mr-4 rounded-lg bg-green-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                            onClickCapture={handleAddProduct}
                            >
                                Agregar
                            </button>
                        </div>
                        <div>
                            <label for="nombre" className="block text-sm text-gray-600">Monto Total</label>
                            {<h2>212ssda2</h2>}
                        </div>
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