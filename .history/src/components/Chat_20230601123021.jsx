import { Component } from 'react'
import appLogo from '../media/app-logo.png'

const Chat = ({children}) => {

    return (

        <div className="chat-wrapper">

            <img src={appLogo} alt="app-logo" />

            {children}

            


        </div>
    )
}


export default Chat