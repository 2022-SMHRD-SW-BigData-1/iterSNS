import "./comment.scss";
function Comment(props) {
  const { 
          content,   // 댓글 내용
          accountName,        // 댓글 작성자
  } = props
  return (
    <div className="commentContainer">
      <div className="accountName">{accountName}</div>
      <div className="comment">{content}</div>
    </div>
  );
}
export default Comment;