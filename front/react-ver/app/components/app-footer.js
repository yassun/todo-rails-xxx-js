import React, { Component } from 'react'
import styles from '../css/header.css'

export default class AppFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="center">
          <p><span>Created by <strong><a href="http://dokichupa.github.io/">yasuun</a></strong></span></p>
        </div>
      </footer>
    );
  }
}

