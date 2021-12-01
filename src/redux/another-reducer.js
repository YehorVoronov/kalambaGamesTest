import OneArticle from "../OneArticle/OneArticle";
import Body from "../Body/Body";
import Profile from "../Body/Profile/Profile";


let initialState={
   /* allInform:[
        {id:1,articleTitle:"articleTitle",articleBody:"articleBody", author:"author",
           description:"description",favorite:3,authorAbout:"authorAbout",publishDate:"publishDate"},
        {id:2,articleTitle:"articleTitle2",articleBody:"articleBody2", author:"author",
            description:"description",favorite:3,authorAbout:"authorAbout",publishDate:"publishDate"},
        {id:3,articleTitle:"articleTitle3",articleBody:"articleBody3", author:"author",
            description:"description",favorite:3,authorAbout:"authorAbout",publishDate:"publishDate"},
        {id:4,articleTitle:"articleTitle4",articleBody:"articleBody4", author:"author",
            description:"description",favorite:3,authorAbout:"authorAbout",publishDate:"publishDate"}
        ],*/
    authorInform:[
        {id:1,imgUrl:"https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?w=256&h=212&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            ,articles:["article1","article2 "], author:"author"
            ,subscribers:4,authorAbout:"authorAbout"},
        {id:2,imgUrl:"https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?w=256&h=212&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            ,articles:["article1","article2 "], author:"author2"
            ,subscribers:4,authorAbout:"authorAbout"},
        {id:3,imgUrl:"https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?w=256&h=212&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            ,articles:["article1","article2 "], author:"author3"
            ,subscribers:4,authorAbout:"authorAbout"},
        {id:4,imgUrl:"https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?w=256&h=212&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            ,articles:["article1","article2 "], author:"author4"
            ,subscribers:4,authorAbout:"authorAbout"}
    ],
    articleInform:[
        {id:1,articleTitle:"articleTitle",articleBody:"articleBody",
            author:"author",description:"description",favorite:3,publishDate:"publishDate"},
        {id:2,articleTitle:"articleTitle2",articleBody:"articleBody2",
            author:"author2",favorite:3,publishDate:"publishDate2"},
        {id:3,articleTitle:"articleTitle3",articleBody:"articleBody3",
            author:"author3",favorite:3,publishDate:"publishDate3"},
        {id:4,articleTitle:"articleTitle4",articleBody:"articleBody4",
            author:"author4",favorite:3,publishDate:"publishDate4"},
        {id:5,articleTitle:"articleTitle6",articleBody:"articleBody6",
            author:"author2",favorite:2,publishDate:"publishDate6"},
        {id:6,articleTitle:"articleTitle6",articleBody:"articleBody6",
            author:"author2",favorite:2,publishDate:"publishDate6"}
    ],
    isAuthorization:false,
    logIn:[{Email:"alice@example.com",Password:"I_<3-R0ber7"},
        {Email:"bob@example.com",Password:"4L1ce-I5 mY_li3f"},
    ]
}

export const anotherReducer=(state=initialState,action)=>{
    switch (action.type){
        case "LOGIN_AC":{
            return{
                ...state,
                isAuthorization: true
            }
        }
        case "LOG_OUT_AC":{
            return{
                ...state,
                isAuthorization: false
            }
        }
        /*case  "FAVORITE_ADD_AC":{
            if (action.id===state.articleInform.map(el=>el.id)){
                return {
                    ...state,
                }
            }else {
            return {


            }}
        }*/
        default:
            return state;
    }
}

export const loginAC=()=>{
    return({
        type:"LOGIN_AC",
    })
}
export const logOutAC=()=>{
    return({
        type:"LOG_OUT_AC",
    })
}
/*
export const favoriteAddAC=(id)=>{
    return({
        id:id,
        type:"FAVORITE_ADD_AC",
    })
}
*/

export default anotherReducer;