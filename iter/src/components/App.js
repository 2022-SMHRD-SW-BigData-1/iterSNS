import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// scss파일
import "../styles/App.scss";
import "./Main/maincards.scss";

// js파일
import Login from "./Login/Login";
import PostCards from "./UserPost/PostCards";
import SignIn from "./Login/SignIn";
import MainCards from "./Main/MainCards";
import MyCards from "./MyPages/MyCards";
import IterMap from "./IterMap/IterMap";
import Notifications from "./Notifications/Alram";




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
        <Route path="/MainView" element={<MainCards/>} />
        <Route path="/MyPages" element={<MyCards/>} />
        <Route path="/PostCards" element={<PostCards/>} />
        <Route path="/Notifications" element={<Notifications/>} />
        
        <Route path="/Login" element={<Login/>} />

      </Routes>
    </Router>
    </>
  );
}
export default App;