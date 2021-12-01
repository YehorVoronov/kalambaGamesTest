import style from "./OneArticle.css"

let OneArticle=(props)=>{
    return(
        <div>
            <div>{props.articleTitle}</div>
            <div>{props.articleBody}</div>
            <div>{props.publishDate}</div>
            <div>{props.author}</div>

            <div>{props.favorite}</div>
{/*
            <button onClick={()=>props.favorite+1}>Button to favorite article (with favorites count)</button>
            <button>Button to follow author (with followers count)</button>*/}
        </div>
    )
}
export default OneArticle