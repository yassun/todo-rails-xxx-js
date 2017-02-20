import React from "react";
import GithubCorner from 'react-github-corner';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <GithubCorner href="https://github.com/yassun/todo-rails-xxx-js" bannerColor="#70B7FD"/>
      </div>
    );
  }
}
