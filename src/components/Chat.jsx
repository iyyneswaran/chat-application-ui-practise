import React from "react";
import "./Chat.css"

export default function Chat() {
    return (
        <div className="one_to_one_chat">
            <div className="chat_list_section">
                <h1>All Chats</h1>

                    <div className="user_display">
                        <img src="" alt="" className="dp_img"/>
                        <div className="chat_list_text_area">
                            <h4>Diya</h4>
                            <p>Hi what are you doing bro? </p>
                        </div>
                    </div>

            </div>
            <div className="person_detailed_chat">

            </div>
            <div className="contact-info">

            </div>
        </div>
    );
};