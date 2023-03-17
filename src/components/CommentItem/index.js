// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentItem, isCommentLiked, isCommentDeleted} = props
  const {date, name, comment, isLiked, id, commentClassName} = commentItem

  const likeTextClassName = isLiked ? 'button active' : 'button'

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeIcon = () => {
    isCommentLiked(id)
  }

  const onClickLDeleteIcon = () => {
    isCommentDeleted(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={commentClassName}>
          <p className="initial">{name.substring(0, 1)}</p>
        </div>
        <div className="username-time-container">
          <p className="username">{name}</p>
          <p className="time">{formatDistanceToNow(date)} ago</p>
        </div>
      </div>
      <p className="comment">{comment}</p>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImgUrl} className="like-image" alt="like" />
          <button
            type="button"
            className={likeTextClassName}
            onClick={onClickLikeIcon}
            alt="like"
          >
            Like
          </button>
        </div>

        <button
          type="button"
          className="button"
          onClick={onClickLDeleteIcon}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
