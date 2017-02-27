import React, { Component } from 'react'
import styles from '../css/header.css'

export default class AppHeader extends React.Component {
  render() {
    return (
      <header className="center">
        <h1 className={styles.title}>{this.props.title}</h1>
        <h2 className={styles.subTitle}>{this.props.subTitle}</h2>
      </header>
    );
  }
}

