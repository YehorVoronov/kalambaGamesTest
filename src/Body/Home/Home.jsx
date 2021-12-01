import style from "./Home.module.css"
import {NavLink} from "react-router-dom";

let Home =(props)=>{

    return(
        <div>
            <div className={style.titleHeader}>
            <div>
                <div>
                    <NavLink to={"/"+props.author}>{props.author}</NavLink>
                </div>
                <div>
                   Date:  {props.publishDate}
                </div>
            </div>
            <div>
              favorite:  {props.favorite}
            </div>
        </div>
            <div className={style.inform}>
                <div className={style.title}>

                    <NavLink to={"/"+props.title}>{props.title}</NavLink>
                </div>
                <div>
                    {props.description}
                </div>
            </div>
            <hr/>

        </div>
    )
}

export default Home;