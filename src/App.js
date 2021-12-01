
import './App.css';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Profile from "./Body/Profile/Profile";
import {Route, Routes} from "react-router";
import SingIn from "./Sing/SingIn";
import SingUp from "./Sing/SingUp";
import OneArticle from "./OneArticle/OneArticle";

function App(props) {
    let state=props.anotherPage;
    let articleInform=state.articleInform
    let authorInform=state.authorInform

    if (!state.isAuthorization){
        return (
            <div className="App">
                <header className="App-header">
                    <Header isAuthorization={state.isAuthorization} logOutAC={props.logOutAC}/>
                    <Routes>
                        {articleInform.map(el=><Route path={"/"+el.articleTitle} element={<OneArticle articleTitle={el.articleTitle}
                                                                                                      favorite={el.favorite}
                                                                                                      articleBody={el.articleBody}
                                                                                                      publishDate={el.publishDate}
                                                                                                      author={el.author}/>}/>)}
                        <Route path="*" element={<SingIn logIn={state.logIn} isAuthorization={state.isAuthorization} loginAC={props.loginAC}/>}/>
                    </Routes>
                    <Footer/>
                </header>
            </div>
        )
    }else  {
        return (
    <div className="App">
      <header className="App-header">
        <Header isAuthorization={state.isAuthorization} logOutAC={props.logOutAC}/>
          <Routes>
              {articleInform.map(el=><Route path={"/"+el.articleTitle} element={<OneArticle articleTitle={el.articleTitle}
                                                                                    articleBody={el.articleBody}
                                                                                    publishDate={el.publishDate}
                                                                                    author={el.author}/>}/>)}
              <Route path="/register" element={<SingUp/>}/>
              <Route path="/login" element={<SingIn logIn={state.logIn} isAuthorization={state.isAuthorization} loginAC={props.loginAC}/>}/>
             <Route path="/" element={<Body  articleInform={articleInform}/>}/>
              {authorInform.map(el=><Route path={"/"+el.author} element={<Profile articleInform={articleInform} authorAbout={el.authorAbout} title="article"
                                                                               articles={el.articles}
                                                                               description="description"
                                                                               imgUrl={el.imgUrl}
                                                                               publishDate="publishDate"
                                                                               author={el.author} favorite={el.subscribers} />}/>)}
          </Routes>
        <Footer/>
      </header>
    </div>
  );
}
}
export default App;
