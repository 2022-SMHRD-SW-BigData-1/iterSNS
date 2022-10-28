import "../styles/App.scss";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Mainimage from "./Mainimage";
import Profile from "./Profile";
import Post from "./Post";
import Save from "./Save";
import Mypage2 from "./Mypage2";
import MainCards from "./MainCards";
import Logincopy from "./Logincopy";
import Post_JE from "./Post_JE";
// import Mypage from "./Mypage";

function App() {
  return (
    // <Logincopy/>
    // <Post></Post>
    //<Save></Save>
    // <MainCards />
    <Post_JE />
    // <>
    // <Mypage2/>
    // </>
    // <div className="App">
    //   <Navigation />
    //   <main>
    //     <div className="container">
    //       <Cards />
    //       <Sidebar />
    //     </div>
    //   </main>
    // </div>
  );
}

export default App;
