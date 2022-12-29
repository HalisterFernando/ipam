import React from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const isLocationHome = window.location.href.includes('home');
  const history = useNavigate();
  return (
    <footer className="flex justify-center items-center py-2">
      {
        !isLocationHome && (
        <button
          type="button"
          className="flex flex-col items-center text-lg font-semibold"
          onClick={() => history('/home')}
        >
          <i className="text-3xl">
            {' '}
            <BsArrowLeftCircle />
            {' '}
          </i>
          Realizar nova pesquisa
        </button>
        )
      }
    </footer>
  );
}
