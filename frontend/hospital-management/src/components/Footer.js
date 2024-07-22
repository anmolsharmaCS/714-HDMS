import React from "react";
import { logout } from "../firebase";
import logo from "../assets/png/medlist-rose.png";

import { FaPowerOff } from "react-icons/fa";

function Nav(props) {
  return (
    <div className="py-10 px-20 flex bg-slate-900 text-white flex-row">
      <div className="w-1/3 flex text-rose-500 flex-col justify-center text-left">
        <a
          role={"button"}
          className="py-2 hover:text-slate-200 transition duration-150 ease-in-out"
          onClick={() => props.navigatePage(0)}
        >
          <p>Home</p>
        </a>
        <a
          role={"button"}
          className="py-2 hover:text-slate-200 transition duration-150 ease-in-out"
          onClick={() => props.navigatePage(3)}
        >
          <p>Appointments Dashboard</p>
        </a>
        <a
          role={"button"}
          className="py-2 hover:text-slate-200 transition duration-150 ease-in-out"
          onClick={() => props.navigatePage(1)}
        >
          <p>Employee Management Dashboard</p>
        </a>
        <a
          role={"button"}
          className="py-2 hover:text-slate-200 transition duration-150 ease-in-out"
          onClick={() => props.navigatePage(2)}
        >
          <p>Patient Management Dashboard</p>
        </a>
        <a
          role={"button"}
          className="py-2 hover:text-slate-200 transition duration-150 ease-in-out"
          onClick={() => {
            logout();
            props.navigatePage(-2);
          }}
        >
          <p>Sign Out</p>
        </a>
      </div>
      <div className="flex flex-col w-1/3 flex justify-around">
        <img src={logo} className="fill-rose-500 w-56 mx-auto" />
        <h1 className="py-5 text-lg font-medium text-center text-rose-500">
          A division of CPS714 Health Network.
        </h1>

        <div className="py-5 flex flex-row justify-center">
          <a href="https://bitbucket.org/u1ahmed/frontend/src/master/">
            <img
              className="h-10 px-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bitbucket-blue-logomark-only.svg/1200px-Bitbucket-blue-logomark-only.svg.png"
              alt="bitbucket-img"
            ></img>
          </a>
          <a href="https://cps714-group7.atlassian.net/jira/software/projects/G7/boards/1/backlog">
            <img
              className="h-10 px-10"
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
              alt="jira-img"
            ></img>
          </a>
        </div>
      </div>
      <div className="w-1/3 flex text-rose-500 flex-col justify-center text-right">
        <h2 className="">Contact us for any questions,</h2>
        <h2 className="pb-10">concerns or issues.</h2>
        <p>
          <b>Email:</b> contact@G7HN.com
        </p>
        <p>
          <b>Phone:</b> 416-123-4567
        </p>
        <p>
          <b>Address:</b> 128 Vickie Ave, Ohio
        </p>
      </div>
    </div>
  );
}
export default Nav;
