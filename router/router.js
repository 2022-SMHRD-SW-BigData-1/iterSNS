
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const path = require("path");


let conn = mysql.createConnection({
  host: "project-db-stu.ddns.net",
  user: "campus_h_1024_1",
  password: "smhrd1",
  port: "3307",
  database: "campus_h_1024_1"
});


let msgarr = [];

router.get('*',(request,respond)=>{
      console.log("접속을 환영합니다 FnD 팀!!!")
      respond.sendFile(path.join(__dirname, "..", "iter", "build", "index.html"));
})

router.post("/Login", function (request, response) {
  const userID = request.body.email;
  const userPW = request.body.password;
  
  // response.json({ result: "success" });
  
  let sql = "select * from member where id=? and pw=?";
  conn.query(sql, [userID, userPW], function (err, rows) {
    if (rows.length > 0) {
      request.session.user = {
        userID: rows[0].id,
        // userPW: rows[0].pw,
        // userPN: rows[0].phone,
        // userAD: rows[0].address,
      };      
      response.json({ result: "success", id: userID});
      console.log(userID, userPW)
  
    } else {
      console.log("로그인 실패")
    }});
    
    // sql = "select * from message where id=?";
    // conn.query(sql, [userID], function(err, rows){
  
    //   if(rows.length>0){
    //     msgarr=[];          
    //     for(let i=0; i<rows.length; i++){
    //       msgarr.push({name : rows[i].name,
    //       content : rows[i].content});
    //     };

    //     response.redirect("http://127.0.0.1:3000/MainView");
    //   } else{
    //     console.log("메세지가 없음");
    //     response.redirect("http://127.0.0.1:3000/");
    //   };
    // });

});

module.exports = router;