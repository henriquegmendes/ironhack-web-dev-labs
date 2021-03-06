import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Card from './components/Card/Card';

const App = () => {
  return (
    <main>
      <section className="main-section-container">
        <div className="navigation">
          <img src="/images/ironhack-logo.svg" alt="ironhack-logo" />
          <img src="/images/menu-top.svg" alt="menu-to-icon"/>
        </div>

        <div className="main-content">
          <Header type="h1" text="Say Hello to ReactJS" />

          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>

          <button>
            Awesome!
          </button>
        </div>
      </section>

      <section className="footer-container">
        <Card
          imagePath="/images/icon1.png"
          imageName="icon 1"
          cardTitle="Declarative"
          description="React makes it painless to create interactive UIs."
        />

        <Card
          imagePath="/images/icon2.png"
          imageName="icon 2"
          cardTitle="Components"
          description="Build encapsulated components that manage their state."
        />

        <Card
          imagePath="/images/icon3.png"
          imageName="icon 3"
          cardTitle="Single-Way"
          description="A set of immutable values are passed to the components."
        />

        <Card
          imagePath="/images/icon4.png"
          imageName="icon 4"
          cardTitle="JSX"
          description="Statically-typed, designed to run on modern web browsers."
        />
      </section>
    </main>
  );
};

export default App;
