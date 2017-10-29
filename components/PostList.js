import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostItem from './PostItem';
import AddPost from '../components/AddPost';
import { fetchPosts } from '../actions';
import LoadingSpinner from './Loading';

//List component which loads posts as they come in.
class postList extends React.Component{
  static getInitialProps ({ store, isServer }) {
    store.dispatch(fetchPosts());
    return { isServer }
  }

  //Determines if posts are loading.
  //This is determined by seeing if there are any posts yet.
  //This could also be done by dispatching an action
  //before setting up the listener to notify that loading
  //is happening on a prop.
  isLoading(){
    const { posts } = this.props;
    if(posts && posts.length === 0){
      return(
          <LoadingSpinner />
      );
    }
  }

  //Start the listener when components mount.
  componentDidMount () {
    this.props.fetchPosts();
  }

  //Renders the list and all the post items returned from the listener.
  render() {
    const { posts } = this.props;

      return (
        <div className='list'>
          <AddPost />
          {this.isLoading()}
          {
            posts.map((post, i) => (
              <PostItem key={post.id} post={post}/>
            ))
          }
          <style jsx>
          {`
            .list{
              display:flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-bottom: 10px;
            }
          `}
          </style>
        </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch)
  }
};

export default connect(state => state, mapDispatchToProps)(postList)