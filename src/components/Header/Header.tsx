import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import bank from "../../assets/icons/bank.svg";
import { Time } from "../Time/Time";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <header className="stocks__header">
        <NavLink to="/">
          <div className="stocks__header-logo">
            <img className="stocks__header-img" src={bank} alt="bank" />
            <span>Home</span>
          </div>
        </NavLink>
        <Time />
      </header>
      <Outlet />
    </>
  );
};
