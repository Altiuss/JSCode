import React from "react";
import Button from "../Button";
import Nav from "../Nav";
import logo from "./media/logo.png";
import s from "./index.module.css";
import { BsGlobe2 } from "react-icons/bs";

export default function Header() {
  const sales = `Sales: 
  +1 (800) 315-593;`;

  return (
    <header className={s.main_header}>
      <div>
        <Nav />
        <img src={logo} alt="logo" />
        <div className={s.info_block}>
          <p>Sales:<br/>+1 (800) 315-5939</p>
          <BsGlobe2 className={s.glob_icon} />
          <p>Search</p>
        
          <p>Log In</p>
        </div>

        <Button>Sign up</Button>
      </div>
    </header>
  );
}
