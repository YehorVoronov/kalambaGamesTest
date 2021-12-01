import style from "./Profile.module.css"
import Home from "../Home/Home";
import img from "./../../img/2487482.jpg"

let Profile=(props)=>{
    // articleInform
    return(
        <div>
            <div className={style.bodyHeader}>
                {props.imgUrl?<img src={props.imgUrl}/>:<img src={img}/>}

                <div className={style.hight}>{props.author}</div>
            </div>
            <div>
                {props.authorAbout}
            </div>
            <div>
                {props.articles}
            </div>
            <div>
                {props.articleInform.map(el=>{if (el.author===props.author){
                   return <Home authorAbout={props.authorAbout} title={props.title} description={props.description} publishDate={props.publishDate}
                          author={props.author} favorite={props.favorite}/>
                }})}
               {/* <Home authorAbout={props.authorAbout} title={props.title} description={props.description} publishDate={props.publishDate}
                      author={props.author} favorite={props.favorite}/>
                <Home authorAbout={props.authorAbout} title={props.title} description={props.description} publishDate={props.publishDate}
                      author={props.author} favorite={props.favorite}/>
                <Home authorAbout={props.authorAbout} title={props.title} description={props.description} publishDate={props.publishDate}
                      author={props.author} favorite={props.favorite}/>*/}

            </div>
        </div>
    )
}

export default Profile