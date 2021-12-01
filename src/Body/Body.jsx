import style from "./Body.module.css"
import Home from "./Home/Home";
import Profile from "./Profile/Profile";

let Body=(props)=>{
    let HomeMap=props.articleInform.map(el=><Home id={el.id} title={el.articleTitle} description={el.articleBody} publishDate={el.publishDate}
                                                  author={el.author} favorite={el.favorite}/>)
return(

            <div>
                <div className={style.bodyHeader}>
                    {/*<h1>conduit</h1>*/}
                    <div className={style.hight}>conduit</div>
                    A place to share your knowledge
                </div>
               {/* <Article title="title" description="description" body="description" publishDate="publishDate"
                         author="author" favorite="3" subscribe="subscribe"/>*/}
                {HomeMap}
            </div>

)
}
export default Body
