import App from "./App";
import {connect} from "react-redux";
import {loginAC, logOutAC} from "./redux/another-reducer";

let mapStateToProps=(state)=>{
    return{
        anotherPage:state.anotherPage,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
    loginAC:()=>{
        dispatch(loginAC())
    },
        logOutAC:()=>{
        dispatch(logOutAC())
        }
    }
}
const AppContainer=connect(mapStateToProps,mapDispatchToProps)(App)

export default AppContainer