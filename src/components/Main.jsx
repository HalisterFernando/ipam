import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allStatesAndCounties, fetchCounties, fetchStates } from '../redux/features/apiSlice';
import { setState, setCounty, selectedStateAndCounty } from '../redux/features/statesCountySlice';
import BrasMap from '../images/brasil.png';
import Loading from './Loading';
import useSessionStorage from '../hooks/UseSessionStorage';

export default function Main() {
  const history = useNavigate();
  const dispatch = useDispatch();

  const { sendToSessionStorage, getFromSessionStorage } = useSessionStorage();
  const { state, county } = useSelector(selectedStateAndCounty);
  const {
    states, counties, fetchingStates, fetchingCounties,
  } = useSelector(allStatesAndCounties);

  const [loading, setLoading] = useState(true);

  const dataFromSessionStorage = getFromSessionStorage('data');
  const selectedState = dataFromSessionStorage
  && states.find(({ sigla }) => dataFromSessionStorage.state === sigla);

  const dispatchObj = {
    state: (value) => dispatch(setState(value)),
    county: (value) => dispatch(setCounty(value)),
  };

  const handleChange = ({ target: { name, value } }) => {
    dispatchObj[name](value);
  };

  useEffect(() => {
    // Envia as informações para o localStorage
    if (state && county) {
      sendToSessionStorage('data', { state, county });
    }
  }, [state, county]);

  useEffect(() => {
    // Verifica lista de estados para não realizar requisição novamente
    if (!states.length) {
      dispatch(fetchStates());
    }
  }, []);

  useEffect(() => {
    // Caso lista de estados exista, set no redux o primeiro valor da lista
    // Caso haja informações no localStorage, set o no redux o valor do estado
    if (dataFromSessionStorage) {
      dispatch(setState(dataFromSessionStorage.state));
    } else if (states.length) {
      dispatch(setState(states[0].sigla));
    }
  }, [states]);

  useEffect(() => {
    // Caso lista de municipios exista, set no redux primeiro valor da lista
    if (counties.length) {
      dispatch(setCounty(counties[0].nome));
    }
  }, [counties]);

  useEffect(() => {
    // Caso estado no redux exista, faça a requisição de municípios
    if (state) {
      dispatch(fetchCounties(state));
    }
  }, [state]);

  useEffect(() => {
    const oneSecond = 1000;
    setTimeout(() => {
      setLoading(false);
    }, oneSecond);
  }, []);

  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-evenly
      gap-2
      h-full
      w-4/5
      mx-auto
      "
    >
      {
        loading ? <Loading /> : (
          <>
            <img className="h-60 drop-shadow-[5px_10px_5px_rgba(0,0,0,0.85)]" src={BrasMap} alt="Mapa do Brasil" />
            <label htmlFor="state" className="max-w-[339px]">
              <span className="font-semibold">Selecione um estado:</span>
              <select
                className="
                w-full
                shadow-sm
              shadow-black
                rounded p-2
                "
                name="state"
                id="state"
                onChange={handleChange}
              >

                {
                  // Caso o usuário queira realizar outra busca,
                  // mantem o mesmo nome do estado anterior
                  selectedState
                  && (<option value={selectedState.sigla}>{selectedState.nome}</option>)
                }
                {
          !fetchingStates && states.map(({ id, sigla, nome }) => (
            <option key={id} value={sigla}>
              {nome}
            </option>
          ))
        }
              </select>
            </label>

            <label htmlFor="county" className="max-w-[339px]">
              <span className="font-semibold">Selecione um município:</span>
              <select
                className="
                w-full
                rounded p-2
                shadow-sm
                shadow-black
                "
                name="county"
                id=""
                onChange={handleChange}
              >
                {
          !fetchingCounties && counties.map(({ id, nome }) => (
            <option key={id} id={id} value={nome}>{nome}</option>
          ))
        }
              </select>
            </label>
            <button
              className="
              w-1/2
              px-4
              py-2
              bg-ipam-l-green
              rounded
              shadow-sm
              shadow-ipam-cream
              font-semibold
              max-w-[339px]
              "
              type="button"
              onClick={() => history(`/${county}`)}
            >
              Buscar
            </button>
          </>
        )
      }

    </div>
  );
}
