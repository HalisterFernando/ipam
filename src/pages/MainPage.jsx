import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function MainPage() {
  return (
    <div className="main-container">
      <header>
        <Header />
      </header>
      <main className="container">
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
