import './App.css';
import logo from './images/logo.png';
import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Ordenes from './components/Ordenes'
import { OrdersContext } from './contexts/OrdersContext';


function App() {
  const dataApi = [
    {
      "id": '2198246',
      "id_vendedor": '5',
      "nombre_vendedor": 'Benja',
      "fecha_apertura": '2024-04-01',
      "numero_tkt": '1845',
      "productos": [
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
      ],
      "cliente": {
        "contact": {
            "email": "parraferretera@hotmail.com",
            "tel": "+528123877776"
        },
        "ubicacion": "Saltillo COA, México",
        "nombre": "Cristóbal Parra Valero"
      },
      "cantidad_productos": '15',
      "id_estatus": '15',
      "estatus_venta": 'surtido',
      "fecha_promesa": '2024-05-01',
      "precio_pactado": "2.286,41",
      "comentarios": "ninguno",
      "id_ordenCompra": "ninguno",
      "cantidad_entregada": "15",
      "fecha_entregado": "2024-05-05",
    },
    {
      "id": '178546',
      "id_vendedor": '6',
      "nombre_vendedor": 'Carlos',
      "fecha_apertura": '2024-06-04',
      "numero_tkt": '6552',
      "productos": [
        {
          "nombre": "Batería de Ion de Litio 20V 4.0 Ah",
          "precio": "359.83",
          "cantidad":"4"
        },
        {
          "nombre": "Aspirador de iones de litio",
          "precio": "1,696.50",
          "cantidad":"5"
        },
        {
          "nombre": "Bomba de agua de gasolina",
          "precio": "138.97",
          "cantidad":"1"
        }
      ],
      "cliente": {
        "contact": {
            "email": "ferreteriaayala512@gmail.com",
            "tel": "+5281218477776"
        },
        "ubicacion": "Saltillo COA, México",
        "nombre": "Carlos Javier Ayala"
      },
      "cantidad_productos": '10',
      "id_estatus": '2',
      "estatus_venta": 'surtido',
      "fecha_promesa": '2024-05-25',
      "precio_pactado": "4,005.14",
      "comentarios": "ninguno",
      "id_ordenCompra": "queda uno pendiente",
      "cantidad_entregada": "10",
      "fecha_entregado": "2024-07-10",
    }
  ]
  const [orders, setOrders] = React.useState();

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Login/>
        </Route>  
        <OrdersContext.Provider value={orders}>
          <Route exact path="/dashboard">
            <div className="flex flex-row">
              <div className="basis-1/12">
                <Sidebar /> 
              </div>
              <div className="basis-10/12 mx-auto">
                <Dashboard orders={orders} setOrders={setOrders} />
              </div>
            </div>
          </Route>
          <Route exact path="/ordenes">
          <div className="flex flex-row">
              <div className="basis-1/12">
                <Sidebar /> 
              </div>
              <div className="basis-10/12 mx-auto">
                <Ordenes orders={orders} setOrders={setOrders}/>
              </div>
            </div>
          </Route> 
        </OrdersContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
