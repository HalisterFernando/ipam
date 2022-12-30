import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountyData from '../components/CountyData';

export default function CountyDataPage() {
  return (
    <div className="flex flex-col h-screen ">
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
      <main className="h-full overflow-y-auto bg-ipam-l-brown">
        <CountyData />
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
