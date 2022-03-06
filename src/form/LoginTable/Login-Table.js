import './login-table.sass';
import Popup from '../../popup/popup';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function LoginTable() {
    const [popup, setPopup] = useState(false);
    const [localLoginMessage, setLocalLoginMessage] = useState(false);
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("email");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [pass, setPass] = useState(() => {
        const saved = localStorage.getItem("password");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    async function loginRequest () {
        const res = await fetch("/api/users", {method: "POST", body: JSON.stringify({user, pass})});
        const status = await res.json();
        return status.status;
    }

    useEffect(() => {
        const checkLocalMemory = async () => {
            if(await loginRequest()){
                setPopup(true);
                setLocalLoginMessage(true);
            }
        }
        checkLocalMemory();
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(await loginRequest()){
            setPopup(true);
        }
        localStorage.setItem("email", JSON.stringify(user));
        localStorage.setItem("password", JSON.stringify(pass));
    }

    return (
        <div>
            <form className="container" onSubmit={handleSubmit} >
                <div className="input-container">
                    <input className="input" type="email" value={user} placeholder='Email' required onChange={e => setUser(e.target.value)}></input>
                    <div className="icon-container">
                        <FontAwesomeIcon className="icon" icon={faUser} />
                    </div>
                </div>
                <div className="input-container">
                    <input className="input" type="password" value={pass} placeholder='Password' required onChange={e => setPass(e.target.value)}></input>
                    <div className="icon-container">
                        <FontAwesomeIcon className="icon" icon={faLock} />
                    </div>
                </div>
                <div className="button-container">
                    <button className="button">Sign In</button>
                </div>
            </form>
            <div className="shadow">
                <div className="shadow mirror"></div>
            </div>
            <Popup trigger={popup} setTrigger={setPopup} setLocalMessage={setLocalLoginMessage}>
                <div>You are logged in!</div>
                {(localLoginMessage) && 
                <div style={{marginTop: "5px"}}>Welcome back!</div>}
            </Popup>
        </div>
      
    );
  }
  
  export default LoginTable;