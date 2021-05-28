import React from 'react'
import './Sidebar.css'
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import SidebarOption from './SidebarOption'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import { useDispatch } from "react-redux"
import { openSendMessage } from "./features/mailSlice"





function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className = "sidebar">
            <Button startIcon = {<AddIcon fontSize="large" />} className = "sidebar_compose" onClick = {() => dispatch(openSendMessage())}>Compose</Button>
            <SidebarOption Icon={InboxIcon} title = "Inbox" number = {44} />
            <SidebarOption Icon={InboxIcon} title = "Starred" number = {44} />
            <SidebarOption Icon={InboxIcon} title = "Snooze" number = {44} />
            <SidebarOption Icon={InboxIcon} title = "Sent" number = {44} />
            <SidebarOption Icon={InboxIcon} title = "Drafts" number = {44} />
            <SidebarOption Icon={InboxIcon} title = "Junk" number = {44} />
            <SidebarOption Icon={InboxIcon} title = "More" number = {44} />
        
        <div className = "sidebar_footer">
        <div className = "sidebar_footerIcons">
            <IconButton>
                <PersonIcon />
            </IconButton>
            <IconButton>
                <DuoIcon />
            </IconButton>
            <IconButton>
                <PhoneIcon />
            </IconButton>
            
            </div>
        </div>
        </div>
    )
}

export default Sidebar
