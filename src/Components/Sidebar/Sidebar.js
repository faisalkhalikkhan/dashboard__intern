import React from "react";
import "./Sidebar.css";

import { Avatar } from "@material-ui/core";
import {
    Assessment,
    BusinessCenter,
    EventAvailable,
    ExitToApp,
    Folder,
    Home,
    Message,
    PeopleOutlineRounded,
    Settings,
} from "@material-ui/icons";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Avatar className="logo" src="Hero.png" alt="Logo" />
            <div className="active__btn">
                <Home />
            </div>
            <div className="sidebar__btn">
                <Assessment />
            </div>
            <div className="sidebar__btn">
                <BusinessCenter />
            </div>
            <div className="sidebar__btn">
                <Folder />
            </div>
            <div className="sidebar__btn">
                <EventAvailable />
            </div>
            <div className="sidebar__btn">
                <PeopleOutlineRounded />
            </div>
            <div className="sidebar__btn">
                <Message />
            </div>
            <div className="sidebar__btn">
                <ExitToApp />
            </div>
            <div className="settings__btn">
                <Settings />
            </div>
        </div>
    );
};

export default Sidebar;
