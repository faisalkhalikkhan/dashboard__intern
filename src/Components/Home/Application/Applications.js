import React from 'react'
import './Applications.css'

import { Typography, IconButton } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Applicant from '../Applicant/Applicant';

const Applications = () => {
    return (
        <div className="applications">
            <p>Hello John Bayer</p>
            <p>You have 8 new Applications today</p>
            <img src="https://instazood.com/img/direct-massage/dm-man.svg" alt="logo" />
            <div className="list">
                <div className="list__top">
                    <Typography>New Applicants</Typography>
                    <ArrowForwardIosIcon style={{ color: "#fff;" }} />
                </div>
                <div >
                    <Applicant />
                    <Applicant />
                    <Applicant />
                    <Applicant />
                    <Applicant />
                </div>
            </div>
        </div>
    )
}

export default Applications
