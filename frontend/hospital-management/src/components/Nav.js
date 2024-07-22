import React from "react";
import { logout } from "../firebase";
import logo from "../assets/png/medlist.png";

import { FaPowerOff } from "react-icons/fa";

function Nav(props) {
  return (
    <div>
      <div className="bg-rose-500 text-white ">
        <ul className="list-none flex justify-around">
          <div className="w-1/3">
            <li>
              <button onClick={() => props.navigatePage(0)} className="px-10">
                <img className="h-24" src={logo} />
              </button>
            </li>
          </div>
          <div className="w-1/3 flex justify-around my-auto">
            <li>
              <button
                onClick={() => props.navigatePage(3)}
                className="mx-2 px-10 py-2 rounded-full bg-rose-400 text-slate-900 hover:bg-slate-900 hover:text-rose-500 transition duration-150 ease-in-out"
              >
                {" "}
                Appointments
              </button>
            </li>
            <li>
              <button
                onClick={() => props.navigatePage(2)}
                className="mx-2 px-10 py-2 rounded-full bg-rose-400 text-slate-900 hover:bg-slate-900 hover:text-rose-500 transition duration-150 ease-in-out"
              >
                {" "}
                Patients
              </button>
            </li>
            <li>
              <button
                onClick={() => props.navigatePage(1)}
                className="mx-2 px-10 py-2 rounded-full bg-rose-400 text-slate-900 hover:bg-slate-900 hover:text-rose-500 transition duration-150 ease-in-out"
              >
                {" "}
                Employee
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  logout();
                  props.navigatePage(-2);
                }}
                className="mx-2 px-10 py-2 rounded-full bg-rose-400 text-slate-900 hover:bg-slate-900 hover:text-rose-500 flex justify-center items-center transition duration-150 ease-in-out"
              >
                <p>Logout</p>
                <FaPowerOff className="ml-2" />
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
