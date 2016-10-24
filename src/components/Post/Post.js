import React from "react";

export default function Post( props ) {
  return (
    <div>
      <h3 onClick={ () => props.getInfo( props.title ) }>{ props.title }</h3>
      <p>{ props.content }</p>
    </div>
  );
}

Post.propTypes = {
  title: React.PropTypes.string.isRequired
  , content: React.PropTypes.string.isRequired
  , getInfo: React.PropTypes.func.isRequired
};

// Line 13 is kind of like in mongoose Schema Types, where you set what each variable is expected to be, and will throw an error if not. React will throw an error if title or content are not strings or not present.
