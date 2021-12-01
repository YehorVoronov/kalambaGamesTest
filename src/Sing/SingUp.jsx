import {NavLink} from "react-router-dom";
import style from "./Sing.module.css"

let SingIn=()=>{
    return(
        <div className={style.allForm}>
            <div className={style.singText}>Sign up</div>
            <NavLink className={style.nav} to="/login">Have an account?</NavLink>

            <div>
                <div>
                    <input placeholder={"Username"}/>
                </div>
                <div>
                    <input  placeholder={"Email"}/>
                </div>
                <div>
                    <input placeholder={"Password"}/>
                </div>
                <div>
                    <button>Sing up</button>
                </div>
            </div>
        </div>
    )
}
export default SingIn