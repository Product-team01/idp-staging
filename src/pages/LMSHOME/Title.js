import React, { Component } from 'react';
import './App.css';
import './reveal.css';

class Title extends Component {
  render() {
    return (
      <div>
        <main className="container">
      
          <section className="animation">
            <div className="first"><div> Welcome to VueLearn</div></div>
            <div className="second"><div>Let's Learn</div></div>
            <div className="third"><div></div>Welcome to VueLearn</div>
          </section>
        </main>
        <section className="unique-app-title">
          <div className="unique-app-title-content">
            <h3>Discover our latest Courses</h3>
          </div>
        </section>
      </div>
    );
  }
}

export default Title;