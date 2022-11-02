
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
});

router.post("/SignIn", function (request, response) {
  const userID = request.body.email;
  const userPW = request.body.pw;
  const userName = request.body.phone;
  const userGender = request.body.gender;
  const userRegNumber = request.body.regnumber1 + request.body.regnumber2;

  console.log("사용자가 입력한 ID : " + request.body.email);
  console.log("사용자가 입력한 PW : " + request.body.pw);
  console.log("사용자가 입력한 이름 : " + request.body.phone);
  console.log("사용자가 입력한 날짜 : " + request.body.address);
  console.log("사용자가 입력한 성별 : " + request.body.address);
  console.log("사용자가 입력한 주민번호 : " + userRegNumber);

  let sql = "insert into t_user(user_id, user_pw, user_name, user_joindate, user_type, user_gender, user_regnumber) values(?, ?, ?, sysdate(), '0', ?, ?)";
  conn.query(sql, [userID, userPW, userName, userGender, userRegNumber], function (err, rows) {
    if (!err) {
      console.log("회원가입 완료!");
      response.json({result:"success Join"})
    } else {
      console.log("회원가입 실패!" + err);
    }
  });
});

router.post("/Login", function (request, response) {
  const userID = request.body.email;
  const userPW = request.body.password;
  
  // response.json({ result: "success" });
  
  let sql = "select * from t_user where user_id=? and user_pw=?";
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

    //   } else{
    //     console.log("메세지가 없음");
    //   };
    // });

});

module.exports = router;