import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// scss파일
import "../styles/App.scss";
import "./Main/maincards.scss";
// js파일
import Login from "./Login/Login";
import SignIn from "./Login/SignIn";
import MainCardsDR from "./Main/MainCardsDR";
import MyCards from "./MyPages/MyCards";
import IterMap from "./IterMap/IterMap";
import Notifications from "./Notifications/Alram";
//
import TestFollowerDR from "./TestFollowerDR";
import TestFollowingDR from "./TestFollowingDR";
import Follower from "./Notifications/Follower";
import Following from "./Notifications/Following";
import TestAlramDR from "./Notifications/TestAlramDR";

import Test from "./Test";
import SignInDR from "./Login/SignInDR";

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* path -> 원하는 요소(컴포넌트에) 주소 값을 부여해주는 역할
            '/' 하나만 적을 경우 기본 값이 localhost:3000 이라는 주소값으로  부여됨
            element -> 주소 값을 부여할 컴포넌트를 정의!*/}
        <Route path="/" element={<Login/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/MainView" element={<MainCardsDR/>} />
        <Route path="/MyPages" element={<MyCards/>} />
        <Route path="/IterMap" element={<IterMap/>} />
        <Route path="/Notifications" element={<Notifications/>} />
        {/* -- */}
        <Route path="/TestAlramDR" element={<TestAlramDR/>}/>
        <Route path="/TestFollowingDR" element={<TestFollowingDR/>}/>
        <Route path="/TestFollowerDR" element={<TestFollowerDR/>}/>
        <Route path="/Follower" element={<Follower/>}/>
        <Route path="/Following" element={<Following/>}/>

        <Route path="/Test" element={<Test/>}/>
        <Route path="/SignInDR" element={<SignInDR/>}/>
        
      </Routes>
    </Router>
    </>
  );
}
export default App;