import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountyData from '../components/CountyData';

export default function CountyDataPage() {
  return (
    <div className="main-container">
      <header>
        <Header />
      </header>
      <main className="container">
        <CountyData />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
