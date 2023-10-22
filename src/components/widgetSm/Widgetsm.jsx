import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {newMember} from "../../datas";
import "./Widgetsm.css";
const Widgetsm = () => {
  return (
    <section className="widgetSm">
      <span className="WidgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMember.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            <img src={user.img} alt="" className="WidgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmicon" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Widgetsm;
