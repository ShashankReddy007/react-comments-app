import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// const initialList = []

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  isCommentLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  isCommentDeleted = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(item => item.id !== id),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const commentClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * (initialContainerBackgroundClassNames.length - 1),
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      date: new Date(),
      name,
      comment,
      isLiked: false,
      commentClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="bg-container">
        <div className="top-section">
          <div className="form-container">
            <h1 className="app-heading">Comments</h1>
            <p className="form-description">Give your opinion</p>
            <form
              className="comment-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                value={name}
                onChange={this.onChangeName}
                className="name-input"
                placeholder="Your Name"
              />
              <textarea
                className="comment-input"
                value={comment}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="bottom-section">
          <p className="heading">
            <span className="comments-count">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(item => (
              <CommentItem
                key={item.id}
                commentItem={item}
                isCommentLiked={this.isCommentLiked}
                isCommentDeleted={this.isCommentDeleted}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
