import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountyData, allStatesAndCounties } from '../redux/features/apiSlice';
import { selectedStateAndCounty } from '../redux/features/statesCountySlice';
import Images from '../images/images';

export default function CountyData() {
  const { counties, countyData } = useSelector(allStatesAndCounties);
  const { county } = useSelector(selectedStateAndCounty);
  const { id: countyId } = counties.find(({ nome }) => nome === county);

  const ufNome = countyData.length && countyData[0].municipio.microrregiao.mesorregiao.UF.nome;
  const ufSigla = countyData.length && countyData[0].municipio.microrregiao.mesorregiao.UF.sigla;

  const regiaoNome = countyData.length
  && countyData[0].municipio.microrregiao.mesorregiao.UF.regiao.nome;

  const regiaoSigla = countyData.length
  && countyData[0].municipio.microrregiao.mesorregiao.UF.regiao.sigla;

  const microNome = countyData.length && countyData[0].municipio.microrregiao.nome;
  const mesoNome = countyData.length && countyData[0].municipio.microrregiao.mesorregiao.nome;

  const dispatch = useDispatch();

  useEffect(() => {
    if (countyId) {
      dispatch(fetchCountyData(countyId));
    }
  }, [countyId]);

  return (
    <div>
      <div className="
        shadow-sm
        shadow-ipam-cream
        rounded
        mt-4
        py-4
        px-2
        w-11/12
        mx-auto
        bg-ipam-l-green
      "
      >
        <h2>
          <strong>Município:</strong>
          {' '}
          {county}
        </h2>

        {
        countyData.length && (
          <>
            <p>
              <strong>UF:</strong>
              {' '}
              {ufNome}
              {' '}
              -
              {' '}
              {ufSigla}
            </p>
            <p>
              <strong>Região:</strong>
              {' '}
              {regiaoNome}
              {' '}
              -
              {' '}
              {regiaoSigla}
            </p>
            <p>
              <strong>Microrregião:</strong>
              {' '}
              {microNome}
            </p>
            <p>
              <strong>Mesorregião:</strong>
              {' '}
              {mesoNome}
            </p>
          </>
        )
      }
        <img
          className="
            h-36
            drop-shadow-[5px_10px_5px_rgba(0,0,0,0.85)]
            mx-auto
            "
          src={Images[regiaoNome]}
          alt={`Mapa da região ${regiaoNome}`}
        />
      </div>
      <h1 className="text-center text-xl my-4 font-bold bg-ipam-l-green">Distritos</h1>
      <ul className="text-center">

        {

        countyData.length && countyData.map(({ nome, id }) => (

          <li key={id} className="font-medium">{nome}</li>

        ))
      }
      </ul>
    </div>
  );
}
