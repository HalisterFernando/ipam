import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountyData, allStatesAndCounties } from '../redux/features/apiSlice';
import { selectedStateAndCounty } from '../redux/features/statesCountySlice';

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
      <h2>{`Município: ${county}`}</h2>
      {
        countyData.length && (
          <>
            <p>
              {`UF: ${countyData[0].municipio.microrregiao.mesorregiao.UF.nome} - ${countyData[0].municipio.microrregiao.mesorregiao.UF.sigla} `}
            </p>
            <p>
              {`Região: ${countyData[0].municipio.microrregiao.mesorregiao.UF.regiao.nome} - ${countyData[0].municipio.microrregiao.mesorregiao.UF.regiao.sigla}`}
            </p>
            <p>
              {`Microrregião: ${countyData[0].municipio.microrregiao.nome}`}
            </p>
            <p>
              {`Mesorregião: ${countyData[0].municipio.microrregiao.mesorregiao.nome}`}
            </p>
          </>
        )
      }
      <h2>Distritos</h2>
      <ul>

        {

        countyData.length && countyData.map((data) => (
          // console.log(data.municipio.microrregiao.nome)
          <li>{data.nome}</li>

        ))
      }
      </ul>
    </div>
  );
}
