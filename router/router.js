const { RouteTwoTone } = require("@mui/icons-material");
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const path = require("path");
const multer = require("multer");
const upload = multer({ test: "upload/" });

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
let userCnt;

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
    "insert into t_user(user_id, user_pw, user_name, user_gender, user_regnumber) values(?, ?, ?, ?, ?)";
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
  console.log("test")
  const userID = request.body.email;
  const userPW = request.body.password;

  let sql = "select * from t_user where user_id=? and user_pw=?";
  conn.query(sql, [userID, userPW], function (err, rows) {
    if (rows.length > 0) {
      request.session.user = {
        userID: rows[0].user_id,
        userSeq: rows[0].user_seq,
      };
      idqwe = request.session.user.userID;
      seqwe = request.session.user.userSeq;

      response.json({ result: "success", id: userID });
    } else {
      console.log("로그인 실패");
    }
  });
});

router.post("/Logout", function (request, response) {
  console.log("로그아웃 성공!");
 
  delete request.session.user;
  msgarr = [];
  idqwe = "";
  seqwe = "";
  response.json({res: "success"});
});

router.post("/Userpost", upload.single("jeju"), function (request, response) {
  const post = request.body.posttext;
  const location = request.body.loacationtext;
  const id = idqwe;
  const seq = Number(seqwe);
  const img = request.file.buffer;

  let sql =
    "insert into t_post(user_seq, user_id, post_location, post_content, post_img) values (?, ?, ?, ?, ?)";

  conn.query(sql, [seq, id, location, post, img], function (err, rows) {
    if (!err) {
      console.log("업로드 완료!");
      response.redirect("http://127.0.0.1:3000/MainView");
    } else {
      console.log("업로드 실패!" + err);
    }
  });
});

router.post("/Comment", function (request, response) {

  const comment = request.body.post;

});

router.post("/getUser", function (request, response){

  let sql = "select * from t_post order by post_date desc";
  conn.query(sql, function (err, rows) {
    if (rows.length > 0) {
      response.json({ result: "success", userInfo: rows });
    } else {
      console.log("로그인 실패");
    }
  });
});

//좋아요
router.post("/Postlikes", function (request, response) {
  const likeState = request.body.postlike;
  let sql;
  if( likeState == false ){
    sql = "update t_post set post_likes = post_likes+1";
  } else{
    sql = "update t_post set post_likes = post_likes-1";
  }  
  
  conn.query(sql, function (err, rows) {
    if (!err) {
      console.log("좋아요 완료!");
    } else {
      console.log("좋아요 실패!" + err);
    }
  });
});

//저장
router.post("/Save", function (request, response) {
  const id = idqwe;
  const seq = Number(seqwe);
  let p_seq;

    let sql = "select * from t_post where user_id = ?";

    conn.query(sql, [id], function (err, rows) {
      if (rows.length > 0) {
        console.log("불러오기 성공!");
        const p_seq = rows[0];
      } else {
        console.log("저장 실패!" + err);
      }
    });

  sql = "insert into t_bookmark(user_seq, user_id, post_seq) values(?, ?, ?)";
  conn.query(sql, [seq, id], function (err, rows) {
    if (!err) {
      console.log("저장 완료!");
    } else {
      console.log("저장 실패!" + err);
    }
  });
});

router.get("*", (request, respond) => {
  console.log("접속을 환영합니다 FnD 팀!!!");
  respond.sendFile(path.join(__dirname, "..", "iter", "build", "index.html"));
});


module.exports = router;
