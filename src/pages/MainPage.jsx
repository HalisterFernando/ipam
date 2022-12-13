import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function MainPage() {
  return (
    <div className="flex flex-col h-screen ">
      <header className="h-14 bg-ipam-s-green flex items-center justify-center">
        <Header />
      </header>
      <main className="h-full bg-ipam-l-brown">
        <Main />
      </main>
      <footer className="bg-ipam-s-green">
        <Footer />
      </footer>
    </div>
  );
}
