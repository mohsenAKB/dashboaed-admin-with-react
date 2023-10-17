import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Users
              </li>
            </Link>

            <Link to="/newusers" className="link">
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                New User
              </li>
            </Link>
            <Link to="products" className="link">
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon" />
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Transaction
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
