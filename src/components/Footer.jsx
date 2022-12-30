import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const isLocationHome = window.location.href.includes('home');
  const history = useNavigate();
  return (
    <div>
      {
        !isLocationHome ? (
          <button
            type="button"
            className="
            flex
            flex-col
            items-center
            text-base
            font-semibold
            rounded
            shadow-sm
            shadow-ipam-cream
            mb-1
            px-3
            py-1
            bg-ipam-l-green
            "
            onClick={() => history('/home')}
          >

            Realizar nova pesquisa
          </button>
        )
          : (

            <span className="text-white">Desenvolvido por Halister Fernando dos Santos</span>

          )

      }
    </div>
  );
}
