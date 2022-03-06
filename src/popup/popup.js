import React from "react";
import "./popup.sass";

function Popup(props) {
    return (props.trigger) && (
        <div className="popup">
            <div className="popup-inner">
                { props.children }
                <button className="close-btn" onClick={() => {props.setTrigger(false); props.setLocalMessage(false)}}>Close</button>
            </div>
        </div>
    )
}

export default Popup