import React from 'react';
import { SiOpenstreetmap } from 'react-icons/si';

export default function Header() {
  return (
    <>
      <h1 className="text-4xl font-semibold font-fugaz">MAPI</h1>
      <i className="text-4xl"><SiOpenstreetmap /></i>
    </>

  );
}
