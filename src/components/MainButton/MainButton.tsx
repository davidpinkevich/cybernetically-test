import { NavLink } from "react-router-dom";
import schedule from "../../assets/icons/schedule.svg";
import "./MainButton.scss";

export const MainButton = () => {
  return (
    <div className="main__button">
      <NavLink className="main__button-link-wrapper" to="quotes">
        <button className="main__button-link">
          Get information about all trading stocks
        </button>
        <img className="main__button-schedule" src={schedule} alt="schedule" />
      </NavLink>
    </div>
  );
};
