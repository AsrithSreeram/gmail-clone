import React from 'react'
import './SendMail.css'
import CloseIcon from "@material-ui/icons/Close"
import { Button, IconButton } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { closeSendMessage } from "./features/mailSlice"
import {db} from './firebase'
import firebase from 'firebase'




function SendMail() {
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, errors } = useForm()

    const onSubmit = (formData) => {
        console.log(formData)
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        dispatch(closeSendMessage())
    
    }
    return (
        <div className = "sendMail">
            <div className = "sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" onClick = {() => dispatch(closeSendMessage())}/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name = "to" type = "email" placeholder = "To" {...register('to', { required: true })}/>
                <input name = "subject" type = "text" placeholder = "Subject" {...register('subject', { required: true })}/>
                <input name = "message" type = "text" className = "sendMail_message" {...register('message', { required: true })}/>
                <div className="sendMail_options">
                    <Button className = "sendMail_send" variant = "contained" color = "primary" type = "submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
