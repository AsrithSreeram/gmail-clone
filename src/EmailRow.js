import { StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './EmailRow.css'
import { Checkbox, IconButton } from "@material-ui/core"
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import { useHistory } from "react-router-dom"
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';
import { useDispatch } from "react-redux"
import { selectMail } from './features/mailSlice'
import { db } from './firebase'





function EmailRow({ title, subject, description, time, id }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const openMail = () => {
        dispatch(selectMail({
            title, subject, description, time, id 
        }))

    history.push("/mail")
    }
    return (
        <div onClick = {openMail} className = "emailRow">
            <div className = "emailRow_options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            
            </div>

            <div className = "emailRow_title">
                <h3>{title}</h3>
            </div>
            <div className = "emailRow_message">
            <h4>{subject}  <span className="emailRow_description">{"-"} {description}</span></h4>
            </div>
            <div id = "emailRow_optionsHover">
                <IconButton>
                <ArchiveIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon onClick = {event => db.collection('emails').doc(id).delete()}/>
                </IconButton>
            
            </div>
            <p className = "emailRow_time">
            {time}
            </p>
            
        </div>
    )
}

export default EmailRow
