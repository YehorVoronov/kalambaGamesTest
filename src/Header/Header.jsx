import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

let Header=(props)=>{
    return(
        <div className={style.header}>
            <div className={style.mainTitle}><NavLink to="/">Conduit</NavLink></div>
            <div className={style.refs}>
                <NavLink to="/">Home </NavLink>
                {props.isAuthorization?<NavLink to="/" onClick={()=>props.logOutAC()}>Log Out</NavLink>:<NavLink to="/login">Sing In</NavLink>}

                <NavLink to="/register">Sing up</NavLink>
            </div>
        </div>
    )
}
export default Header
