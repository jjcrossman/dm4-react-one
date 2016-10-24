import React from "react";

import "./NewPost.css";

export default class NewPost extends React.Component {
  constructor( props ) { // you have to pass properties to the constructor and super too
    super( props );
    console.log( this.props.testProp );
    console.log( this.props.savePost );

    this.state = {
      postTitle: ""
      , postContent: ""
    };

  }

  static get propTypes() { // static let's you use something before it exists, see line 61. get is kind of like const for an object
    return {
      // postContent: React.PropTypes.string.isRequired
      savePost: React.PropTypes.func.isRequired
    };
  }

  handleChange( field, event ) {
      this.setState( {
        [ field ]: event.target.value // [] means dynamic object keys
      } );
  }

  savePost() {
    this.props.savePost( {
      title: this.state.postTitle
      , content: this.state.postContent
    } );
  }

  render() {
    return (
      <section>
        <input
        className="post-title"
        onChange={ this.handleChange.bind( this, "postTitle" ) }
        type="text"
        value={ this.state.postTitle }
        />
        <textarea cols="30" rows="10"
          onChange={ this.handleChange.bind( this, "postContent" ) }
          value ={ this.state.postContent }
        ></textarea>
        <button onClick={ this.savePost.bind( this ) }>Save Post</button>
      </section>
    );
  }
}

// any tag in React can be self-closing
// className in JSX means <div class="">, because class by itself is a Javascript keyword, so we can't use that.

// this.props.savePost is the method we passed NewPost from App.js as a property (even though it looks like an element's attribute)

console.log( NewPost.propTypes );
