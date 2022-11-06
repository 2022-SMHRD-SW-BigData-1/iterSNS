const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const path = require("path");

let conn = mysql.createConnection({
  host: "project-db-stu.ddns.net",
  user: "campus_h_1024_1",
  password: "smhrd1",
  port: "3307",
  database: "campus_h_1024_1",
});

let msgarr = [];
let idqwe;
let seqwe;

router.get("*", (request, respond) => {
  console.log("접속을 환영합니다 FnD 팀!!!");
  respond.sendFile(path.join(__dirname, "..", "iter", "build", "index.html"));
});

router.post("/SignIn", function (request, response) {
  const userID = request.body.email;
  const userPW = request.body.password;
  const userName = request.body.name;
  const userGender = request.body.gender;
  const userRegNumber = request.body.firstJumin + request.body.lastJumin;

  console.log("사용자가 입력한 ID : " + request.body.email);
  console.log("사용자가 입력한 PW : " + request.body.password);
  console.log("사용자가 입력한 이름 : " + request.body.name);
  console.log("사용자가 입력한 성별 : " + request.body.gender);
  console.log("사용자가 입력한 주민번호 : " + userRegNumber);

  let sql =
    "insert into t_user(user_id, user_pw, user_name, user_joindate, user_type, user_gender, user_regnumber) values(?, ?, ?, sysdate(), '0', ?, ?)";
  conn.query(
    sql,
    [userID, userPW, userName, userGender, userRegNumber],
    function (err, rows) {
      if (!err) {
        console.log("회원가입 완료!");
        response.json({ result: "success Join" });
      } else {
        console.log("회원가입 실패!" + err);
      }
    }
  );
});

router.post("/Login", function (request, response) {
  const userID = request.body.email;
  const userPW = request.body.password;

  // response.json({ result: "success" });

  let sql = "select * from t_user where user_id=? and user_pw=?";
  conn.query(sql, [userID, userPW], function (err, rows) {
    if (rows.length > 0) {
      request.session.user = {
        userID: rows[0].user_id,
        userSeq: rows[0].user_seq,
        // userPN: rows[0].phone,
        // userAD: rows[0].address,
      };
      idqwe = request.session.user.userID;
      seqwe = request.session.user.userSeq;

      response.json({ result: "success", id: userID });
    } else {
      console.log("로그인 실패");
    }
  });

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

router.get("/Logout", (request, response) => {
  delete request.session.user;
  msgarr = [];
  idqwe = "";
  seqwe = "";

  console.log("로그아웃 성공!");
  
});

router.post("/Userpost", function (request, response) {
  const post = request.body.post;
  const location = request.body.location;
  const id = idqwe;
  const seq = Number(seqwe);

  console.log(id);
  let sql =
    "insert into t_post(user_seq, user_id, post_date, post_location, post_content, post_likes, post_dislikes) values (?, ?, sysdate(), ?, ?, 0, 0)";

  conn.query(sql, [seq, id, location, post, id], function (err, rows) {
    if (!err) {
      console.log("업로드 완료!");
      response.json({ result: "success Join" });
    } else {
      console.log("업로드 실패!" + err);
    }
  });
});

module.exports = router;
