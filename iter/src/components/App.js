import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// scss파일
import "../styles/App.scss";
// import Navigation from "./Navigation";
// import Cards from "./Cards";
// import Sidebar from "./Sidebar";
// import Login from "./Login";
// import { Route, Routes } from "react-router-dom";
// import Mainimage from "./Mainimage";
// import Profile from "./Profile";
// import Post from "./Post";
// import Save from "./Save";
// import Mypage2 from "./Mypage2";
// import MainCards from "./MainCard/MainCards";
import MyCards from "./MyCards";
// import MainCard from "./MainCard";
// import PostCard from "./PostCard_img";
import PostCards from "./PostCards";

// import Logincopy from "./Logincopy";
// import Mypage from "./Mypage";
import LogincopyDR from "./LogincopyDR";

import FollowerDR from "./FollowerDR";
import FollowingDR  from "./FollowingDR ";
import AlramDR from "./AlramDR";
import SignInSidecopyDR from "./SignInSidecopyDR";
import Navigation from "./Navigation";
import MainNavigation from "./MainNavigation";
import Test from "./Test";

import AlramDRcopy from "./AlramDRcopy";

import "./Main/maincards.scss";
// js파일
import Login from "./Login/Login";
import SignIn from "./Login/SignIn";
import MainCards from "./Main/MainCards";
import MyCards from "./MyPages/MyCards";
import IterMap from "./IterMap/IterMap";
import Notifications from "./Notifications/Alram";

function App() {
  return (
    // <Logincopy/>
    // <Post></Post>
    //<Save></Save>
    // <PostCards/>
    <MainCards/>
    // <LogincopyDR/>
    // <FollowerDR/>
    // <FollowingDR/>
    // <AlramDR/>
    // <SignInSidecopyDR/>
    // <Test/>
    // <HomebuttonDR/> 
    // <AlramDRcopy/>



    // <>
    // <div className="App">
    //   <MainNavigation />
    //   <MyCards/>
    // </div>
    // </>
  )
}
export default App;







// function App() {
//   return (
//     <>

//     <Router>
//       <Routes>
//         {/* path -> 원하는 요소(컴포넌트에) 주소 값을 부여해주는 역할
//             '/' 하나만 적을 경우 기본 값이 localhost:3000 이라는 주소값으로  부여됨
            
//             element -> 주소 값을 부여할 컴포넌트를 정의!*/}
        
//         <Route path="/" element={<Login/>} />
//         <Route path="/SignIn" element={<SignIn/>} />
//         <Route path="/MainView" element={<MainCards/>} />
//         <Route path="/MyPages" element={<MyCards/>} />
//         <Route path="/IterMap" element={<IterMap/>} />
//         <Route path="/Notifications" element={<Notifications/>} />


//       </Routes>
//     </Router>
//     </>

//   );
// }

// export default App;
