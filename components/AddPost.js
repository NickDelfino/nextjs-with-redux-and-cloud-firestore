import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'react-bootstrap'
import TextareaAutosize from 'react-autosize-textarea';
import { updateUserPost, addPost } from '../actions'

class AddPost extends React.Component {
  //When user clicks add post fire the add post event.
  onClick(){
    this.props.addPost(this.props.userPost);
  }

  //Update user text input as they type by firing this action.
  handleChange(event){
    this.props.updateUserPost(event.target.value);
  }

  render() {
    const { userPost } = this.props;

    return(
      <div className='textarea-style'>
        <TextareaAutosize
          style={{
           resize: 'none',
           width: '100%',
           outline: 'none'
          }}
          rows={3}
          maxRows={50}
          placeholder='Post it...'
          value={userPost}
          onChange={this.handleChange.bind(this)}
        />
        <div className='bottom-bar'>
          <Button
            className='bottom-bar-item'
            onClick={this.onClick.bind(this)}
          >
            Post
          </Button>
        </div>
        <style jsx>{`
          .bottom-bar{
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
          }

          .textarea-style{
            max-width: 600px;
            width: 92%;
            padding: 5px;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 10px;
            background: white;
            box-shadow: 1px 1px 1px black;
          }
        `}</style>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserPost: bindActionCreators(updateUserPost, dispatch),
    addPost: bindActionCreators(addPost, dispatch)
  }
};

export default connect(state => state, mapDispatchToProps)(AddPost);