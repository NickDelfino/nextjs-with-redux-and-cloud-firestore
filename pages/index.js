import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Nav from '../components/Nav';
import PostList from '../components/PostList';

class Posts extends React.Component {
  render () {
    return (
        <div className='list'>
          <Nav />
          <PostList />
        </div>
    )
  }
}

export default withRedux(initStore, null, null)(Posts)