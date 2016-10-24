// It's convention to capitalise your components, "App.js"
import React from "react";

import NewPost from "./NewPost/NewPost.js";
import Post from "./Post/Post.js";

export default class App extends React.Component {
  constructor() {
      super(); // Deals with extension and inheritance from parent component

      this.state = {
        posts: []
        , showNewPostForm: false
      };
  }

  savePost( post ) {
    console.log( this.state.posts );
    this.setState( { // One of React's main ideas is to not mutate state directly. Always use this.setState, don't use this.state.posts = "something";
      posts: [ ...this.state.posts, post ]
      , showNewPostForm: false
    } );
  }

  getPostInfo( post ) {
    alert( post );
  }

  toggleNewPostForm() {
    this.setState( {
      showNewPostForm: !this.state.showNewPostForm
    } );
  }

  render() {
    const posts = this.state.posts.map( ( post, index ) => <Post key={ index } getInfo={ this.getPostInfo } { ...post } /> );

    // All JSX lives in render(), each component needs a render().
    return ( // The parens in the return expression are just for formatting, not needed. You can only return one parent level HTML element.
      <div>
        {
          this.state.showNewPostForm
            ?
              <NewPost savePost={ this.savePost.bind( this ) } testProp="Hello I'm test prop" />
            :
              <button onClick={ this.toggleNewPostForm.bind( this ) }>New Post</button>
        }
        { posts }
      </div>

    );
  }
}

// React components can have their own individual state.
// onChange={ this.handleChange.bind( this ) } .bind( this ) is needed because the onChange method's this is bound to the scope of that function. The "this" in the .bind( this ) refers to the class's this context and we want the onChange function to use this as the App's scope instead of its own scope.

//savePost is put on the component NewPost's .props object

// <Post { ...post } /> ...post is the object spread operator

//components rerender if props or state changes
