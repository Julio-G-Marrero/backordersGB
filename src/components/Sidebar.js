import React from "react";
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return(
    <div>
        <nav class="flex flex-col background-globalcar w-64 h-screen px-4 tex-gray-900 border border-blue-900">
          <div class="flex flex-wrap mt-8">
            <div class="w-1/2">
              <img
                src={logo}
                class="mx-auto w-20 h-20 rounded-full"
              />
            </div>
            <div class="w-1/2 mt-7">
              <span class="font-semibold text-white">Back Orders</span>
            </div>
          </div>
          <div class="mt-10 mb-4">
            <ul class="ml-4">
              <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300 hover:cursor-pointer hover:font-bold rounded rounded-lg">
                <span>
                  <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
                    <path
                      d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                          4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                          4h4v-4h-4M4 8h4V4H4v4z"
                    ></path>
                  </svg>
                </span>
                <div>
                  <NavLink to="/dashboard" className="ml-2">Dashboard</NavLink>
                </div>
              </li>
              <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300 hover:cursor-pointer hover:font-bold rounded rounded-lg">
                <span>
                  <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
                    <path
                      d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                          4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                          9v2h-4v-2h4m2-2h-8v6h8v-6z"
                    ></path>
                  </svg>
                </span>
                <a href="#">
                  <span class="ml-2">Ordenes</span>
                </a>
              </li>
              <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300 hover:cursor-pointer hover:font-bold rounded rounded-lg">
                <span>
                  <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                          014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                          8-4z"
                    ></path>
                  </svg>
                </span>
                <a href="#">
                  <span class="ml-2">Notificaciones</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
    )
}

export default Sidebar;