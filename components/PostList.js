import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostItem from './PostItem';
import AddPost from '../components/AddPost';
import { fetchPosts } from '../actions';
import LoadingSpinner from './LoadingSpinner';

class postList extends React.Component{
  static getInitialProps ({ store, isServer }) {
    store.dispatch(fetchPosts());
    return { isServer }
  }

  isLoading(){
    const { posts } = this.props;
    if(posts && posts.length === 0){
      return(
          <LoadingSpinner />
      );
    }
  }

  componentDidMount () {
    this.props.fetchPosts();
  }

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