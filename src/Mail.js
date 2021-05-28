import React from 'react'
import './Mail.css'
import { Button, IconButton } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {db} from './firebase'
import { selectOpenMail } from './features/mailSlice'
import { useSelector } from "react-redux"






function Mail({ title, subject, description, time, id }) {
    const history = useHistory()
    const selectedmail = useSelector(selectOpenMail)

    return (
        <div className="mail">
            <div className="mail_tools">
            <div className="mail_toolsLeft">
                <IconButton onClick ={() => history.push("/")}>
                    <ArrowBackIcon />
                </IconButton>
                <IconButton>
                    <MoveToInboxIcon />
                </IconButton>
                <IconButton>
                    <ErrorIcon />
                </IconButton>
                <IconButton>
                    <EmailIcon />
                </IconButton>
                <IconButton>
                    <WatchLaterIcon />
                </IconButton>
                <IconButton>
                    <CheckCircleIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>
            <div className="mail_toolsRight">
                <IconButton>
                    <ErrorIcon />
                </IconButton>
                <IconButton>
                    <ErrorIcon />
                </IconButton>
                <IconButton>
                    <ErrorIcon />
                </IconButton>
                
            </div>
            </div>
            <div className = "mail_body">
                <div className = "mail_bodyHeader">
                    <h2>{selectedmail?.subject}</h2>
                    <LabelImportantIcon className = "mail_important" />
                    <p> {selectedmail?.title} </p>
                    <p className = "mail_time"> {selectedmail?.time}</p>
                </div>
                <div className = "mail_bodyMessage">
                    <p>{selectedmail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
