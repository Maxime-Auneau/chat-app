import React from 'react';
import './Contact.css';

const avatar = "https://randomuser.me/api/portraits/women/71.jpg";
const name = "Christine Mckinney";
const online = true;

function Contact() {
    return (
        <div className="Contact">
            <img class="avatar" src={avatar} alt="img"/>
            <div className="status">
                <h4 class="name">{name}</h4>
                <span class={online ? "status-online" : "status-offline"}/>
                <p className="status-text">{online ? "online": "offline"}</p>
            </div>
        </div>
    )
}

export default Contact