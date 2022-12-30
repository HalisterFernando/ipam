import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function MainPage() {
  return (
    <div className="flex flex-col h-screen">
      <header
        className="
        h-14
        bg-ipam-s-green
        flex
        items-center
        justify-center
        gap-2
        border-b-2
        border-black
        "
      >
        <Header />
      </header>
      <main className="h-full bg-ipam-l-brown">
        <Main />
      </main>
      <footer
        className="
        bg-ipam-s-green
        flex
        justify-center
        items-center
        py-2
        border-t-2
        border-black
        "
      >
        <Footer />
      </footer>
    </div>
  );
}
