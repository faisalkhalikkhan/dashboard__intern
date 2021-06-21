import React from 'react'
import './Applicant.css'

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

const Applicant = () => {
    return (
        <div className="applicant">
            <div className="applicant__left">
                <AccountCircleOutlinedIcon />
                <div className="name__applicant">
                    <Typography variant="subtitle1">Rosie Metts</Typography>
                    <p>Applicant for <span className="special__text">IOS developer</span></p>
                </div>
            </div>
            <div className="applicant__right">
                <IconButton>
                    <EmailIcon />
                </IconButton>
                <IconButton>
                    <CallIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Applicant
