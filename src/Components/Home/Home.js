import React from 'react'
import './Home.css'

import CircularProgressWithLabel from './CircularProgressbarwithlable/CircularProgressWithLabel'
import Applications from './Application/Applications'

import { Notifications, ExpandMore, Add, Search, MoreHoriz, CallMade, CallReceived } from '@material-ui/icons'
import { Avatar, IconButton, Button } from '@material-ui/core'

const Home = () => {
    return (
        <div className="home">
            <div className="home__info">
                <Notifications />
                <span>John Bayer</span>
                <Avatar src="Home.png" />
                <IconButton>
                    <ExpandMore style={{ color: "#fff;" }} />
                </IconButton>
            </div>
            <div className="dashboard__title">
                <p id="dashboard">Dashboard</p>
                Monday, <span className="special__text">02 july 2020</span>
            </div>
            <div className="input__add">
                <Button variant="contained" style={{ backgroundColor: "#00a5c2;", color: "#fff;" }}><Add /> Add</Button>
                <div className="inputBox">
                    <Search />
                    <input type="text" placeholder="Search for Application here" />
                </div>
            </div>
            <div className="homme">
                <div className="boxxx">
                    <div className="home__contant">
                        <div className="card">
                            <div className="card__top">
                                <p>Total Applications</p>
                                <MoreHoriz />
                            </div>
                            <div className="inner__card">
                                <div>
                                    <span className="text__amount">7956</span><br />
                                    <span className="micro__text"><CallMade style={{ height: "8px;" }} />+3.59%</span>
                                </div>
                                <div className="inner__card__progress">
                                    <CircularProgressWithLabel value="70" colour="primary" />
                                </div>
                            </div>
                        </div>
                        <div className="card blue">
                            <div className="card__top">
                                <p>Shortlisted Candidates</p>
                                <MoreHoriz />
                            </div>
                            <div className="inner__card">
                                <div>
                                    <span className="text__amount">4658</span><br />
                                    <span className="micro__text"><CallMade />+0.6%</span>
                                </div>
                                <div className="inner__card__progress">
                                    <CircularProgressWithLabel value="60" colour="primary" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__top">
                                <p>Total Applications</p>
                                <MoreHoriz />
                            </div>
                            <div className="inner__card">
                                <div>
                                    <span className="text__amount">7956</span><br />
                                    <span className="micro__text__red"><CallReceived style={{ height: "8px;" }} />-0.4%</span>
                                </div>
                                <div className="inner__card__progress">
                                    <CircularProgressWithLabel value="40" colour="secondary" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        
                    </div>

                </div>

                <div className="applicationsTab">
                    <Applications />
                </div>
            </div>

        </div>
    )
}

export default Home