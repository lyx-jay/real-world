import React, { Component } from 'react';
import './Explore.css';

const GITHUB_REPO = 'https://github.com/reduxjs/redux';

export default class Explore extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper__header">
            <p className="header__text">
            Type a username or repo full name and hit 'Go':
            </p>
          </div>
          <div className="wrapper__main">
            <input type="text" />
            <button>Go</button>
          </div>
          <div className="wrapper__footer">
            <div className="footer__link">
              <p>Code on <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">Github</a>.</p>
            </div>
            <p className="footer__text">
            Move the DevTools with Ctrl+W or hide them with Ctrl+H.
            </p>
          </div>
        </div>
      </>
    )
  }
}
