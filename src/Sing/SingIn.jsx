import {NavLink} from "react-router-dom";
import style from "./Sing.module.css"
import React from "react";
import {reduxForm} from "redux-form";
import store from "../redux/redux-store";

let SingIn=(props)=>{
    let emailRef=React.createRef();
    let passwordRef=React.createRef();

    let btnOnClick=()=>{
        let a=emailRef.current.value;
        let b=passwordRef.current.value;
        if (a===props.logIn[0].Email&&b===props.logIn[0].Password||a===props.logIn[1].Email&&b===props.logIn[1].Password){
            props.loginAC();
        }else {
            alert("not correct Password or Email");
        }
    }
    return(
        <div className={style.allForm}>
            <div className={style.singText}>Sign in</div>
            <NavLink className={style.nav} to="/register">Need an account?</NavLink>
            <div>
                <input placeholder={"Email"} ref={emailRef}/>
            </div>
            <div>
                <input placeholder={"Password"} ref={passwordRef}/>
            </div>
            <div>
                <button onClick={btnOnClick}>Sing in</button>
            </div>
            {/*<SingInRedux/>*/}
            {/*<SingInReduxForm/>*/}

        </div>
    )
}
/*let myRef=React.createRef();
let Rf=myRef.current.value
let AlRef=()=>{
    alert(Rf);
}*/

/*const SingInRedux=()=>{
    return(<form>
            <div>
                <input placeholder={"Email"} />
            </div>
            <div>
                <input placeholder={"Password"}/>
            </div>
            <div>
                <button>Sing in</button>
            </div>
        </form>
)
}*/
/*const SingInReduxForm=reduxForm({
    form:'singIn'})(SingInRedux)*/
export default SingIn