import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountyData, allStatesAndCounties } from '../redux/features/apiSlice';
import { selectedStateAndCounty } from '../redux/features/statesCountySlice';
import Images from '../images/images';

export default function CountyData() {
  const { counties, countyData } = useSelector(allStatesAndCounties);
  const { county } = useSelector(selectedStateAndCounty);
  const { id: countyId } = counties.find(({ nome }) => nome === county);

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
              {countyData[0].municipio.microrregiao.mesorregiao.UF.nome}
              {' '}
              -
              {' '}
              {countyData[0].municipio.microrregiao.mesorregiao.UF.sigla}
            </p>
            <p>
              <strong>Região:</strong>
              {' '}
              {countyData[0].municipio.microrregiao.mesorregiao.UF.regiao.nome}
              {' '}
              -
              {' '}
              {countyData[0].municipio.microrregiao.mesorregiao.UF.regiao.sigla}
            </p>
            <p>
              <strong>Microrregião:</strong>
              {' '}
              {countyData[0].municipio.microrregiao.nome}
            </p>
            <p>
              <strong>Mesorregião:</strong>
              {' '}
              {countyData[0].municipio.microrregiao.mesorregiao.nome}
            </p>
          </>
        )
      }
        <img className="h-36 drop-shadow-[5px_10px_5px_rgba(0,0,0,0.85)] mx-auto" src={Images[countyData.length ? countyData[0].municipio.microrregiao.mesorregiao.UF.regiao.nome : null]} alt="" />
      </div>
      <h1 className="text-center text-xl my-4 font-bold bg-ipam-l-green">Distritos</h1>
      <ul className="text-center">

        {

        countyData.length && countyData.map(({ nome, id }) => (
          // console.log(data.municipio.microrregiao.nome)
          <li key={id} className="font-medium">{nome}</li>

        ))
      }
      </ul>
    </div>
  );
}
